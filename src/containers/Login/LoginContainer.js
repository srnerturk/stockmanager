import React from 'react'
import { useForm } from 'react-hook-form'
import './login.style.scss';
import LoginSvg from '../../assets/password-manager.svg';

function LoginContainer() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }
  return (
    <div className="page-content">
      <div className="content">
        <div className="login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src={LoginSvg}/>
            <h3>StockManager Giriş</h3>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="form-input" name="text" placeholder="kullanıcı adınız" ref={register} />

            <input className="form-input" type="password" placeholder="şifreniz" name="exampleRequired" ref={register} />

            <input className="button default" value="Giriş Yap" type="submit" />

            <p>Giriş yapmadan program özelliklerini kullanamazsınız.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginContainer;