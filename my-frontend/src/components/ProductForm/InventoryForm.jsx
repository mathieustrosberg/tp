import React from "react";
import "../styles/ProductForm.css";

const InventoryForm = ({ formData, onChange }) => {
  return (
    <form className="container_form">
      <h1>Inventory</h1>
      <label className="container_label">
        SKU EAN or ISBN
        <input
          type="text"
          placeholder="Value"
          name="skuEanIsbn"
          value={formData.skuEanIsbn}
          onChange={onChange}
        />
      </label>

      <label className="obj_checkbox">
        Track stock for this product
        <input
          type="checkbox"
          name="trackInventory"
          checked={formData.trackInventory}
          onChange={onChange}
        />
      </label>

      <div className="obj_radio">
        Stock status
        <label>
          <input
            type="radio"
            name="stockStatus"
            value="in_stock"
            checked={formData.stockStatus === "in_stock"}
            onChange={onChange}
          />
          In stock
        </label>
        <label>
          <input
            type="radio"
            name="stockStatus"
            value="out_of_stock"
            checked={formData.stockStatus === "out_of_stock"}
            onChange={onChange}
          />
          Out of stock
        </label>
        <label>
          <input
            type="radio"
            name="stockStatus"
            value="on_backorder"
            checked={formData.stockStatus === "on_backorder"}
            onChange={onChange}
          />
          On backorder
        </label>
      </div>
    </form>
  );
};

export default InventoryForm;
