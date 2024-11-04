import React, { Component } from "react";
import Order from "../../containers/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  handleCompleteOrder = (orderId) => {
    axios
      .delete(`/orders/${orderId}.json`)
      .then((response) => {
        this.setState((prevState) => ({
          orders: prevState.orders.filter((order) => order.id !== orderId),
        }));
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            customer={order.customer}
            ingredients={order.ingredients}
            price={+order.price}
            onComplete={() => this.handleCompleteOrder(order.id)}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
