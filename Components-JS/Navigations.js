const elem = document.querySelector('.heading1')
console.log(elem)
const observer = new IntersectionObserver(entries =>{
    console.log("working")
    entries.forEach(entry => {
        console.log(entry.target)
        const square = entry.target.querySelector('p');
       

        if(entry.isIntersecting){
            elem.classList.add('change-me');
            return;
        }

        elem.classList.remove('change-me');
    });
});

observer.observe(document.querySelector('.text2'));