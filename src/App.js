import { Route, Routes } from "react-router-dom";
import SplashScreen from "./Pages/SplashScreen";
import Categories from "./Pages/Categories";
import Vegetables from "./Pages/Vegetables";
import CheckoutScrollView from "./Pages/CheckoutScrollView";
import Payment from "./Pages/Payment";
import Layout from "./components/ui/Layout";
import Items from "./Pages/Items";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cart" element={<Payment />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/vegetable" element={<Vegetables />} />
        <Route path="/checkout" element={<CheckoutScrollView />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Layout>
  );
}

export default App;
