import slide01 from '../assets/images/slide01.jpg'
//import slide02 from '../assets/images/slide02.jpg'
//import slide03 from '../assets/images/slide03.jpg'
//
//import Carousel from 'react-bootstrap/Carousel';

const HomeScreen = () => {
  return (
    <div>
      <h1>
          <img className="d-block w-auto" src={slide01} alt="First slide" />
          <h5>Облочное хранилище "MyCloud"</h5>
      </h1>
    </div>
  );
};

export default HomeScreen;
