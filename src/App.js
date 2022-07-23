import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import CartItems from './CartItems';
import { useState } from 'react';

function App() {
  const [products,setProducts] = useState([
    {
      id : 1,
      title: "Fancy Product",
      price: 1000,
      actions: "View options"
    },
    {
      id : 2,
      sale: true,
      title: "Special Item",
      price: 120,
      actions: "Add to cart"
    },
    {
      id : 3,
      sale: true,
      title: "Sale Item",
      price: 150,
      actions: "Add to cart"
    },
    {

      id : 4,
      title: "Popular Item",
      price: 300,
      actions: "Add to cart"
    },
    {
      id : 5,
      sale: true,
      title: "Sale Item",
      price: 500,
      actions: "Add to cart"
    },
    {

      id : 6,
      title: "Fancy Product",
      price: 800,
      actions: "View options"
    },
    {
      id : 7,
      sale: true,
      title: "Special Item",
      price: 900,
      actions: "Add to cart"
    },
    {

      id : 8,
      title: "Popular Item",
      price: 2000,
      actions: "Add to cart"
    }
  ])
    
  const [cartItems,setCartItems] = useState([])
  const [total,setTotal] = useState(0)
  
  let handleCart = (items) => {
    setCartItems([...cartItems, items]);
    setTotal(total + items.price);
  }
  let handleRemoveCart = (items) => {
    let itemsIndex = cartItems.findIndex((obj) => items.id === obj.id);
    cartItems.splice(itemsIndex, 1);
    setCartItems([...cartItems])
    setTotal(total - items.price)

  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/000000/external-shopping-cart-ecommerce-tanah-basah-glyph-tanah-basah-2.png" />
                <a target="_blank" href="https://icons8.com/icon/Ad1qHTBpLZyL/shopping-cart"></a>{" "}Cart{" "}<span className="badge bg-dark rounded-pill ms-2">0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>


      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <div className="row">
              {
                products.map((product) => {
                  return <Card product={product} handleCart={handleCart} cartItems={cartItems} />;
                })
              }
            </div>
          </div>
          <div className="col-lg-2 mt-4">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <ol class="list-group list-group-numbered">
                  {cartItems.map((items) => {
                    return (
                    <CartItems items={items} handleRemoveCart={handleRemoveCart}/>
                    )
                  })}
                    
                </ol>
              </div>
            </div>
            {
              cartItems.length > 0 ? <div className="row">
              <div className="col-lg-12 text-center">
                <h1>Total : {total}</h1>
              </div>
            </div> : <div className="col-lg-12 text-center">
                <h1>No items in cart</h1>
            </div>
            }
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
