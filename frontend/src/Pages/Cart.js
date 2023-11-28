
function Cart() {
  return (
    <div>
        <h1>Carts Page</h1>
        <section>
            {/* Needs a map to take the images that were added to the cart and list them*/}
        </section>
        <section>
            {/* Displays the available pickup locations and the total price for all items in the cart */}
            <button onClick={alert('Purchases Made')}>Proceed to Checkout</button>
        </section>
    </div>
    
  );
}
export default Cart;