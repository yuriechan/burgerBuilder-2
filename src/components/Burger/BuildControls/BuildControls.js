import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = props => {
  return (
    <div className={classes.buildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>{" "}
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            disabled={props.disabled[ctrl]}
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
          />
        );
      })}
      <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
