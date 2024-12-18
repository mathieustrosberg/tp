import React from "react";
import "../styles/ProductForm.css";

const LinkedProductForm = ({ formData, onChange }) => {
  return (
    <form className="container_link">
      <h1 className="title_link">Linked product</h1>

      <div className="container_product">
        <label className="container_label">
          <select
            name="linkedProduct1"
            value={formData.linkedProduct1}
            onChange={onChange}
          >
            <option value="" disabled>
              Choose status
            </option>
            <option value="taxable">Taxable</option>
            <option value="non-taxable">Non-taxable</option>
            <option value="zero-rate">Zero-rate</option>
          </select>
        </label>

        <label className="container_label">
          <select
            name="linkedProduct2"
            value={formData.linkedProduct2}
            onChange={onChange}
          >
            <option value="" disabled>
              Choose status
            </option>
            <option value="taxable">Taxable</option>
            <option value="non-taxable">Non-taxable</option>
            <option value="zero-rate">Zero-rate</option>
          </select>
        </label>

        <label className="container_label">
          <select
            name="linkedProduct3"
            value={formData.linkedProduct3}
            onChange={onChange}
          >
            <option value="" disabled>
              Choose status
            </option>
            <option value="taxable">Taxable</option>
            <option value="non-taxable">Non-taxable</option>
            <option value="zero-rate">Zero-rate</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default LinkedProductForm;
