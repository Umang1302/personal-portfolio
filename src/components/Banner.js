import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/webDev.jpg";
import skill1 from "../assets/img/skill1.png";
import skill2 from "../assets/img/skill2.png";
import skill3 from "../assets/img/skill3.png";
import skill4 from "../assets/img/skill4.png";
import skill5 from "../assets/img/skill5.png";
import skill6 from "../assets/img/skill6.png";
import skill7 from "../assets/img/skill7.png";
import skill8 from "../assets/img/skill8.jpg";
import skill9 from "../assets/img/skill9.png";
import skill10 from "../assets/img/skill10.png";
import skill11 from "../assets/img/skill11.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [  "Fullstack Developer","Freelancer", "Philomath", "Dancer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{`Hi! I'm Umang Singh Rajawat`} 
                  </h2>
                <h1>
                  <span className="txt-rotate"  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>
                  </h1> 
                  <p>I specialize in creating beautiful useable professional websites/products using best practice accessibility and the latest web standard guidelines resulting in semantic and SEO friendly. I'd love to keep up with technology trends to enhance my skills in order to build better & effective products..</p>
                  <div className="m-5">
                  <a href="#connect">
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                  </div>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div>
                  <img className="mx-2 my-1" style={{ width: '15%' }}  src={skill1} alt="Header]"/>
                  <img className="mx-2 my-1" style={{ width: '14%' }} src={skill2} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '14%' }}  src={skill3} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '14%' }} src={skill4} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '15%' }}  src={skill5} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '16%' }} src={skill6} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '14%' }} src={skill7} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '25%' }} src={skill8} alt="Header"/>
                  <img className="mx-2 my-1" style={{ width: '20%' }} src={skill9} alt="Header"/>
                  <div className="d-flex justify-content-center">
                  <img className="my-4" style={{ width: '15%',height:"50%",marginLeft:"-2rem"}} src={skill10} alt="Header"/>
                  <img style={{ width: '20%' }} src={skill11} alt="Header"/>
                  </div>

                  </div>
                </div>
           
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
