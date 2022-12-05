let PopAppend = false;
let RockAppend = false;
let NinetysAppend = false;
let SoundtracksAppend = false;

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