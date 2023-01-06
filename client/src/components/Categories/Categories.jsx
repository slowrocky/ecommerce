import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://static3.depositphotos.com/1003527/193/i/450/depositphotos_1936758-stock-photo-orange-background.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row"><img src="https://static3.depositphotos.com/1003527/193/i/450/depositphotos_1936758-stock-photo-orange-background.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
      </div>
      <div className="col">
        <div className="row"><img src="https://static3.depositphotos.com/1003527/193/i/450/depositphotos_1936758-stock-photo-orange-background.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row"><img src="https://static3.depositphotos.com/1003527/193/i/450/depositphotos_1936758-stock-photo-orange-background.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
          </div>
          <div className="col">
            <div className="row"><img src="https://static3.depositphotos.com/1003527/193/i/450/depositphotos_1936758-stock-photo-orange-background.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
          </div>
        </div>
        <div className="row"><img src="https://static3.depositphotos.com/1003527/193/i/450/depositphotos_1936758-stock-photo-orange-background.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
      </div>
    </div>
  );
};

export default Categories;
