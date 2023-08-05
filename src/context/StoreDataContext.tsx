import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface StoreDataModel {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface StoreDataProviderProps {
  children: ReactNode;
}
interface StoreDataContext {
  storeData: StoreDataModel[];
}

const StoreDataContext = createContext({} as StoreDataContext);

export function useStoreData() {
  return useContext(StoreDataContext);
}

export function StoreDataProvider({ children }: StoreDataProviderProps) {
  const [storeData, setstoreData] = useState([]);

  const getFakestoreData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    // console.log(response);
    setstoreData(json);
  };
  useEffect(() => {
    getFakestoreData();
  }, []);

  return (
    <StoreDataContext.Provider value={{ storeData }}>
      {children}
    </StoreDataContext.Provider>
  );
}
