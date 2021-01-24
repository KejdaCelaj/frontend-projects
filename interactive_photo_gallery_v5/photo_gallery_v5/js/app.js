baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');
// console.log(search)


//////////////// My own search and filter code ///////////////////
document.addEventListener('keyup', () => {
    let userInput = document.getElementById("search");
    let search = userInput.value.toLowerCase();
    let images = document.getElementsByClassName("gallery")[0].children;
    for(let image of images){
        if(!image.dataset.caption.includes(search)){
            image.setAttribute("style", 'display:none');
        } else {
            image.setAttribute("style", 'display:block');
        }
    }

})