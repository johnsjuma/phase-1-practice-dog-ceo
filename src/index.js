console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",() => {
    fetchDogImages()
    fetchDogBreed()
})
function fetchDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
            .then(data => {
               // console.log(data)
                let myImageArray = data.message
                myImageArray.forEach(elementImages => {
                    addImagetoDom(elementImages)
                    });
                 })
}
function fetchDogBreed(){
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
            .then(data => { console.log(data)
                let ListArray = data.message
                    //console.log(data.message)
                for (let breedList in ListArray)
                {
                    addBreedToUl(breedList)
                }
        });
    }
function addImagetoDom(elementImages){
    let imageDivision = document.getElementById("dog-image-container")
    let imageTag = document.createElement("img")
    imageTag.src = elementImages
    imageDivision.appendChild(imageTag)

}
function addBreedToUl(breedList){
    console.log(breedList)
    let unorderedList = document.getElementById("dog-breeds")
    let list = document.createElement("li")
    unorderedList.appendChild(list)
    let select = document.getElementById("breed-dropdown")
    //console.log("hey")
    select.addEventListener('change', () => {
    let index = select.selectedIndex
    let myChoice = select.options
    let item = breedList.slice(0,1)
    let myFirstLetter = item.charAt(0)
        if(myChoice[index].value === myFirstLetter)
        {

            list.textContent = breedList

        }
    })
    list.addEventListener('click',() => {
        list.style.color = '#ff00ff'

    })
}