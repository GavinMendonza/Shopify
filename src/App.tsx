import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { StoreDataProvider } from "./context/StoreDataContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <StoreDataProvider>
          <Navbar />
          <ProductList />
          <Footer />
        </StoreDataProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
