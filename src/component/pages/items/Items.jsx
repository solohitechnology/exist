import "./items.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from './CartSlice';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "@material-ui/icons";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const itemsPerPage = 8; // Number of items to display per page


const data = {
  Popular: [
    {
      id: 1,
      image: "/m1.jpg",
      price: "18,000",
      for: "for him",
      type: "package",
    },
    { id: 2, image: "/m2.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 3, image: "/m3.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 4, image: "/m20.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 5, image: "/m30.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 6, image: "/m40.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 7, image: "/m70.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 8, image: "/m60.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 9, image: "/m2.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 10, image: "/m3.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 11, image: "/m20.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 12, image: "/m30.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 13, image: "/m40.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 14, image: "/m70.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 15, image: "/m60.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 16, image: "/m2.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 17, image: "/m3.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 18, image: "/m20.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 19, image: "/m30.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 20, image: "/m40.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 21, image: "/m70.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 22, image: "/m60.jpg", price: "12,000", for: "for kids", type: "toy" }
    //     // Add more items here...
  ],
  Event: [
    { id: 23, image: "/m4.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 24, image: "/m5.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 25, image: "/m6.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 26, image: "/m7.jpg", price: "12,000", for: "for kids", type: "toy" },
    { id: 27, image: "/m8.jpg", price: "12,000", for: "for kids", type: "toy" },
    {
      id: 28,
      image: "/m9.jpg",
      price: "18,000",
      for: "for him",
      type: "package",
    },
    {
      id: 29,
      image: "/m10.jpg",
      price: "25,000",
      for: "for her",
      type: "gift",
    },
    {
      id: 30,
      image: "/m11.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },

    // Your Event data
  ],
  Anniversary: [
    { id: 17, image: "/js.jpg", price: "25,000", for: "for her", type: "gift" },
    {
      id: 18,
      image: "/m30.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 19,
      image: "/m40.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 20,
      image: "/m1.jpg",
      price: "18,000",
      for: "for him",
      type: "package",
    },
    { id: 20, image: "/m2.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 20, image: "/m3.jpg", price: "12,000", for: "for kids", type: "toy" },
    {
      id: 21,
      image: "/m70.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 22,
      image: "/m60.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    //     // Add more items here...
  ],
  SpecialGift: [
    {
      id: 23,
      image: "/m30.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 24,
      image: "/m40.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 25,
      image: "/m70.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 26,
      image: "/m60.jpg",
      price: "12,000",
      for: "for kids",
      type: "toy",
    },
    {
      id: 27,
      image: "/m1.jpg",
      price: "18,000",
      for: "for him",
      type: "package",
    },
    { id: 28, image: "/m2.jpg", price: "25,000", for: "for her", type: "gift" },
    { id: 29, image: "/m3.jpg", price: "12,000", for: "for kids", type: "toy" },
    {
      id: 30,
      image: "/m20.jpg",
      price: "25,000",
      for: "for her",
      type: "gift",
    },
  ],
};

const shopArrow = ">";

const Items = ( {hideElement} ) => {

    const soloItemsRef = useRef(null); 
    

    const categories = ["Popular", "Event", "Anniversary", "SpecialGift"];
    const [selectedCategory, setSelectedCategory] = useState("Popular");
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleClickCategory = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // Reset the current page when changing categories
    };
  
    const itemsData = data[selectedCategory];
    const totalItems = itemsData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    // Calculate the range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const displayedItems = itemsData.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };


    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items );
    const [isCartVisible, setCartVisible] = useState(false);
  
    useEffect(() => {
      if (cartItems.length === 0) {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
          dispatch(addToCart(JSON.parse(storedCartItems)));
        }
      }
    }, []);
  
    const handleAddToCart = (product) => {
      dispatch(addToCart({ product, quantity: 1 }));
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
    if (!cartItems || cartItems.length === 0) {
      return 0; // Return 0 if the cart is empty or cartItems is null/undefined
    }
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0) ;



  const handleToggleCart = () => {
    setCartVisible(!isCartVisible);
  };


  
    return (
      <>
        <div className="cart-icon" onClick={handleToggleCart}>
        <ShoppingCart className='searchicon2' />
        <span className="cart-count">{cartItemCount}</span>
      </div>

      <div>
      {isCartVisible && (
        <div className="cart-container1">
          <div className="cart-content1">
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <button onClick={() => handleRemoveFromCart(item)}>
                      Remove from Cart
                    </button>
                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                  </div>
                ))}
                <p>Total Price: ${getTotalPrice()}</p>
                <Link to="/checkout">
                  <button className="checkout-button">Checkout</button>
                </Link>
                <button onClick={handleClearCart}>Clear Cart</button>
              </>
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
        </div>
      )}
      </div>
      

        <div className="items-container">
            { hideElement ? null  : (
                <h1 className="solo" ref={soloItemsRef} >Trending Gift</h1>
            )}
          <div className="items-list">
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <span
                    href="#"
                    className={selectedCategory === category ? "active" : ""}
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
                  <img src={item.image} alt="" />
                </div>
  
                <div className="items-details">
                  <span className="for">{item.for}</span>{" "}
                  <span className="items-price">#{item.price}</span>
                </div>
                <p>{item.type}</p>
                <div className="add-to-cart">
                  <li>
                    <span  onClick={() => handleAddToCart(item)} >
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
                  <FaArrowCircleLeft className="left"/>
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <FaArrowCircleRight  className="right"/>
                </button>
              </div>
            )}
          </div>

          {hideElement ? null : (

          <div className="shop-now">
          <li>
            <a href="">
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