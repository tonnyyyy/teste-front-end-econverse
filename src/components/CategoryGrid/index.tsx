import React from 'react';
import './styles.scss';

interface Category {
  icon: React.ReactNode;
  label: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section className="category-grid">
      {categories.map((category, index) => (
        <div className="category-item">
            <div className="category-card" key={index}>
            {category.icon}
            </div>
            <span>{category.label}</span>
        </div>
      ))}
    </section>
  );
};

export default CategoryGrid;
