import React from "react";
import Button from "elements/Button";
import BrandIcon from "./IconText";

function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button type="link" href="/" className="nav-link">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button type="link" href="/browse-by" className="nav-link">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button type="link" href="/stories" className="nav-link">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button type="link" href="/agents" className="nav-link">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
