import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import endpoints from '../constants/endpoints';

const NavBar = () => {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {data?.brand && (
          <Navbar.Brand href="/" style={{ color: 'white', fontWeight: 'bold' }}>
            {data.brand}
          </Navbar.Brand>
        )}

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data &&
              data.sections?.map((section, index) =>
                section?.type === 'link' ? (
                  <Nav.Link
                    key={section.title}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setExpanded(false)}
                    className="navbar__link"
                  >
                    {section.title}
                  </Nav.Link>
                ) : (
                  <NavLink
                    key={section.title}
                    onClick={() => setExpanded(false)}
                    exact={index === 0}
                    activeClassName="navbar__link--active"
                    className="nav-link"
                    to={section.href}
                  >
                    {section.title}
                  </NavLink>
                )
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;

