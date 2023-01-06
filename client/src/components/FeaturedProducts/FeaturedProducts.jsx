import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          hendrerit nunc id pulvinar porttitor. Nullam massa nisi, faucibus quis
          nulla id, blandit eleifend risus. In hac habitasse platea dictumst.
          Nullam et tellus varius, tempus nibh ac, rhoncus sapien. Maecenas
          vitae dapibus lectus. Morbi auctor vulputate risus eget consectetur.
          Cras et sapien a nisi tempus euismod. Vivamus nisl massa, mollis nec
          enim ac, consectetur pharetra metus. Cras dolor elit, lacinia et velit
          quis, rutrum facilisis libero.
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong!" : (loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
