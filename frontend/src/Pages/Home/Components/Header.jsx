import "../../CSS/Header.scss";

// import AccounBtn from "../ButtonsFloader/AccountBtn";

const Header = () => {
  return (
    <div>
      <header>
        <div id="AcoountDiv">
          {/* <AccounBtn /> */}
          {/* <DropDownMenu /> */}
        </div>
        <div className="backgroundDiv-header">
          <div className="div-for-text">
            <p>Euro Countertops</p>
            <p>Granite & Marble</p>
          </div>
          <img
            className="ImgLogo"
            src="../../../src/assets/EC logo Empty Back.png"
            width={50}
          ></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
