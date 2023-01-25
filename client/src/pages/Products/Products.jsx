import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [priceFilter, setPriceFilter] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const rangeSelector = (e, newValue) => {
    setPriceRange(newValue);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setPriceFilter(priceRange[1]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <Typography id="range-slider" gutterBottom>
              Select Price Range:
            </Typography>

            <Slider
              value={priceRange}
              onChange={rangeSelector}
              min={0}
              max={1000}
              step={10}
              valueLabelDisplay="auto"
            />
            <div className="applyPriceBtn" onClick={handleClick}>
              Apply
            </div>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={priceFilter}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
