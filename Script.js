console.log("Start anime Studio")
console.log("search all movie")
function onload(){
    fetch('https://api.jikan.moe/v4/anime%27)
    .then((response) => {
        return response.json()
    }).then(dataAnime => {
        console.log(dataAnime)
        console.log(dataAnime.data[1].title)
        console.log(dataAnime.data[1].images.jpg.image_url)

        animeList(dataAnime)
    })
}
function animeList(dataAnime){
    for( counter=0; counter<dataAnime.data.length;counter++ ){
        animeTable(counter,dataAnime)
    }

}
function animeTable(index,dataAnime){
    console.log(dataAnime.data[index].title)
    const display_all_anime = document.getElementById('display_all_anime')
    let col = document.createElement('div')
    col.classList.add('col-lg-2')
    col.classList.add('col-md-4')
    col.classList.add('col-sm-6')
    col.classList.add('col-12')
    col.classList.add('my-lg-4')
    col.classList.add('my-md-3')
    col.classList.add('my-2')
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('bg-dark')
    card.classList.add('text-white')
    card.classList.add('blur')
    col.appendChild(card)
    let image = document.createElement('img')
    image.setAttribute('src',dataAnime.data[index].images.jpg.image_url)
    image.classList.add('card-img')
    image.classList.add('size-img-card')
    card.appendChild(image)
    let overlay = document.createElement('div')
    overlay.classList.add('contain')
    overlay.classList.add('overlay')
    card.appendChild(overlay)

    display_all_anime.appendChild(col)
}
