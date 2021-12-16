import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header text-white bg-dark">
                <h3>Card Hedaer</h3>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  illum excepturi incidunt error, quas sint quam reprehenderit
                  modi dolorum recusandae, tenetur reiciendis repellat eligendi.
                  Totam vel temporibus similique molestias distinctio?
                </p>
              </div>
              <div className="card-footer bg-warning">
                <h5>Card-Footer</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-header text-white bg-dark">
                <img
                  src="https://images.pexels.com/photos/7893105/pexels-photo-7893105.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  illum excepturi incidunt error, quas sint quam reprehenderit
                  modi dolorum recusandae, tenetur reiciendis repellat eligendi.
                  Totam vel temporibus similique molestias distinctio?
                </p>
              </div>
              <div className="card-footer bg-warning">
                <h5>Card-Footer</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-header text-white bg-dark">
                <h3>Card Hedaer</h3>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  illum excepturi incidunt error, quas sint quam reprehenderit
                  modi dolorum recusandae, tenetur reiciendis repellat eligendi.
                  Totam vel temporibus similique molestias distinctio?
                </p>
              </div>
              <div className="card-footer bg-warning">
                <h5>Card-Footer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://images.pexels.com/photos/8979939/pexels-photo-8979939.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="col-8">
                  <h2>React Js</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deserunt sunt eos labore officiis veritatis ipsum tempore,
                    magnam, nam vel dolor libero consequatur velit tempora sequi
                    consectetur dolorem dolore at? Velit?
                  </p>
                  <button>Explore More!!!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
