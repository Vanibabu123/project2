import React from 'react'

function CartItems(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{props.items.title}</div>
                {props.items.price}
            </div>
            <button class="btn badge bg-danger rounded-pill" onClick={() => {
                props.handleRemoveCart(props.items)}}>X</button>
        </li>
    )
}

export default CartItems
