import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/creed-3.jpg"
                    alt="Creed III"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/scream-6.jpg"
                    alt="Scream 6"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/Quantumania.jpg"
                    alt="Ant-man and the Wasp Quantumania"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/al-borde.jpg"
                    alt="65 Al Borde de la Extinción"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;