import { useRef, useState } from "react";
import type { Product } from "../../../types/Product";
import CardProduto from "../CardProduto";

import "./styles.scss";

interface CarouselProps {
  products: Product[];
  onClickCard: (product: Product) => void;
}

const Carousel: React.FC<CarouselProps> = ({ products, onClickCard }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;
  const cardWidth = 280;

  const maxIndex = products.length - visibleCards;

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <div
      className="carousel-container"
      role="region"
      aria-label="Product carousel"
    >
      <button
        className="btn-arrow btn-prev"
        onClick={handlePrev}
        disabled={currentIndex <= 0}
        aria-label="Previous products"
      >
        {"<"}
      </button>
      <button
        className="btn-arrow btn-next"
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Next products"
      >
        {">"}
      </button>
      <div className="carousel-track" ref={trackRef} tabIndex={0}>
        {products.map((product) => (
          <CardProduto
            key={product.productName}
            product={product}
            onClick={onClickCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
