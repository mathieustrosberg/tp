import React, { useState } from "react";
import axios from "axios";

import GeneralDataForm from "./GeneralDataForm";
import InventoryForm from "./InventoryForm";
import ShippingForm from "./ShippingForm";
import LinkedProductForm from "./LinkedProductForm";
import "../styles/ProductForm.css";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    downloadable: false,
    virtual: false,
    productName: "",
    productDescription: "",
    productSize: "",
    purchaseLimit: false,
    maxItems: "",
    regularPrice: "",
    salePrice: "",
    taxStatus: "",

    skuEanIsbn: "",
    trackInventory: false,
    stockStatus: "in_stock",

    shippingWeight: "",
    shippingTrackInventory: false,
    shippingStockStatus: "in_stock",
    regularLength: "",
    regularWidth: "",
    regularHeight: "",
    shippingClass: "",

    linkedProduct1: "",
    linkedProduct2: "",
    linkedProduct3: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoi des données au backend
      const response = await axios.post(
        "http://localhost:5001/api/products",
        formData
      );
      if (response.status === 200) {
        console.log("Produit enregistré en base de données !");
        console.log("Réponse du serveur :", response.data);
        alert(response.data.message);
      } else {
        console.error("Erreur lors de l'enregistrement du produit.");
      }
    } catch (error) {
      console.error("Erreur de connexion à l'API:", error);
    }
  };

  return (
    <div className="layout">
      <form className="container_form" onSubmit={handleSubmit}>
        <GeneralDataForm formData={formData} onChange={handleChange} />
      </form>
      <InventoryForm formData={formData} onChange={handleChange} />
      <ShippingForm formData={formData} onChange={handleChange} />
      <LinkedProductForm formData={formData} onChange={handleChange} />
      <div className="btn_style">
        <button type="submit" className="my-button" onClick={handleSubmit}>
          Add the product
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
