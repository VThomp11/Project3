import { useEffect, useState } from "react";
import image2 from '../logo192.png';
import { Link } from "react-router-dom";
//When the add to cart button is clicked in items details page, the itemsInCart state will store the value
// import { endpoint } from 'itemDetailsPage'
function Cart() {
  let itemPrices;
  // const [itemsInCart,setItemsInCart] = useState(null)
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(null);
  let itemsInCart = true;
  let endpoint = 'organs/1';
  useEffect(() => {
    if(itemsInCart){
      fetch(`http://localhost:8080/${endpoint}`)
        .then(res => res.json())
        .then(data => {
          setTotal(data[0].price)
          setItems(data)
          console.log('Price', data[0].price)
      })
    } 
    //Take what was added to the cart
    //take price from each object, add them and set to setTotal

  },[setItems])
  // function addedItems(){
    // setTotal(itemPrices)
  // }

  return (
    <div>
        <h1>Carts Page</h1>
        <section>
            {/* Needs a map to take the images that were added to the cart and list them*/}
          {itemsInCart === true ? (
            items.map((item, index) => {
              return (
                <section>
                  <Link to='/detail/:id'>
                    <img src={item.img} key={index} alt={item.item}/>
                  </Link>
                  <p>{item.price}</p>
                </section>
              )
            }))
          :
          
            <h2>No items In Cart</h2>
            
          }
          
        
        
        </section>
        <section>
            {/* Displays the available pickup locations and the total price for all items in the cart */}
            <label>Available Locations</label>
            <select>
              <option>This Location</option>
              <option>That Location</option>
              <option>The Other Location</option>
            </select>
            <p>We accept the following services for purchases</p>
            <img src={image2} alt='logo'/>
            <img src={image2} alt='logo'/>
            <img src={image2} alt='logo'/>
            <img src={image2} alt='logo'/>
            <h4>TOTAL:{total}</h4> 
            
            <button>{/*onSubmit={alert('Purchases Made')}*/} Proceed to Checkout</button>
        </section>
    </div>
    
  );
}
export default Cart;