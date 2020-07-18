
const Sub_Portfolio = document.querySelectorAll('.portfolio-sub-item')
 Sub_Portfolio.forEach(i =>{
        i.addEventListener('mouseover', () => {
            i.childNodes[1].classList.add('img-darken');
        })
    })
 Sub_Portfolio.forEach(i =>{
        i.addEventListener('mouseout', () => {
            i.childNodes[1].classList.remove('img-darken');
        })
    })
