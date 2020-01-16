import React from 'react'
import { useForm } from 'react-hook-form'
import './newproduct.style.scss';
function NewProductContainer() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }
  return (
    <div className="page-content">
      <div className="content">
        <div className="new-product">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="left-side">

              {/* register your input into the hook by invoking the "register" function */}
              <div className="product-element">
                <label>Ürün Kodu</label>
                <input className="product-input" type="text" placeholder="Ürün Kodu veya Barkod" ref={register} />
              </div>

              <div className="product-element">
                <label>Ürün Adı</label>
                <input className="product-input" type="text" placeholder="Ürün Adı" ref={register} />
              </div>

              <div className="product-element">
                <label>Açıklama</label>
                <input className="product-input" type="text" placeholder="Ürün Açıklaması" ref={register} />
              </div>

              <div className="product-element">
                <label>Alış Fiyatı</label>
                <input className="product-input small" type="number" placeholder="Alış Fiyatı" ref={register} />
              </div>
              <div className="product-element">
                <label>Vergi Oranı</label>
                <input className="product-input small" type="number" placeholder="KDV" ref={register} />
              </div>
              <div className="product-element">
                <label>Satış Fiyatı</label>
                <input className="product-input small" type="number" placeholder="Satış Fiyatı" ref={register} />
              </div>

              <div className="product-element">
                <label>Tedarikçi</label>
                <input className="product-input" type="text" placeholder="Tedarikçi" ref={register} />
              </div>
            </div>
            <div className="right-side">
              <div className="upload">
                <label>Fotoğraf</label>
                <input className="product-input" type="file" placeholder="Ürün Kodu veya Barkod" />
              </div>

              <div className="product-element">
                <label>Ek Bilgiler</label>
                <input className="product-input" type="text" placeholder="Ek bilgiler" ref={register} />
              </div>
              <div className="product-element">
                <label>Adet</label>
                <input className="product-input small" type="text" placeholder="Stok Adedi" ref={register} />
              </div>

              <div className="product-element">
                <label>Minimum</label>
                <input className="product-input small" type="text" placeholder="Minimum Stok Adedi" ref={register} />
              </div>
            </div>

            <div className="actions">
              <div className="inside">
                <input className="button default" value="Kaydet" type="submit" />
                <input className="button default" value="Vazgeç" type="submit" />
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default NewProductContainer;