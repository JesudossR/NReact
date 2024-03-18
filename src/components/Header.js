import Title from "./Title";

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-lists">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
              </div>
              <button>Login</button>
              <button>Logout</button>
      </div>
    </>
  );
};

export default Header;
