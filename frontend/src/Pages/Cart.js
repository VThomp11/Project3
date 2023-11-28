import { useEffect } from "react";
import image from '../logo.svg';
import image2 from '../logo192.png';
function Cart() {

  // const [total, setTotal] = useState(null);
  useEffect(() => {
    // fetch()
    //Take what was added to the cart
    //take price from each object, add them and set to setTotal

  },[])
  // function addedItems(){
    
  // }

  return (
    <div>
        <h1>Carts Page</h1>
        <section>
            {/* Needs a map to take the images that were added to the cart and list them*/}
           {/* {itemsInCart.map((item, index) => {
              return (
                <section>
                  <Link to='/detail/:id'>
                    <img src={item.img} key={index} alt={item.item}/>
                  </Link>
                  <p>{item.price}</p>
                </section>
              )
            }
            )} */}
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
            <h4>TOTAL:{/*total*/}</h4> 
            
            <button>{/*onSubmit={alert('Purchases Made')}*/} Proceed to Checkout</button>
        </section>
    </div>
    
  );
}
export default Cart;