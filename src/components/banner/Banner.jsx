import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import './Banner.css';
import { HashLink } from "react-router-hash-link";

const toRotate = [
  "Frontend Developer", 
  "Backend Developer", 
  "FullStack Developer", 
  "Human"
 ];
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const period = 2000;

    const tick = useCallback(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
    
      setText(updatedText);
    
      let newDelta = 200 - Math.random() * 100;
      if (isDeleting) {
        newDelta /= 2;
      }
    
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        newDelta = period;
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        newDelta = 500;
      }
    
      setDelta(newDelta);
    }, [text, loopNum, isDeleting]); // ✅ include toRotate
    
  
    useEffect(() => {
      const ticker = setTimeout(() => {
        tick();
      }, delta);
      return () => clearTimeout(ticker);
    }, [tick, delta]);
    
    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -150;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };
  

return (
    <section id="home" className="banner">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio </span>
                <h1>{`Hi I'm Kian! `}
                    <br></br>
                    <span className="wrap"> A {text}</span>
                </h1>
                <p>Web Developer, UI/UX Designer, and Content Creator</p>
                <HashLink to="#contact" scroll={scrollWithOffset}>
                <button >Let's Connect <ArrowRightCircle size={25} /></button>
                </HashLink>
                </Col>
                <Col className="banner-img" xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
);
}