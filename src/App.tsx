import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { StoreDataProvider } from "./context/StoreDataContext";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <StoreDataProvider>
          {/* <Navbar /> */}
          {/* <ProductList /> */}

          {/* router code attempt starts here */}
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />{" "}
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>

          {/* router code attempt ends here */}

          <Footer />
        </StoreDataProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
