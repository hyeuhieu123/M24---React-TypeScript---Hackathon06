import React from "react";
export default function Hackathon() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                  <div>
                    <div className="media product">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="images/pizza.jpg"
                            alt="pizza"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Pizza</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. At dicta asperiores veniam repellat unde debitis
                          quisquam magnam magni ut deleniti!
                        </p>
                        <span className="price"> 30 USD</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="media product">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="./images/Hamburger.jpg"
                            alt="hamburger"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Hamburger</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. At dicta asperiores veniam repellat unde debitis
                          quisquam magnam magni ut deleniti!
                        </p>
                        <input
                          name="quantity-product-1"
                          type="number"
                          defaultValue={4}
                        />
                        <a data-product={1} className="price">
                          15 USD{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="media product">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="images/bread.jpg"
                            alt="bread"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Bread</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. At dicta asperiores veniam repellat unde debitis
                          quisquam magnam magni ut deleniti!
                        </p>
                        <input
                          name="quantity-product-1"
                          type="number"
                          defaultValue={1}
                        />
                        <a data-product={1} className="price">
                          20 USD{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="media product">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="./images/Cake.jpg"
                            alt="cake"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Cake</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. At dicta asperiores veniam repellat unde debitis
                          quisquam magnam magni ut deleniti!
                        </p>
                        <input
                          name="quantity-product-1"
                          type="number"
                          defaultValue={1}
                        />
                        <a data-product={1} className="price">
                          10 USD{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: "4%" }}>STT</th>
                        <th>Name</th>
                        <th style={{ width: "15%" }}>Price</th>
                        <th style={{ width: "4%" }}>Quantity</th>
                        <th style={{ width: "25%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody id="my-cart-body">
                      <tr>
                        <th scope="row">1</th>
                        <td>Cake</td>
                        <td>10 USD</td>
                        <td>
                          <input
                            name="cart-item-quantity-1"
                            type="number"
                            defaultValue={15}
                          />
                        </td>
                        <td>
                          <a
                            className="label label-info update-cart-item"
                            data-product=""
                          >
                            Update
                          </a>
                          <a
                            className="label label-danger delete-cart-item"
                            data-product=""
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Hamburger</td>
                        <td>15 USD</td>
                        <td>
                          <input
                            name="cart-item-quantity-1"
                            type="number"
                            defaultValue={32}
                          />
                        </td>
                        <td>
                          <a
                            className="label label-info update-cart-item"
                            data-product=""
                          >
                            Update
                          </a>
                          <a
                            className="label label-danger delete-cart-item"
                            data-product=""
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot id="my-cart-footer">
                      <tr>
                        <td colSpan={4}>
                          There are <b>2</b> items in your shopping cart.
                        </td>
                        <td colSpan={2} className="total-price text-left">
                          630 USD
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div
                className="alert alert-success"
                role="alert"
                id="mnotification"
              >
                Add to cart successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
