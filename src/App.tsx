import Banner from "./components/Banner";
import CategoryGrid from "./components/CategoryGrid";
import Header from "./components/Header";
import Vitrine from "./components/Vitrine";
import DoubleBanner from "./components/DoubleBanner";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

import ComputerIcon from "./assets/computer-icon.png";
import MercadoIcon from "./assets/mercado-icon.png";
import BebidasIcon from "./assets/bebidas-icon.png";
import FerramentasIcon from "./assets/ferramentas-icon.png";
import SaudeIcon from "./assets/saude-icon.png";
import EsportesIcon from "./assets/esportes-icon.png";
import ModaIcon from "./assets/moda-icon.png";
import SmallBannerImg from "./assets/small-banner-img.jpg";

import { useEffect, useState } from "react";
import type { Product } from "./types/Product";

const categories = [
  { icon: <img src={ComputerIcon} />, label: "Tecnologia" },
  { icon: <img src={MercadoIcon} />, label: "Supermercado" },
  { icon: <img src={BebidasIcon} />, label: "Bebidas" },
  { icon: <img src={FerramentasIcon} />, label: "Ferramentas" },
  { icon: <img src={SaudeIcon} />, label: "Saúde" },
  { icon: <img src={EsportesIcon} />, label: "Esportes e Fitness" },
  { icon: <img src={ModaIcon} />, label: "Moda" },
];

const banners = [
  {
    imgSrc: SmallBannerImg,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    buttonText: "Confira",
  },
  {
    imgSrc: SmallBannerImg,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    buttonText: "Confira",
  },
];

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    console.log(product);
  };
  const closeModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    console.log("FETCH PRODUTOS")
    const fetchProducts = async () => {
      const res = await fetch("/api/produtos");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (
    <main className="global-container">
      <Header />
      <Banner />
      <CategoryGrid categories={categories} />
      <Vitrine products={products} handleCardClick={handleCardClick} />
      <DoubleBanner banners={banners} />
      <Vitrine products={products} handleCardClick={handleCardClick} />
      <DoubleBanner banners={banners} />
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={closeModal}
      />
    </main>
  );
}

export default App;
