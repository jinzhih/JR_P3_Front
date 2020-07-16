import React from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import task_yes_no from "../../assets/images/task_yes_no.png";
import task_add from "../../assets/images/task_add.png";
import task_top from "../../assets/images/task_top.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./scss/task.scss";
function Task() {
  return (
    <div>
      <Card style={{ width: "450px", margin: "20px 50px" }}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ height: "49px" }}>
            <div className="cardd">
              <p
                style={{
                  fontWeight: "bold",
                  position: "absolute",
                  left: "30px",
                }}
              >
                My Task >
              </p>
              <img
                style={{
                  width: "47px",
                  position: "absolute",
                  right: "18px",
                }}
                src={task_top}
              />
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "49px" }}>
            <img
              style={{
                width: "20px",
                position: "absolute",
                left: "30px",
              }}
              src={task_yes_no}
            />
            <p
              style={{
                position: "absolute",
                right: "170px",
                fontWeight: "bold",
              }}
            >
              task 1: xxxxxxxxx xxxxxxx
            </p>
            <p
              style={{
                position: "absolute",
                right: "60px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              In processing
            </p>
            <img
              style={{
                width: "20px",
                position: "absolute",
                right: "30px",
              }}
              src={task_add}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "49px" }}>
            <img
              style={{
                width: "20px",
                position: "absolute",
                left: "30px",
              }}
              src={task_yes_no}
            />
            <p
              style={{
                position: "absolute",
                right: "170px",
                fontWeight: "bold",
              }}
            >
              task 2: xxxxxxxxx xxxxxxx
            </p>
            <p
              style={{
                position: "absolute",
                right: "60px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              In processing
            </p>
            <img
              style={{
                width: "20px",
                position: "absolute",
                right: "30px",
              }}
              src={task_add}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "49px" }}>
            <img
              style={{
                width: "20px",
                position: "absolute",
                left: "30px",
              }}
              src={task_yes_no}
            />
            <p
              style={{
                position: "absolute",
                right: "170px",
                fontWeight: "bold",
              }}
            >
              task 3: xxxxxxxxx xxxxxxx
            </p>
            <p
              style={{
                position: "absolute",
                right: "60px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              In processing
            </p>
            <img
              style={{
                width: "20px",
                position: "absolute",
                right: "30px",
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

export default Task;
