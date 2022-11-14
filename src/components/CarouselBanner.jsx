import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.png'
import * as C from '../home/styled'


export default function CarouselBanner() {
    return (
        <C.Container id="start">
            <Carousel>
                <div className="div-carousel">
                    <img src={Banner1} />
                    <h1>Os melhores perfumes</h1>
                    <p>você só encontra aqui!</p>
                </div>
                <div className="div-carousel">
                    <img src={Banner2} />
                    <h1>Produtos Originais</h1>
                    <p> e Lacrados</p>
                </div>
            </Carousel>
        </C.Container>
    )
}