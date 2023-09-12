import "./App.scss";
import { NavBar } from "./components/navbar";
import { ItemListContainer } from "./components/itemlistcontainer";
import { ItemDetailContainer } from "./components/itemdetailcontainer";
import { Footer } from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const titulo = "Galeria de Productos";
const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae aliquid veniam? Fugit excepturi voluptatum at possimus consequatur suscipit, quam dolore dignissimos, facilis asperiores nisi adipisci explicabo porro ab pariatur!";

export function App() {
  return (
    <div className="container-flex">
      <BrowserRouter basename="/tiend.ar/">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
