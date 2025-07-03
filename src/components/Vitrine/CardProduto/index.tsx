import React from 'react';
import type { Product } from '../../../types/Product';
import styles from '../styles.module.scss';

interface CardProdutoProps {
  product: Product;
  onClick: (product: Product) => void
}

const CardProduto: React.FC<CardProdutoProps> = ({ product, onClick }) => {
  return (
    <div className={styles.cardProduto} onClick={() => onClick(product)}>
      <img src={product.photo} alt={product.productName} className={styles.productImage} />
      <p className={styles.description}>{product.productName}</p>
      <div className={styles.price}>
        <span className={styles.oldPrice}>R$ 30,90</span>
        <span className={styles.currentPrice}>R$ {product.price.toFixed(2)}</span>
      </div>
      <p>ou 2x de R$ 49,95 sem juros</p>
      <p className={styles.freeShipping}>Frete grátis</p>
      <button className={styles.ctaButton}>COMPRAR</button>
    </div>
  );
};

export default CardProduto;
