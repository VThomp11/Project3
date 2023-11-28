import { Link } from "react-router-dom";
import React from "react";
export function Deleted() {
  return (
    <div>
        <h1>Post Deleted</h1>
        <Link to={`http://localhost:3000/`}>Return</Link>
    </div>
    
  );
}
