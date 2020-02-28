import React from 'react'

export default function AddToCart(){

    return(
        <button style={{width:'30%'}} onClick={(e)=> e.stopPropagation()}> Add to Cart</button>
    )
}