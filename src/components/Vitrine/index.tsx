import React from "react";
// import SwiperCore, { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import CardProduto from "./CardProduto";
// import "swiper/swiper-bundle.css";
import styles from "./styles.module.scss";
import type { Product } from "../../types/Product";
import Carousel from "./Carousel";

// SwiperCore.use([Navigation]);

interface VitrineProps {
  products: Product[];
  handleCardClick: (product: Product) => void;
}

const Vitrine: React.FC<VitrineProps> = ({ products, handleCardClick }) => {
  return (
    <div className={styles.vitrine}>
      <h2>Produtos relacionados</h2>
      <nav role="tablist" className={styles.tabs}>
        <ul>
          <li role="tab" className={styles.activeTab}>
            Celular
          </li>
          <li role="tab">Acessórios</li>
          <li role="tab">Tablets</li>
          <li role="tab">Notebooks</li>
          <li role="tab">TVs</li>
          <li role="tab">Ver todos</li>
        </ul>
      </nav>
      <div className={styles.produtos}>
        <Carousel onClickCard={handleCardClick} products={products} />
        {/* {products.map(({ productName, descriptionShort, photo, price }) => (
          <CardProduto
            product={{
              productName,
              descriptionShort,
              photo,
              price,
            }}
            onClick={handleCardClick}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Vitrine;
