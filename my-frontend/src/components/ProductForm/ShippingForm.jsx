import React from "react";
import "../styles/ProductForm.css";

const ShippingForm = ({ formData, onChange }) => {
  return (
    <form className="container_form">
      <h1>Shipping</h1>
      <label className="container_label obj_label">
        Weight (in g)
        <input
          type="text"
          placeholder="ex: 1250g"
          name="shippingWeight"
          value={formData.shippingWeight}
          onChange={onChange}
        />
      </label>

      <label className="obj_checkbox">
        Track stock for this product
        <input
          type="checkbox"
          name="shippingTrackInventory"
          checked={formData.shippingTrackInventory}
          onChange={onChange}
        />
      </label>

      <div className="obj_radio">
        Stock status
        <label>
          <input
            type="radio"
            name="shippingStockStatus"
            value="in_stock"
            checked={formData.shippingStockStatus === "in_stock"}
            onChange={onChange}
          />
          In stock
        </label>
        <label>
          <input
            type="radio"
            name="shippingStockStatus"
            value="out_of_stock"
            checked={formData.shippingStockStatus === "out_of_stock"}
            onChange={onChange}
          />
          Out of stock
        </label>
        <label>
          <input
            type="radio"
            name="shippingStockStatus"
            value="on_backorder"
            checked={formData.shippingStockStatus === "on_backorder"}
            onChange={onChange}
          />
          On backorder
        </label>
      </div>

      <div className="container_label">
        Dimensions (in cm)
        <div className="container_price">
          <label className="container_label">
            <input
              type="number"
              placeholder="Lenght"
              name="regularLength"
              value={formData.regularLength}
              onChange={onChange}
            />
          </label>

          <label className="container_label">
            <input
              type="number"
              placeholder="Width"
              name="regularWidth"
              value={formData.regularWidth}
              onChange={onChange}
            />
          </label>

          <label className="container_label">
            <input
              type="number"
              placeholder="Value"
              name="regularHeight"
              value={formData.regularHeight}
              onChange={onChange}
            />
          </label>
        </div>
      </div>

      <label className="container_label">
        Shipping class
        <select
          className="obj_select"
          name="shippingClass"
          value={formData.shippingClass}
          onChange={onChange}
        >
          <option value="" disabled>
            Value
          </option>
          <option value="Standard Shipping">Standard Shipping</option>
          <option value="Express Shipping">Express Shipping</option>
          <option value="Free Shipping">Free Shipping</option>
          <option value="Local Pickup">Local Pickup</option>
        </select>
      </label>
    </form>
  );
};

export default ShippingForm;
