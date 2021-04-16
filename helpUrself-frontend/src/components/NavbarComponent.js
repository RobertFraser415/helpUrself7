import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

// const Example = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;





























const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">helpUrself</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav text="white" className="mr-auto" navbar id="navbar">
            <NavItem>
              <NavLink href="/gives/">GIVES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gets/">GETS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gives/create/">Create a GIVE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gets/create/">Create a GET</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CREATE A POST
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="/gives/">Create a GIVE</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="/gets/">Create a Get</a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

// export default NavbarComponent;

// const Navbar = () => {
//     return (

//         <div>
//             <nav className="navbar navbar-dark bg-dark navbar expand-lg">
//                 <Link to="/HomePage">helpÜrself </Link>
//                 <div className="collapse navbar-collapse">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="navbar-item">
//                         <Link to="/GiveListPage" className="nav-link">GIVE</Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/GetListPage" className="nav-link">GET</Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/SignUpPage" className="nav-link">Sign Up</Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/LoginPage" className="nav-link">Login</Link>
//                     </li>
//                 </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// }

export default NavbarComponent;
