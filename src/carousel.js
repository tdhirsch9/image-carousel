
const carousel = () => {

    const slides = Array.from(document.querySelectorAll('.slide'))
    const navDivs = Array.from(document.querySelectorAll('.navigation'))

    let currentIndex = 0;
    
    const clearNav = () => { 
        document.querySelectorAll(".navigation").forEach(element => {
            element.classList.remove('active');
        });
        navDivs[currentIndex].classList.add('active');
    };
    
    const next = () => {
        const container = document.querySelector('.carousel-container')
        container.innerHTML = ""

        currentIndex = (currentIndex + 1) % slides.length

        const slideDiv = slides[currentIndex]
        container.appendChild(slideDiv)
        handleNavDisplay()
        
    }

    const previous = () => {
        const container = document.querySelector('.carousel-container')
        container.innerHTML = ""

        currentIndex = (currentIndex - 1 + slides.length) % slides.length

        const slideDiv = slides[currentIndex]
        container.appendChild(slideDiv)
        handleNavDisplay()
    }

    const autoplay = () => {
        const container = document.querySelector('.carousel-container')
        container.innerHTML = ""

        currentIndex = (currentIndex + 1) % slides.length

        const slideDiv = slides[currentIndex]
        container.appendChild(slideDiv)

        handleNavDisplay()

    }

    const handleNavDisplay = () => {
        clearNav();
        navDivs[currentIndex].classList.add('active');
    }

    const handleNavClick = (event) => {
        const container = document.querySelector('.carousel-container')
        const navDivs = Array.from(document.querySelectorAll('.navigation'))
        container.innerHTML = ""

        clearNav()
        event.currentTarget.classList.toggle('active')
        if(event.currentTarget === navDivs[0]){
            container.appendChild(slides[0])
        } else if (event.currentTarget === navDivs[1]){
            container.appendChild(slides[1])
        } else if (event.currentTarget === navDivs[2]){
            container.appendChild(slides[2])
        } else if (event.currentTarget === navDivs[3]){
            container.appendChild(slides[3])
        } 
    };

    document.querySelectorAll(".navigation").forEach(element => {
        element.addEventListener('click', handleNavClick)
    });


    clearNav()

    document.querySelector('.next-button').addEventListener('click', next)
    document.querySelector('.previous-button').addEventListener('click', previous)


    return{
        next,
        previous,
        autoplay,
    }

    
}


export default carousel
