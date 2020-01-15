import React from 'react'
import './home.style.scss';
import newProduct from '../../assets/box.svg';
import productList from '../../assets/product.svg';
import reservation from '../../assets/reservation.svg';
import sale from '../../assets/sale.svg';
import storeImg from '../../assets/store.svg';
import settings from '../../assets/settings.svg';
import {
  Link
} from "react-router-dom";

function HomeContainer() {
  return (
    <div className="page-content">
      <div className="content">
        <div className="boxes">
          <Link to="/yeni-urun"  className="box red">
            <h3>Yeni Ürün</h3>
            <img alt="new product" src={newProduct} />
          </Link>
          <Link to="/urun-listesi" className="box yellow">
            <h3>Ürün Listesi</h3>
            <img alt="new product" src={productList} />
          </Link>
          <Link to="/yeni-satis" className="box blue">
            <h3>Yeni Satış</h3>
            <img alt="new product" src={sale} />
          </Link>
          <Link to="/rezerve-olustur" className="box gray">
            <h3>Rezerve Oluştur</h3>
            <img alt="new product" src={reservation} />
          </Link>
          <Link to="/depolarim" className="box light-gray">
            <h3>Depolarım</h3>
            <img alt="new product" src={storeImg} />
          </Link>

          <Link to="/ayarlar" className="box green">
            <h3>Ayarlar</h3>
            <img alt="new product" src={settings} />
          </Link>
        </div>
      </div>
    </div>

  )
}
export default HomeContainer;