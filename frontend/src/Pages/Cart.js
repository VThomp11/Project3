import { useEffect, useState, useContext } from "react";
import image2 from '../logo192.png';
import { Link } from "react-router-dom";
import { itemContext } from "../App";
//When the add to cart button is clicked in items details page, the itemsInCart state will store the value
// import { endpoint } from 'itemDetailsPage'

function Cart() {

  // const [itemsInCart,setItemsInCart] = useState(null)
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(null);
 var itemsInCart;
  // let endpoint = 'organs/1';
  const { category, productId} = useContext(itemContext);
  let endpoint = `${category}/${productId}`
  console.log('-----', endpoint);

  if(items){
    itemsInCart = true
  } else{
    itemsInCart = false
  }

  useEffect(() => {
    if(endpoint){
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

  },[])

  console.log('items', items)
  // function addedItems(){
    // setTotal(itemPrices)
  // }
  function handleRemove(id){
    
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);

  }

  return (
    <div>
        <h1>Carts Page</h1>
        <section>
            {/* Needs a map to take the images that were added to the cart and list them*/}
            <ul>
            {itemsInCart === true ? (
              
                items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to='/detail/:id'>
                        <img src={item.img} alt={item.item}/>
                      </Link>
                      <button type="button" onClick={() => handleRemove(item.id)}>X</button>
                      <p>Price:{item.price}</p>
                    </li>
                  )
              }
            ))
          
          :
          
            <h2>No items In Cart</h2>
            
          }
          
          </ul>
        
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
            <h4>CART TOTAL:{total}</h4> 
            
            <button type="button" onClick={() => alert('Purchases Made')}> Proceed to Checkout</button>
        </section>
    </div>
    
  );
}
export default Cart;