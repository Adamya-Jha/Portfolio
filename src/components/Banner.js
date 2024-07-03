import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons ";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {

    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');   //to display and keep track of the word being displayed
    const period = 2000;
    const [delta, setDelta] = useState(300 - 100* Math.random() )

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    return (
    
        <section id="home" className="Banner" >
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>
                            {`Hi I'm Adamya`}
                            <span className="wrap">Web Developer</span>
                        </h1>
                        <p>
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src ={headerImg} alt = "Header Img"/> 
                    </Col>
                </Row>
            </Container>

        </section>
    )
}