
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpeg";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.jpeg";


const Home=()=>{
    return(
        <>
        <Carousel>
      <Carousel.Item>
         <img src={ban1} className='banimg' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban2}  className='banimg' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3}  className='banimg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     <h1 className='heading'> Top Brands</h1>
        </>
    )
}

export default Home;