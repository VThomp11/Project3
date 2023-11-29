import React from "react";
import { Link } from "react-router-dom";
import { handleDelete } from "./DeletePost";
import { useLocation } from "react-router-dom";


export function  NewListing() {
  const location = useLocation();

  let category = location.state.category
  let productId = location.state.productId
  let item = location.state.item
  let price = location.state.price
  let desc = location.state.description
  
  console.log(location.state.item)
  return (
    <>
    {/* <img src={img} width="250px" alt="desc"/> */}
    <div>ITEM: {item}</div>
    <div>PRICE: ${price}</div>
    <div>DESCRIPTION: {desc}</div>
    <Link to={`http://localhost:3000/${category}/${productId}/edit`}>Edit</Link>
    <Link to={`http://localhost:3000/deleted`} onClick= {()=> {handleDelete(`http://localhost:8080/${category}/${productId}`) }} >Delete</Link>
  </>
  )



} 