import React from "react";
import "./Header.css";
import {ExpandMore,Person,ShoppingBasketOutlined} from '@material-ui/icons';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="/">
          index
        </a>
      
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-auto">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
	   <a class="nav-link  dropdown-toggle " href="/" data-toggle="dropdown">  Services <ExpandMore style={{marginBottom: 3, marginLeft:-3}}/> </a>
	    <ul class="dropdown-menu">
		    <li><a class="dropdown-item" href="/"> Social Media Framing</a></li>
		    <li><a class="dropdown-item" href="/"> Diploma Framing</a></li>
        <li><a class="dropdown-item" href="/"> Jersey Framing</a></li>
		    <li><a class="dropdown-item" href="/"> Canvas Framing</a></li>
        <li><a class="dropdown-item" href="/"> Wedding Framing</a></li>
		    <li><a class="dropdown-item" href="/"> Gift Card</a></li>
	    </ul>
	</li>
  <li class="nav-item dropdown">
	   <a class="nav-link  dropdown-toggle" href="/" data-toggle="dropdown">  Frames <ExpandMore style={{marginBottom: 3, marginLeft:-3}}/>   </a>
	    <ul class="dropdown-menu">
		    <li><a class="dropdown-item" href="/"> Our Frames</a></li>
		    <li><a class="dropdown-item" href="/"> What We Frame? </a></li>
	    </ul>
	</li>
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Contact us
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Gifts
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/">
                <Person style={{fontSize: '1.8rem'}} />
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  <ShoppingBasketOutlined style={{fontSize: '1.8rem'}}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
