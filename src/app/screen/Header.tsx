import * as React from "react";
import { ButtonToolbar, Button } from 'react-bootstrap';

const Header = () => (
  <header>
  <div className="headLogo">
      <h3>Find Parrot</h3>
  </div>
  <ButtonToolbar className="ButtonToolbar">
      <Button >ALL PRODUCTS</Button>
      <Button >ABOUT AS</Button>
      <Button >LOG IN</Button>
      <Button >SING UP</Button>
  </ButtonToolbar>

</header>
);
export default Header;
