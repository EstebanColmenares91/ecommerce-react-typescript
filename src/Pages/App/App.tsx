import "./App.css";
import { Home } from "../Home";
import { MyOrders } from "../MyOrders";
import { MyAccount } from "../MyAccount";
import { NotFound } from "../NotFound";
import { SingIn } from "../Signin";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Routes } from "../../models/route";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/layout";
import { ProductsProvider } from "../../context/productsContext";
import { SingUp } from "../Singup";


const routes: Routes[] = [
  { path: "/", element: <Home /> },
  { path: "/category/:category", element: <Home />},
  { path: "/my-orders", element: <MyOrders /> },
  { path: "/my-account", element: <MyAccount /> },
  { path: "/sign-in", element: <SingIn /> },
  { path: "/sign-up", element: <SingUp /> },
  { path: "*", element: <NotFound /> },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;