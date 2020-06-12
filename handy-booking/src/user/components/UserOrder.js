import React from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import order_img from "../../assets/images/order_img.png";
import task_add from "../../assets/images/task_add.png";
import task_top from "../../assets/images/task_top.png";
function Order() {
  return (
    <div>
      <Card style={{ width: "450px", margin: "20px 50px" }}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ height: "49px" }}>
            <p
              style={{ fontWeight: "bold", position: "absolute", left: "30px" }}
            >
              My Order >
            </p>
            <img
              style={{
                width: "47px",
                position: "absolute",
                right: "18px",
              }}
              src={task_top}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "59px" }}>
            <img
              style={{
                width: "30px",
                position: "absolute",
                left: "30px",
              }}
              src={order_img}
            />
            <div style={{ position: "absolute", left: "90px" }}>
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    position: "absolute",
                    fontWeight: "bold",
                  }}
                >
                  Min
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    position: "absolute",
                    top: "20px",
                  }}
                >
                  Company·Brisbane
                </p>
              </div>
            </div>

            <p
              style={{
                position: "absolute",
                right: "60px",
                top: "20px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Accept order
            </p>
            <img
              style={{
                width: "20px",
                position: "absolute",
                right: "30px",
                top: "20px",
              }}
              src={task_add}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "59px" }}>
            <img
              style={{
                width: "30px",
                position: "absolute",
                left: "30px",
              }}
              src={order_img}
            />
            <div style={{ position: "absolute", left: "90px" }}>
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    position: "absolute",
                    fontWeight: "bold",
                  }}
                >
                  Min
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    position: "absolute",
                    top: "20px",
                  }}
                >
                  Company·Brisbane
                </p>
              </div>
            </div>

            <p
              style={{
                position: "absolute",
                right: "60px",
                top: "20px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Accept order
            </p>
            <img
              style={{
                width: "20px",
                position: "absolute",
                right: "30px",
                top: "20px",
              }}
              src={task_add}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "59px" }}>
            <img
              style={{
                width: "30px",
                position: "absolute",
                left: "30px",
              }}
              src={order_img}
            />
            <div style={{ position: "absolute", left: "90px" }}>
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    position: "absolute",
                    fontWeight: "bold",
                  }}
                >
                  Min
                </p>
                <p
                  style={{
                    fontSize: "5px",
                    position: "absolute",
                    top: "20px",
                  }}
                >
                  Company·Brisbane
                </p>
              </div>
            </div>

            <p
              style={{
                position: "absolute",
                right: "60px",
                top: "20px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Accept order
            </p>
            <img
              style={{
                width: "20px",
                position: "absolute",
                right: "30px",
                top: "20px",
              }}
              src={task_add}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ textAlign: "center" }}>
            Show More · 4
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Order;
