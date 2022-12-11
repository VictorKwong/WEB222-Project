let PopAppend = false;
let RockAppend = false;
let NinetysAppend = false;
let SoundtracksAppend = false;

//Utils
function getRandomInt() {
    return Math.random();
  }

//Card
function createProductCard(product) {
    let Arr;
    // Create a <div> to hold the card
    if(product === Pop[0].catagories && PopAppend === false){
        Arr = Pop;
    }else if(product === Rock[0].catagories && RockAppend === false){
        Arr = Rock;
    }else if(product === Ninetys[0].catagories && NinetysAppend === false){
        Arr = Ninetys;
    }else if(product === Soundtracks[0].catagories && SoundtracksAppend === false){
        Arr = Soundtracks;
    }
    
    if(Arr !== undefined){
        for(let i = 0; i < Arr.length; i++){
            const card = document.createElement('div');
            card.classList.add("card");
            card.onclick = function(){
                mySongFunction(Arr,i);
            }
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
            content.classList.add("card-description");
            const contentPTag = document.createElement('p');
            contentPTag.innerHTML = Arr[i].description;
            content.appendChild(contentPTag);
            card.appendChild(content);
            // Price
            const Price = document.createElement('span');
            Price.classList.add("card-price");
            Price.innerHTML = "$ " + Arr[i].price;
            card.appendChild(Price);
            if(product === Pop[0].catagories && PopAppend === false){
                document.getElementById('category-Pop').appendChild(card);
            }else if(product === Rock[0].catagories && RockAppend === false){
                document.getElementById('category-Rock').appendChild(card);
            }else if(product === Ninetys[0].catagories && NinetysAppend === false){
                document.getElementById('category-90s').appendChild(card);
            }else if(product === Soundtracks[0].catagories && SoundtracksAppend === false){
                document.getElementById('category-Soundtracks').appendChild(card);
            }
        }
    }
    if(product === Pop[0].catagories && PopAppend === false){
       PopAppend = true;
    }else if(product === Rock[0].catagories && RockAppend === false){
        RockAppend = true;
    }else if(product === Ninetys[0].catagories && NinetysAppend === false){
        NinetysAppend = true;
    }else if(product === Soundtracks[0].catagories && SoundtracksAppend === false){
        SoundtracksAppend = true;
    }
}
// Product

function mySongFunction(Arr,num){
    let songDescription = document.getElementById('category-song-information');
    songDescription.style.display = "block";
    document.getElementById('song-content').remove();
    const newSongDescription = document.createElement('div');
    newSongDescription.setAttribute('id', 'song-content');
    let RNG = getRandomInt();
    if(RNG < 0.25){
        newSongDescription.classList.add('song-content-backgroundOne');
    }else if(RNG < 0.5){
        newSongDescription.classList.add('song-content-backgroundTwo');
    }else if(RNG < 0.75){
        newSongDescription.classList.add('song-content-backgroundThree');
    }else{
        newSongDescription.classList.add('song-content-backgroundFour');
    }
    //Symbol X
    const closeSymbol = document.createElement('span');
    closeSymbol.setAttribute('id', 'close');
    closeSymbol.innerHTML = '&times;';
    newSongDescription.appendChild(closeSymbol);
    //Song Name
    const songName = document.createElement('h4');
    songName.innerHTML =  Arr[num].discNumber + '. ' + Arr[num].name + ' - About:';
    songName.title = Arr[num].name;
    songName.classList.add("songName");
    newSongDescription.appendChild(songName);
    //Release
    const releaseDate = document.createElement('p');
    releaseDate.innerHTML = 'Released:';
    releaseDate.classList.add("released");
    newSongDescription.appendChild(releaseDate);

    const releaseDateAnswer = document.createElement('p');
    releaseDateAnswer.innerHTML = Arr[num].releaseDate;
    releaseDateAnswer.title = Arr[num].releaseDate;
    releaseDateAnswer.classList.add("releasedAnswer");
    newSongDescription.appendChild(releaseDateAnswer);
    
    //Artist
    const artistName = document.createElement('p');
    artistName.innerHTML = 'Artist:'
    artistName.classList.add("artist");
    newSongDescription.appendChild(artistName);

    const artistURL = document.createElement('a');
    artistURL.innerHTML = Arr[num].artist;
    artistURL.classList.add("artistAnswer");
    artistURL.title = Arr[num].artist;
    artistURL.href = Arr[num].artistUrl;
    artistURL.target= "_blank";
    newSongDescription.appendChild(artistURL);
    //length
    const songLength = document.createElement('p');
    songLength.innerHTML = 'Length:';
    songLength.classList.add("length");
    newSongDescription.appendChild(songLength);

    const songLengthAnswer = document.createElement('p');
    songLengthAnswer.innerHTML = Arr[num].length;
    songLengthAnswer.title = Arr[num].length;
    songLengthAnswer.classList.add("lengthAnswer");
    newSongDescription.appendChild(songLengthAnswer);
    //Genre
    const catagories = document.createElement('p');
    catagories.innerHTML = 'Genre:';
    catagories.classList.add("genre");
    newSongDescription.appendChild(catagories);

    const catagoriesAnswer = document.createElement('p');
    if(Arr[num].catagories === 'Ninetys'){
        catagoriesAnswer.innerHTML = '90\'s';
        catagoriesAnswer.title = '90\'s';
    }else{
        catagoriesAnswer.innerHTML = Arr[num].catagories;
        catagoriesAnswer.title = Arr[num].catagories;
    }
    catagoriesAnswer.classList.add("genreAnswer");
    newSongDescription.appendChild(catagoriesAnswer);
    //Rating
    const rating = document.createElement('p');
    rating.innerHTML = 'Rating:';
    rating.classList.add("rating");
    newSongDescription.appendChild(rating);

    const ratingAnswer = document.createElement('p');
    ratingAnswer.innerHTML = Arr[num].rating;
    ratingAnswer.title = 'Rating: ' + Arr[num].ratingNumber;
    ratingAnswer.classList.add("ratingAnswer");
    newSongDescription.appendChild(ratingAnswer);

    //stock
    const stock = document.createElement('p');
    stock.innerHTML = 'Stock:';
    stock.classList.add("stock");
    newSongDescription.appendChild(stock);

    const stockAnswer = document.createElement('p');
    
    stockAnswer.classList.add("stockAnswer");
    if(Arr[num].inStock){
        stockAnswer.style.color = "Green";
        stockAnswer.innerHTML = 'in stock';
        stockAnswer.title = 'in stock';
    }else{
        stockAnswer.style.color = "Red";
        stockAnswer.innerHTML = 'out of stock';
        stockAnswer.title = 'out of stock';
    }
    newSongDescription.appendChild(stockAnswer);

    //Price
    const price = document.createElement('p');
    price.innerHTML = 'Price:';
    price.classList.add("price");
    newSongDescription.appendChild(price);

    const priceAnswer = document.createElement('p');
    priceAnswer.innerHTML = '$ ' + Arr[num].price;
    priceAnswer.title = '$ ' + Arr[num].price;
    priceAnswer.classList.add("priceAnswer");
    newSongDescription.appendChild(priceAnswer);

    songDescription.appendChild(newSongDescription);

}

window.onclick = function(event) {
    let songDescription = document.getElementById('category-song-information');
    let songClose = document.getElementById("close");
    if (event.target == songDescription || event.target == songClose) {
        songDescription.style.display = "none";
    }
}

window.onkeydown = function(event){
    let songDescription = document.getElementById('category-song-information');
    if (event.key === "Escape") {
        songDescription.style.display = "none";
    }
}

const productBackground = document.querySelector("#category-Main");
productBackground.addEventListener("mousemove", (e) => {
    productBackground.style.backgroundPositionX = (-e.offsetX / 65) + "px";
});

