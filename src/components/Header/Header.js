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
        <Menu.Item as="a" className="text" href="https://github.com/Rajangrg/covid19-tracker">
          Source Code
        </Menu.Item>
        <Menu.Item as="a" className="text" href="https://disease.sh/docs/">
          API Details
        </Menu.Item>
        <Menu.Item
          as="a"
          className="text"
          href="https://github.com/Rajangrg/covid19-tracker/blob/master/LICENSE"
        >
          MIT License
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
