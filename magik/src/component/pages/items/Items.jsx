import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from "@material-ui/icons";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";
import { Helmet } from 'react-helmet';
import './items.css';
import { SearchOutlined } from '@material-ui/icons';

const Items = ({ hideElement }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isCartVisible, setCartVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = ["Popular", "Event", "Anniversary", "Specialgift"];
  const itemsPerPage = 8;

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleToggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  useEffect(() => {
    const getallItems = async () => {
      try {
        const response = await axios.get('/api/items', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            // You can add other headers if needed
          },
        });
        console.log(response.data);
        setAllItems(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getallItems();
  }, []);



  useEffect(() => {
    const selectedItems = allItems.map(item => ({
      ...item,
      isVisible:
        item.type.toLowerCase() === selectedCategory.toLowerCase() &&
        (item.for.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.price.toString().includes(searchInput)),
    }));

    const visibleItems = selectedItems.reduce((acc, item) => {
      if (item.isVisible) {
        acc.push(item);
      }
      return acc;
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedItems = visibleItems.slice(startIndex, endIndex);

    setDisplayedItems(slicedItems);
    setTotalPages(Math.ceil(visibleItems.length / itemsPerPage));
  }, [allItems, selectedCategory, itemsPerPage, currentPage, searchInput]);


  useEffect(() => {
    const newTotalAmount = cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems && cartItems.length === 0) {
      dispatch(addToCart(JSON.parse(storedCartItems)));
    }
  }, [cartItems, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product._id,
      type: product.type,
      name: product.for,
      price: product.price,
      image: product.image,
      quantity: 1,
    }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleClearCart = () => {
    localStorage.removeItem('cartItems');
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const handleCheckout = () => {
    const totalPrice = getTotalPrice();
    navigate(`/user/checkout?amount=${totalPrice}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const generateProductStructuredData = (product) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.for,
      description: product.type,
      image: `https://magikworld01.com/uploads/${product.image}`,
      sku: product.id,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'NGN, USD', // Replace with the appropriate currency code
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Magik World',
        },
      },
    };
  };

  return (
    <>

      <div className="cart-icon" onClick={handleToggleCart}>
        <ShoppingCart className='searchicon2' />
        <span className="cart-count">{cartItems.length >= 0 ? cartItems.length : 0}</span>
      </div>

      {hideElement ? (
        <div className="searchcart">
          <input
            type="text"
            placeholder="Find your gift and personalise"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <SearchOutlined className="catalog-search-icon" />
        </div>
      ) : null}

      <div>
        {isCartVisible && (
          <div className="cart-container1">
            <div className="cart-content1">
              <h2>Cart</h2>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div className="item-each" key={item.id}>
                      <p>{item.type}</p>
                      <p>{item.name}</p>
                      <img className="items-images" src={`/uploads/${item.image}`} alt="" />
                      <p>${item.price}</p>
                      <div className="buttons">
                        <button className="remove" onClick={() => handleRemoveFromCart(item)}>
                          Remove from Cart
                        </button>
                        <div className="inc-btn">
                          <button className="minus" onClick={() => handleDecreaseQuantity(item)}>-</button>
                          <span>{item.quantity}</span>
                          <button className="plus" onClick={() => handleIncreaseQuantity(item)}>+</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="price">Total Price: ₦{getTotalPrice()}</p>
                  <button onClick={handleCheckout} className="checkout-button">
                    Checkout
                  </button>
                  <button className="clear" onClick={handleClearCart}>Clear Cart</button>
                </>
              ) : (
                <p>No items in the cart</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="items-container">
        {hideElement ? null : (
          <h1 className="solo">Trending Gift</h1>
        )}
        <div className="items-list">
          <ul>
            {categories.map((category) => (
              <li
                className={selectedCategory === category ? "active" : ""}
                key={category}
              >
                <span
                  href="#"
                  onClick={() => handleClickCategory(category)}
                >
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cart-container">
          {displayedItems?.map((item) => (

            <div key={item.id} className="items-cart-contianer">
              <Helmet>
                <script type="application/ld+json">{JSON.stringify(generateProductStructuredData(item))}</script>
              </Helmet>
              <div className="items-img">
                <img src={`/uploads/${item.image}`} alt="" />
              </div>
              <div className="items-details">
                <span className="for"> {item.for}</span>{" "}
                <span className="items-price">₦{item.price}</span>
              </div>
              <p> {item.type}</p>
              <div className="add-to-cart">
                <li>
                  <span onClick={() => handleAddToCart(item)}>
                    <ShoppingCart on className="cart-icon-items" /> Add to cart
                  </span>
                </li>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {totalPages > 1 && (
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaArrowCircleLeft className="left1" />
              </button>
              <span>{currentPage}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FaArrowCircleRight className="right1" />
              </button>
            </div>
          )}
        </div>



        {hideElement ? null : (
          <div className="shop-now">
            <li>
              <a href="/gift-catalogue">
                {" "}
                Shop Now
                <FaArrowCircleRight className="arrow-shop" />
              </a>
            </li>
          </div>
        )}
      </div>
    </>
  );
};

export default Items;
