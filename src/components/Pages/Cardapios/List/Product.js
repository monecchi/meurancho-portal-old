import React, { useState, useEffect } from "react";
import ProductsDataService from '../../../../services/apiService';

const Product = props => {
  const initialProductState = {
    id: null,
    title: "",
    description: "",
    active: false
  };
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const getProduct = id => {
    ProductsDataService.get(id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProduct(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentProduct.id,
      title: currentProduct.title,
      description: currentProduct.description,
      active: status
    };

    ProductsDataService.update(currentProduct.id, data)
      .then(response => {
        setCurrentProduct({ ...currentProduct, active: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateProduct = () => {
    ProductsDataService.update(currentProduct.id, currentProduct)
      .then(response => {
        console.log(response.data);
        setMessage("The product was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    ProductsDataService.remove(currentProduct.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/cardapios");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentProduct.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProduct.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentProduct.active ? "Published" : "Pending"}
            </div>
          </form>

          {currentProduct.active ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteProduct}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProduct}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Product...</p>
        </div>
      )}
    </div>
  );
};

export default Product;