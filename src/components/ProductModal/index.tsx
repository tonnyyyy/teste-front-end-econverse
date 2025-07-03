import React, { useEffect } from "react";
import type { Product } from "../../types/Product";
import "./styles.scss";

interface ProductModalProps {
  product?: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    product && (
      <div className="product-modal-overlay" role="dialog" aria-modal="true">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
        <div className="product-modal-content">
          <img src={product.photo} alt={product.productName} />
          <h2 className="product-modal-name">{product.productName}</h2>
          <p className="product-modal-description">{product.descriptionShort}</p>
          <p className="product-modal-price">R$ {product.price.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
    )
  );
};

export default ProductModal;
