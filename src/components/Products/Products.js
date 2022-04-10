import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Knock Knock ! who is there</h2>
      <h5>Current user is: {user ? user.displayName : "Kew Nai ekhane"}</h5>
    </div>
  );
};

export default Products;
