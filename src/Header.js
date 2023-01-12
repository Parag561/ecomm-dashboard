import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import {
  Link,
  useNavigate
} from "react-router-dom";
function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logout(){
    localStorage.clear();
    navigate("/register");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Demo</Navbar.Brand>
          <Nav className="me-auto nav-bar-wrapper">
            {
              localStorage.getItem("user-info") ?
                <>
                <Link to="/">Product List</Link>
                  <Link to="/add">Add product</Link>
                  <Link to="/update/:id">Update product</Link>
                </>
                :
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
            }
          </Nav>
          {
            localStorage.getItem("user-info") ?
          <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                <NavDropdown.Item>profile</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          : null
}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;