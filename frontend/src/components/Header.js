import BRATOSLAV2 from "../images/bratoslav2.jpg";
import { NavLink } from "react-router-dom";
import WishlistModal from "./WishlistModal";

const Header = () => {
  function countWishlist() {
    return localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).items.length : 0
  }
  function totalWishlist() {
    return (localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).items.reduce((partial_sum, i) => partial_sum + i.price, 0) : 0) + ' KM'
  }

  return (
    <header className="header shop">
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              <div className="logo">
                <a href="/">
                  <img src={BRATOSLAV2} alt="logo" />
                </a>
              </div>

              <div className="mobile-nav"></div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <form>
                    <input
                      name="search"
                      placeholder="Traži ovdje..."
                      type="search"
                    />
                    <button className="btnn">
                      <i className="ti-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                <div className="sinlge-bar shopping">
                  <a data-toggle="modal" data-target={"#wishModal"} href="javascript:;" className="single-icon">
                    <i className="ti-heart"></i>{" "}
                    {countWishlist() > 0 ? <span className="total-count">{countWishlist()}</span> : null}
                  </a>
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>{countWishlist()} Items</span>
                      <a data-toggle="modal" data-target={"#wishModal"} href="javascript:;">View Cart</a>
                    </div>

                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">{totalWishlist()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-bar">

                  {localStorage.getItem("user") ? (
                    <span>
                      {JSON.parse(localStorage.getItem("user")).username}
                    </span>
                  ) : null}
                  {!localStorage.getItem("user") ? (
                    <NavLink
                      to="/login"
                      activeClassName="active"
                      className="single-icon"
                    >
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </NavLink>
                  ) : null}
                  {localStorage.getItem("user") ? (
                    <span>
                      <NavLink
                        to="/login"
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("wishlist");
                          window.location.replace('#/login')
                          window.location.reload()
                        }}
                        activeClassName="active"
                        className="single-icon"
                      >
                        <i
                          className="fa fa-user-circle-o"
                          aria-hidden="true"
                        ></i>{" "}
                        Logout
                      </NavLink>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="container">
          <div className="cat-nav-head">
            <div className="row">
              <div className="col-lg-3">
                <div className="all-category">
                  <h3 className="cat-heading">
                    <i className="fa fa-bars" aria-hidden="true"></i>KATEGORIJE
                  </h3>
                  <ul className="main-category"></ul>
                </div>
              </div>

              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li>
                            <NavLink activeClassName="active" exact to="/">
                              Početna
                            </NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName="active" to="/proizvodi">
                              Proizvodi
                            </NavLink>
                          </li>

                          <li>
                            <NavLink activeClassName="active" to="/about">
                              O nama
                            </NavLink>
                          </li>

                          <li>
                            <NavLink activeClassName="active" to="/contact">
                              Kontakt
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WishlistModal />
    </header>
  );
};
export default Header;
