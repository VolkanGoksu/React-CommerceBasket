import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import {addBasket} from '../actions'
const Products = props => {
  console.log(props)
  
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map(book=>(<div className="book">
        <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>{book.author}</p>
          <p>Fiyat: &#8378; {book.price}</p>
          <button onClick={()=>props.addBasket(book)} >Sepete Ekle</button>
        </div>
      </div>))}
      
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    bookList : state.bookList,
    cart: state.cart
  }
}



export default connect(mapStateToProps,{addBasket})(Products);