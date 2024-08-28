import './styles.css'
import carousel from './carousel'


const imageCarousel = () => {
    const handleCarousel = carousel()

    handleCarousel

    setInterval(handleCarousel.autoplay, 5000);
}
imageCarousel()