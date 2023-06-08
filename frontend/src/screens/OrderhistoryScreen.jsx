// import React, { useContext, useEffect, useReducer } from "react";
// import { Helmet } from "react-helmet-async";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { Store } from "../Store";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, orders: action.payload, loading: false };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state; // Return the current state for unknown actions
//   }
// };

// const OrderhistoryScreen = () => {
//   const { state } = useContext(Store);
//   const { userInfo } = state;
//   const navigate = useNavigate();
//   const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
//     loading: true,
//     error: "",
//     orders: [], // Update the initial value to an empty array
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: "FETCH_REQUEST" });
//       try {
//         const { data } = await axios.get(`/api/orders/mine`, {
//           headers: { Authorization: `Bearer ${userInfo.token}` },
//         });

//         if (data && data.orders) {
//           dispatch({ type: "FETCH_SUCCESS", payload: data.orders });
//         } else {
//           dispatch({
//             type: "FETCH_FAIL",
//             payload: "Invalid data format",
//           });
//         }
//       } catch (error) {
//         dispatch({
//           type: "FETCH_FAIL",
//           payload: error.message || "Error fetching orders",
//         });
//       }
//     };
//     fetchData();
//   }, [userInfo]);

//   return (
//     <div>
//       <Helmet>
//         <title>Order History</title>
//       </Helmet>
//       <h1>Order History</h1>
//       {loading ? (
//         <LoadingBox></LoadingBox>
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>DATE</th>
//               <th>TOTAL</th>
//               <th>PAID</th>
//               <th>DELIVERED</th>
//               <th>ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>{order.createdAt.substring(0, 10)}</td>
//                 <td>{order.totalPrice.toFixed(2)}</td>
//                 <td>{"Yes"}</td>
//                 <td>{"Yes"}</td>
//                 <td>
//                   <Button>Delete</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       ;
//     </div>
//   );
// };

// export default OrderhistoryScreen;
const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, orders: action.payload, loading: false };
      case "FETCH_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state; // Return the current state for unknown actions
    }
  };
  
  const OrderhistoryScreen = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate();
    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
      loading: true,
      error: "",
      orders: [],
    });
  
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: "FETCH_REQUEST" });
        try {
          const { data } = await axios.get(`/api/orders/mine`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          });
  
          if (data && data.orders) {
            dispatch({ type: "FETCH_SUCCESS", payload: data.orders });
          } else {
            dispatch({
              type: "FETCH_FAIL",
              payload: "Invalid data format",
            });
          }
        } catch (error) {
          dispatch({
            type: "FETCH_FAIL",
            payload: error.message || "Error fetching orders",
          });
        }
      };
  
      fetchData();
    }, [userInfo]);
  
    return (
      <div>
        <Helmet>
          <title>Order History</title>
        </Helmet>
        <h1>Order History</h1>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>{"Yes"}</td>
                  <td>{"Yes"}</td>
                  <td>
                    <Button>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  export default OrderhistoryScreen;
