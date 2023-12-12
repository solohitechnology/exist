import React, { useRef, useState } from 'react';
import './catlog.css';
import Items from '../items/Items';
import { SearchOutlined } from '@material-ui/icons';
import { Helmet } from 'react-helmet';




const Catlog = () => {

    const [hideElement, setHideElement] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };



    return (
        <>
            <Helmet>
                <title>For Her, For Him, Flowers, Christmas Hampas, Food Tray, Valentine’s Day gift, Anniversary , Event Decorations </title>
            </Helmet>


            <div className="catalog-container">
                <div className='catalog-text' >
                    <h1> Continue Shopping </h1>
                    <p>check out our countless gift catalogue for your personalized gift</p>
                </div>
                <div className="catalog-image">
                    <img src="/catalog.jpg" alt="" />
                </div>
            </div>

            <Items hideElement={hideElement} />


            <div className="person-gift">

                <h1>Personalized your Gift</h1>
                <p>Custom-crafted treasures for special moments</p>


                <div className="button-div">
                    <li>
                        <a href="#">Click to start</a>
                    </li>
                </div>

            </div>

            <div className="payment-method">
                <p>Method of Payment</p>
                <div className='payment-images'>
                    <img src="/stripe.png" alt="" />
                    <img src="/mastercard.jpg" alt="" />
                    <img src="/visa1.jpg" alt="" />
                    <img src="/fcmb.png" alt="" />
                    <img src="/zenith.png" alt="" />
                    <img src="/first.png" alt="" />
                    <img src="/GT.png" alt="" />
                    <img src="/access.jpeg" alt="" />
                    <img src="/uba.jpeg" alt="" />
                    <img src="/fdy.png" alt="" />


                </div>
            </div>
        </>
    )
}


export default Catlog;