import React from 'react';
import LoginContainer from './containers/Login/LoginContainer';
import HomeContainer from './containers/Home/HomeContainer';
import NotFoundContainer from './containers/NotFound/NotFoundContainer';
import NewProductContainer from './containers/NewProduct/NewProductContainer';
import './app.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul> */}
          <div className="container">
            <div className="logo">
              <Link to="/">StockManager <span>v1.0</span></Link>
            </div>

            <div className="center">
              <h5>Stok Yönetim ve Takip Uygulaması</h5>
            </div>
            <div className="right">
              <div className="profile">
                <div className="avatar">
                  <span>Z</span>
                </div>
                <div className="user">
                  <h5><span>Hoşgeldin </span>Ziyaretçi</h5>
                </div>

                <div className="op">
                  <Link to="/giris-yap" className="button default">Giriş Yap</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/giris-yap">
            <LoginContainer />
          </Route>
          <Route path="/yeni-urun">
            <NewProductContainer />
          </Route>
          <Route exact path="/">
            <HomeContainer />
          </Route>

          <Route>
            <NotFoundContainer />
          </Route>
        </AnimatedSwitch>

      </div>
    </Router>
  )
}
export default App;