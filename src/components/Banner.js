import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {

    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');   //to display and keep track of the word being displayed
    const period = 2000;
    const [delta, setDelta] = useState(300 - 100 * Math.random())

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;  // to constantly loop over the titles
        let fullText = toRotate[i];

        // reducing the letter by one if isDeleting else increasing 
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {  
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
            setLoopNum(loopNum + 1);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(0);
            setDelta(450);
        }
    };



    return (
        <section id="home" className="Banner" >
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>
                            {`Hi I'm Adamya Jha `}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            I am an aspiring tech enthusiast currently studying computer science in VIT, Vellore.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}