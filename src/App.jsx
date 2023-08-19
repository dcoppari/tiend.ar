import { NavBar } from "./components/navbar";
import { ItemListContainer } from "./components/itemlistcontainer";
import { Footer } from "./components/footer";

const titulo = "Galeria de Productos";
const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae aliquid veniam? Fugit excepturi voluptatum at possimus consequatur suscipit, quam dolore dignissimos, facilis asperiores nisi adipisci explicabo porro ab pariatur!";

export function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer titulo={titulo} texto={texto} />
      <Footer />
    </div>
  );
}
