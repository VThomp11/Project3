import React, { useState, useEffect } from "react";


export const handleDelete = (url) => {
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE"
  })
  const resData = "Post deleted"
  console.log(resData)
   return (
    <>
    <h2>Post Deleted</h2>
    </>
   );
};

