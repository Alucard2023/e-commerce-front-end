import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, getProducts } from "../../Js/Actions/product";
import "./AddProduct.css";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };

  const handleADD = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newProduct.name);
    data.append("description", newProduct.description);
    data.append("prix", newProduct.prix);
    data.append("reference", newProduct.reference);
    
   

    data.append("imageURL", file);
    dispatch(addProduct(data));
    navigate("/products");
    console.log()
  };

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div>
      <h1>
        <p className="normed">AJOUTER VOTRE PRODUIT</p>
      </h1>
      <div className="cadre2">
        <div className="cadre33">
          <Form onSubmit={handleADD}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="forms">Image Produit</Form.Label>
              <Form.Control
                encType="multipart/form-data"
                type="file"
                onChange={handlePhoto}
              />
              <Form.Label className="forms">Nom produit</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom produit"
                name="name"
                onChange={handleChange}
              />
              <Form.Label className="forms">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
   <Form.Label className="forms">prix</Form.Label>
              <Form.Control
                type="text"
                placeholder="prix"
                name="prix"
                onChange={handleChange}
              />
              <Form.Label className="forms">Reference</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reference"
                name="reference"
                onChange={handleChange}
              />
            
               

              <Button
                className="bouton"
                variant="light"
                type="submit"
                onClick={handleADD}
              >
                <span className="boutontext">Ajouter nouveau produit</span>
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
