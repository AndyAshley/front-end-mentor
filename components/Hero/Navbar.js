const { useState } = require("react");

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="absolute top-0 w-full">
      <div className="container flex justify-between px-6 pt-8">
        <div>
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div></div>
        <div>
          <button
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <img src={isClicked ? "/images/icon-close-menu.svg" : "/images/icon-hamburger.svg"} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}
