import React from "react";
import "../styles/ProductForm.css";

const GeneralDataForm = ({ formData, onChange }) => {
  return (
    <>
      <h1>Product data</h1>
      <div className="container_checkbox">
        <label className="obj_checkbox">
          Downloadable
          <input
            type="checkbox"
            name="downloadable"
            checked={formData.downloadable}
            onChange={onChange}
          />
        </label>

        <label className="obj_checkbox">
          Virtual
          <input
            type="checkbox"
            name="virtual"
            checked={formData.virtual}
            onChange={onChange}
          />
        </label>
      </div>

      <label className="container_label">
        Product name
        <input
          type="text"
          placeholder="Name"
          name="productName"
          value={formData.productName}
          onChange={onChange}
        />
      </label>

      <label className="container_label">
        Product description
        <textarea
          placeholder="Type the detailed product description"
          name="productDescription"
          value={formData.productDescription}
          onChange={onChange}
        ></textarea>
      </label>

      <label className="container_label">
        Product size
        <select
          name="productSize"
          value={formData.productSize}
          onChange={onChange}
        >
          <option value="" disabled>
            Choose all applicable sizes
          </option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </label>

      <label className="obj_checkbox">
        Purchase limit
        <input
          type="checkbox"
          name="purchaseLimit"
          checked={formData.purchaseLimit}
          onChange={onChange}
        />
      </label>

      <label
        className={`container_label ${
          !formData.purchaseLimit ? "disable_label" : ""
        }`}
      >
        Max. number of items per order:
        <input
          type="number"
          placeholder="Value"
          name="maxItems"
          value={formData.maxItems}
          onChange={onChange}
          disabled={!formData.purchaseLimit}
        />
      </label>

      <div className="container_price">
        <label className="container_label">
          Regular price (€)
          <input
            type="number"
            placeholder="Value"
            name="regularPrice"
            value={formData.regularPrice}
            onChange={onChange}
          />
        </label>

        <label className="container_label">
          Sale price (€)
          <input
            type="number"
            placeholder="Value"
            name="salePrice"
            value={formData.salePrice}
            onChange={onChange}
          />
        </label>
      </div>

      <label className="container_label">
        Tax status
        <select name="taxStatus" value={formData.taxStatus} onChange={onChange}>
          <option value="" disabled>
            Choose status
          </option>
          <option value="taxable">Taxable</option>
          <option value="non-taxable">Non-taxable</option>
          <option value="zero-rate">Zero-rate</option>
        </select>
      </label>
    </>
  );
};

export default GeneralDataForm;
