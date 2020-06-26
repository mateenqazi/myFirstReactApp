import React from "react";
import classes from "./Order.css";
const Order = (props) => {
  const Ingredients = [];
  for (let i in props.ingredients) {
    Ingredients.push({
      name: i,
      amount: props.ingredients[i],
    });
  }

  const ingredientsOutput = Ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #eee",
          padding: "5px",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients are: {ingredientsOutput}</p>

      <p>
        {" "}
        Price : <strong>US {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
