
function onload(){
    hideAll()
    showAllcard()
    fetch('https://api.jikan.moe/v4/anime')
    .then((response) => {
        return response.json()
    }).then(dataCard=> {
        console.log(dataCard)
        console.log(dataCard.data[1].title)
        Listcard(dataCard.data)
    })
}
function Listcard(dataCard){
    for( card of dataCard ){
        concept_card(card)
    }
}
function concept_card(dataCard){
    
    // console.log(dataCard)
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
    image.setAttribute('src',dataCard.images.jpg.image_url)
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
    namecard.innerHTML = dataCard.title
    name.appendChild(namecard)

    const namecaed2 = document.createElement('i')
    namecaed2.classList.add('col-1')
    namecaed2.classList.add('bi')
    namecaed2.classList.add('bi-ticket-detailed-fill')
    namecaed2.classList.add('rx2')
    name.appendChild(namecaed2)

    namecaed2.addEventListener('click',function(){
        my_detail(dataCard)
    })

    const namecaed3 = document.createElement('i')
    namecaed3.classList.add('col-1')
    namecaed3.classList.add('bi')
    namecaed3.classList.add('bi-heart-fill')
    namecaed3.classList.add('love')
    name.appendChild(namecaed3)
    
    namecaed3.addEventListener('click',function(){
        let confirmButton = confirm(`Confirm card ${dataCard.title} to your favorites`)
        if (confirmButton) {
            addFavorite(dataCard)
        }
    })
    
   
    display_all_card.appendChild(col)
}

function mydetail(dataCardh){
    console.log(dataCard.data[index].title)
    const display_all_card= document.getElementById('titail')

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

function my_detail(dataCard){
    hideAll()
    showdataDetail()
    console.log(dataCard)
    let image_Detail = document.getElementById('image_Detail')
    image_Detail.setAttribute('src', dataCard.images.jpg.large_image_url)
    let name_Detail = document.getElementById('name_Detail')
    name_Detail.innerHTML = dataCard.title
    let type_Detail = document.getElementById('type_detail')
    type_Detail.innerHTML = dataCard.type
    let synopsis_Detail = document.getElementById('synopsis_Detail')
    synopsis_Detail.innerHTML = dataCard.synopsis

}

document.getElementById('tamha').addEventListener('click', (event) => {
    searchCard()
})

function searchCard(){
    let search = document.getElementById('tamha2').value
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
        .then(response => {
            return response.json()
        }).then(dataCard => {
            let cardtoon = dataCard.data
            console.log(cardtoon)
            document.getElementById('display_all_card').innerHTML=''
            Listcard(cardtoon)
            document.getElementById('searchtoon').innerText='Search'
        })
}
function lovecard(){
    fetch('https://se104-project-backend.du.r.appspot.com/movies/642110325')
    .then((response)=>{
        return response.json()
    }).then(dataCard => {
        console.log('lovecard')
        console.log(dataCard)
        for( card of dataCard ){
            favotite_card(card)
        }
    })
}
    
function favotite_card(dataCard){
    
    // console.log(dataCard)
    const display_favorite_card = document.getElementById('display_favorite_card')

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
    image.setAttribute('src',dataCard.image_url)
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
    namecard.innerHTML = dataCard.title
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
    namecaed3.classList.add('bi-trash-fill')
    namecaed3.classList.add('love')
    name.appendChild(namecaed3)

    namecaed3.addEventListener('click',function(){
        console.log(dataCard.id)
        deleteCard(dataCard.id)
    })
   
    display_favorite_card.appendChild(col)
}

function deleteCard(id) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=642110325&&movieId=${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`Card ${data.title} Delete complete`)
        fetch('https://se104-project-backend.du.r.appspot.com/movies/642110325').then(response => {
            return response.json().then(data => {
                console.log(data)
                display_favorite_card.innerHTML=''
                lovecard(data)
            })
        })
    }).catch(error => {
        alert('Error not good')
    })
}

function addFavorite (dataCard){
    console.log(dataCard)
    
    const showdata = {
    id: 642110325,
    movie: {
        url: dataCard.url,
        image_url: dataCard.images.jpg.large_image_url,
        title: dataCard.title,
        synopsis: dataCard.synopsis,
        type: dataCard.type,
        episodes: dataCard.episodes,
        score: dataCard.score,
        rated: dataCard.rating,
        airing: dataCard.airing,
    },
    };
    console.log(showdata)
    fetch('https://se104-project-backend.du.r.appspot.com/movies',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(showdata)
    }).then(response => {
        if(response.status === 200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }

    }).then(data=>{
        console.log('success',data)
    })
}

document.getElementById('lovetoon').addEventListener('click', (event) => {
    hideAll()
    showFavoritecard()
    lovecard()
})

var all_card = document.getElementById('all_card')
var favorite_card = document.getElementById('favorite_card')
var showDetail = document.getElementById('showDetail')

function hideAll(){
    all_card.style.display='none'
    favorite_card.style.display='none'
    showDetail.style.display='none'
}
function showAllcard(){
    all_card.style.display='block'
}
function showFavoritecard(){
    favorite_card.style.display='block'
    document.getElementById('display_favorite_card').innerHTML=''
}
function showdataDetail(){
    showDetail.style.display='block'
}
