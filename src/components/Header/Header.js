import React from "react";
import { Menu } from "semantic-ui-react";

function Header() {
  return (
    <div>
      <Menu inverted stackable>
        <Menu.Item>
          <img
            src="https://img.icons8.com/officel/80/000000/virus.png"
            alt="covid19-logo"
          />
        </Menu.Item>
        <Menu.Item as="a" className="text" href="">
          Source Code
        </Menu.Item>
        <Menu.Item as="a" className="text" href="https://jobs.github.com/api">
          API Details
        </Menu.Item>
        <Menu.Item
          as="a"
          className="text"
          href="https://corona.lmao.ninja/docs/"
        >
          MIT License
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
