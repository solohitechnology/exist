





import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from "@material-ui/icons";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";
import './items.css';

const Items = ({ hideElement }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isCartVisible, setCartVisible] = useState(false);
 
console.log(cartItems)

  const soloItemsRef = useRef(null);

  const categories = ["Popular", "Event", "Anniversary", "specialgift"];
  const itemsPerPage = 8; // Number of items to display per page

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
        const response = await axios.get('/api/items');  // Fix the typo here
        setAllItems(response.data);
        console.log('solo response', JSON.stringify(response.data));
        console.log(response)
        handleClearCart()
      } catch (e) {
        console.log(e);
      }
    };
  
    getallItems();
  }, []);
  

  useEffect(() => {
    const selectedItems = allItems.filter(item => item.type.toLowerCase() === selectedCategory.toLowerCase());
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedItems = selectedItems.slice(startIndex, endIndex);

    setDisplayedItems(slicedItems);
    setTotalPages(Math.ceil(selectedItems.length / itemsPerPage));
  }, [allItems, selectedCategory, itemsPerPage, currentPage]);

  useEffect(() => {
    const newTotalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(newTotalAmount);
  }, [cartItems]);


  useEffect(() => {
    if (cartItems.length === 0) {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        dispatch(addToCart(JSON.parse(storedCartItems)));
        handleClearCart()
      }
    }
  }, []);
  

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product._id,  // Assuming the server provides an _id property
      type: product.type,
      name: product.for,  // Add other properties as needed
      price: product.price,
      image: product.image,  // Include the image URL in the cart item
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
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const totalPrice = getTotalPrice();
    navigate(`/user/checkout?amount=${totalPrice}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="cart-icon" onClick={handleToggleCart}>
        <ShoppingCart className='searchicon2' />
        <span className="cart-count">{cartItemCount >= 0 ? cartItemCount : 0}</span>
      </div>

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
                      <img className="items-images"  src={`https://magikworld01.com/uploads/${item.image}`} alt="" />
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
          <h1 className="solo" ref={soloItemsRef}>Trending Gift</h1>
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
          {displayedItems.map((item) => (
            <div key={item.id} className="items-cart-contianer">
              <div className="items-img">
                <img src={`https://magikworld01.com/uploads/${item.image}`} alt="" />
              </div>
              <div className="items-details">
                <span className="for">{item.for}</span>{" "}
                <span className="items-price">₦{item.price}</span>
              </div>
              <p>{item.type}</p>
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
