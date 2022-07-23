import React from 'react'

function Card (props) {
    return (
        <div className="col-lg-3 mb-5">
        <div className="card" style={{width: '12rem'}}>
        
                <img className="card-img-top imgsalebatch" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {props.product.sale? <h6 className="salebatch">sale</h6> : ""}  
                <div className="card-body">
                  <h5 className="Card-title text-center">{props.product.title}</h5>
                  <p className='Card-text text-center'>
                    {props.product.price}
                  </p>
                </div>
                <div className="text-center">
                <button disabled={props.cartItems.some((obj) => obj.id === props.product.id)} onClick={() => props.handleCart(props.product)} className="btn btn-primary mb-4">{props.product.actions}
                </button>
                </div>
            </div>
            </div>
    )
}

export default Card