import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/RH_ProfilePic.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm Richard Hague (33), hailing from the charming town of&nbsp;
              <i>
                <b className="purple">Macclesfield</b>
              </i>&nbsp;in Cheshire, England—just a stone's throw from the vibrant city of Manchester. 
              <br /><br />
              By day, I'm your friendly neighborhood&nbsp;
              <i>
                <b className="purple">iMIS</b>
              </i>&nbsp;consultant, weaving magic with databases. By night, I immerse myself in the endless possibilities of web development, crafting digital marvels in the world of freelance.
              <br /><br />
              Beyond the confines of code, you'll find me gazing at the stars, cheering for&nbsp;
              <i>
                <b className="purple">Manchester United</b>
              </i>&nbsp;, or engaging in some fierce&nbsp;
              <i>
                <b className="purple">table tennis</b>
              </i>&nbsp;battles.
              <br /><br />
              Join me on this cosmic journey where technology meets the stars, and passion fuels the game!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              overflow: 'hidden',
              margin: 'auto'
            }}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rhagueweb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rhagueweb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rhagueweb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rhague90"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
