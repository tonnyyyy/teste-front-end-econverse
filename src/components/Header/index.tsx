import React from 'react';

import EconverseLogo from '../../assets/econverse-logo.png';
import CaixaIcon from '../../assets/svg/caixa.svg';
import CarrinhoIcon from '../../assets/svg/carrinho.svg';
import CoracaoIcon from '../../assets/svg/coracao.svg';
import SearchIcon from '../../assets/svg/search.svg';
import UsuarioIcon from '../../assets/svg/usuario.svg';

import './styles.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section id="header-1st-line">
        <span>Compra <strong>100% segura</strong></span>
        <span><strong>Frete Grátis</strong> acima de R$ 200</span>
        <span><strong>Parcele</strong> suas compras</span>
      </section>
      <section id="header-2nd-line">
        <div className="logo">
          <img src={EconverseLogo} />
        </div>
        <div className="search-bar">
          <input type="search" placeholder="O que você está buscando?" aria-label="Search" />
          <span>
            <img className="search-icon" src={SearchIcon} />
          </span>
        </div>
        <div className="icons">
          <span>
            <img className='icon' src={CaixaIcon} />
          </span>
          <span>
            <img className='icon' src={CoracaoIcon} />
          </span>
          <span>
            <img className='icon' src={UsuarioIcon} />
          </span>
          <span>
            <img className='icon' src={CarrinhoIcon} />
          </span>
        </div>
      </section>
      <nav className="header-categories">
        <a>Todas Categorias</a>
        <a>Supermercado</a>
        <a>Livros</a>
        <a>Moda</a>
        <a>Lançamentos</a>
        <a>Ofertas do Dia</a>
        <a>Assinatura</a>
      </nav>
    </header>
  );
};

export default Header;
