import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-icon"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout-icon"
      />
    </div>

    <ul className="header-items-container">
      <li className="item">Home</li>
      <li className="item">Products</li>
      <li className="item">Cart</li>
      <li className="item">
        <button className="logout-button" type="button">
          Logout
        </button>
      </li>
    </ul>

    <ul className="ms-devises-items-container">
      <li className="item-image-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
      </li>
      <li className="item-image-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </li>
      <li className="item-image-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </li>
    </ul>
  </div>
)

export default Header
