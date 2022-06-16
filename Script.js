
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
    namecaed3.classList.add('love')
    name.appendChild(namecaed3)

   
    display_all_card.appendChild(col)
}

function mydetail(index,dataCardh){
    console.log(dataCard.data[index].title)
    const display_all_card= document.getElementById('display_all_card')

    let bigcop = document.getElementById('div')
    bigcop.classList.add('col-lg-10')
    bigcop.classList.add('col-md-10')
    bigcop.classList.add('col-12')
    bigcop.classList.add('rx1')
    bigcop.classList.add('mt-4')

    let bigcop2 = document.getElementById('div')
    bigcop2.classList.add('card')
    bigcop2.classList.add('mb-3')
    bigcop.appendChild(bigcop2)

    let bigcop3 = document.getElementById('div')
    bigcop3.classList.add('row')
    bigcop3.classList.add('g-0')
    bigcop2.appendChild(bigcop3)

    const detailimage = document.getElementById('div')
    detailimage.classList.add('col-md-4')
    detailimage.setAttribute('src',dataCard.data[index].images.jpg.image_url)
    detailimage.appendChild(bigcop3)

    const bigtail = document.createElement('div')
    bigtail.classList.add('col-md-8')
    bigtail.classList.add('my_background')
    bigcop3.appendChild(bigtail)

    let tailmal = document.createElement('div')
    tailmal.classList.add('card-body')
    bigtail.appendChild(tailmal)

    const nameanime = document.createElement('h3')
    nameanime.classList.add('card-title')
    nameanime.innerHTML = dataCard.data[index].title
    tailmal.appendChild.add(nameanime)

    const status = document.createElement('div')
    status.classList.add('d-inline-flex')
    status.classList.add('text-white')
    status.classList.add('text-uppercase')
    status.classList.add('text-bold')
    status.innerHTML='Status'
    tailmal.appendChild.add(status)

    let instatus = document.createElement('p')
    instatus.classList.add('card-text')
    
    tailmal.appendChild.add(instatus)

    const intus = document.createElement('span')
    intus.classList.add('badge')
    intus.classList.add('bg-primary')
    intus.classList.add('d-inline-flex')
    intus.innerHTML = dataCard.data[index].status
    instatus.appendChild.add(intus)

    const synopsisy = document.createElement('div')
    synopsisy.classList.add('d-inline-flex')
    synopsisy.classList.add('text-white')
    synopsisy.classList.add('fs-5')
    synopsisy.classList.add('text-uppercase')
    synopsisy.classList.add('text-bold')
    synopsisy.innerHTML='Synopsis'
    tailmal.appendChild.add(status)

    let copmeat = document.createElement('p')
    copmeat.classList.add('card-text')
    tailmal.appendChild.add(copmeat)

    const meatha = document.createElement('span')
    meatha.classList.add('d-inline-flex')
    meatha.classList.add('rx1')
    meatha.innerHTML = dataCard.data[index].synopsis
    copmeat.appendChild.add(meatha)

    display_all_card.appendChild(bigtail)
}