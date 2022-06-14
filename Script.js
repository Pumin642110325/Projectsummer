
function onload(){
    fetch('https://api.jikan.moe/v4/anime')
    .then((response) => {
        return response.json()
    }).then(dataCard=> {
        console.log(dataCard)
        console.log(dataCard.data[1].title)
        Listcard(dataCard)
    })
}
function Listcard(dataCard){
    for( index=0; index<dataCard.data.length;index++ ){
        concept_card(index,dataCard)
    }
}
function concept_card(index,dataCard){
    
    console.log(dataCard.data[index].title)
    const display_all_card= document.getElementById('display_all_card')

    let col = document.createElement('div')
    col.classList.add('col-lg-2')
    col.classList.add('col-md-4')
    col.classList.add('col-12')
    col.classList.add('mt-2')

    let meat = document.createElement('div')
    meat.classList.add('card')
    meat.classList.add('bg-dark')
    meat.classList.add('text-white')
    meat.classList.add('blur')
    meat.classList.add('overlay')
    col.appendChild(meat)

    let image = document.createElement('img')
    image.setAttribute('src',dataCard.data[index].images.jpg.image_url)
    image.classList.add('card-img')
    image.classList.add('size-img-card')
    meat.appendChild(image)

    let text = document.createElement('div')
    text.classList.add('text')
    text.classList.add('p-3')
    meat.appendChild(text)

    let name =document.createElement('div')
    name.classList.add('row')
    text.appendChild(name)

    const namecard =document.createElement('p')
    namecard.classList.add('col-8')
    namecard.classList.add('text-sm')
    namecard.classList.add('md:text-base')
    namecard.classList.add('rx2')
    namecard.innerHTML = dataCard.data[index].title
    name.appendChild(namecard)

    const namecaed2 = document.createElement('i')
    namecaed2.classList.add('col-1')
    namecaed2.classList.add('bi')
    namecaed2.classList.add('bi-ticket-detailed-fill')
    namecaed2.classList.add('rx2')
    name.appendChild(namecaed2)

    const namecaed3 = document.createElement('i')
    namecaed3.classList.add('col-1')
    namecaed3.classList.add('bi')
    namecaed3.classList.add('bi-heart-fill')
    namecaed3.classList.add('rx2')
    name.appendChild(namecaed3)



    display_all_card.appendChild(col)
}