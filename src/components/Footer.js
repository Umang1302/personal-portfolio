import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/UR_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="mt-3">
            <img src={logo} alt="Logo" />
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-3">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/umang-singh-rajawat-6b12751a6/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/umang_singhh/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
