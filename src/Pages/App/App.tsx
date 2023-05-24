import "./App.css";
import { MyOrder } from "../MyOrder";
import { Home } from "../Home";
import { MyOrders } from "../MyOrders";
import { MyAccount } from "../MyAccount";
import { NotFound } from "../NotFound";
import { SingIn } from "../Signin";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Routes } from "../../models/Routes";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/layout";

let routes: Routes[] = [
  { path: "/", element: <Home /> },
  { path: "/my-order", element: <MyOrder /> },
  { path: "/my-orders", element: <MyOrders /> },
  { path: "/my-account", element: <MyAccount /> },
  { path: "/sign-in", element: <SingIn /> },
  { path: "*", element: <NotFound /> },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
