const Pop = [{
    id: 0, name: "HAVE A NICE DAY", description : "See how the crew unleashes itself in Akihabara. If you need an afternoon pick-me-up or just want to put a smile on your face -- just click on play and have a nice day!", price: 10.99, discontinued: false, catagories: "Pop", imageUrl:'../assets/img/WorldOrder.jpeg', audio: '../assets/audio/WORLD ORDER - HAVE A NICE DAY.mp3'
},{
    id: 1, name: "HAVE A NICE DAY", description : "See how the crew unleashes itself in Akihabara. If you need an afternoon pick-me-up or just want to put a smile on your face -- just click on play and have a nice day!", price: 10.99, discontinued: false, catagories: "Pop", imageUrl:'../assets/img/WorldOrder.jpeg', audio: '../assets/audio/WORLD ORDER - HAVE A NICE DAY.mp3'
},{
    id: 2, name: "HAVE A NICE DAY", description : "See how the crew unleashes itself in Akihabara. If you need an afternoon pick-me-up or just want to put a smile on your face -- just click on play and have a nice day!", price: 10.99, discontinued: false, catagories: "Pop", imageUrl:'../assets/img/WorldOrder.jpeg', audio: '../assets/audio/WORLD ORDER - HAVE A NICE DAY.mp3'
},{
    id: 3, name: "HAVE A NICE DAY", description : "See how the crew unleashes itself in Akihabara. If you need an afternoon pick-me-up or just want to put a smile on your face -- just click on play and have a nice day!", price: 10.99, discontinued: false, catagories: "Pop", imageUrl:'../assets/img/WorldOrder.jpeg', audio: '../assets/audio/WORLD ORDER - HAVE A NICE DAY.mp3'
},{
    id: 4, name: "HAVE A NICE DAY", description : "See how the crew unleashes itself in Akihabara. If you need an afternoon pick-me-up or just want to put a smile on your face -- just click on play and have a nice day!", price: 10.99, discontinued: false, catagories: "Pop", imageUrl:'../assets/img/WorldOrder.jpeg', audio: '../assets/audio/WORLD ORDER - HAVE A NICE DAY.mp3'
}]

let PopAppend = false;

function createProductCard(product) {
    let Arr;
    // Create a <div> to hold the card
    if(product === Pop[0].catagories && PopAppend === false){
        Arr = Pop;
        PopAppend = true;
    }

    for(let i = 0; i < Arr.length; i++){
        const card = document.createElement('div');
        card.classList.add("card");
    
        // IMG
        const productImage = document.createElement('img');
        productImage.src =  Arr[i].imageUrl;
        productImage.classList.add('card-image');
        card.appendChild(productImage);
        // Header
        const title = document.createElement('h2');
        title.classList.add("card-title");
        title.innerHTML = Arr[i].name;
        card.appendChild(title);
        // Music?
        // <source src="horse.ogg" type="audio/ogg"></source>
        const music = document.createElement('audio');
        music.controls = true;
        music.classList.add("card-audio");
        const musicInner = document.createElement('source');
        musicInner.src = Arr[i].audio;
        musicInner.type = "audio/mpeg"
        music.appendChild(musicInner);
        card.appendChild(music);
        // Content
        const content = document.createElement('div');
        content.classList.add("content");
        const contentPTag = document.createElement('p');
        contentPTag.innerHTML = Arr[i].description;
        content.appendChild(contentPTag);
        card.appendChild(content);
        // Price
        const Price = document.createElement('span');
        Price.innerHTML = "$ " + Arr[i].price;
        card.appendChild(Price);
    
    
        document.getElementById('category-Pop').appendChild(card);
    }

   }