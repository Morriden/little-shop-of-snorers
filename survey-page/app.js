import { getRandomItem, incrementTimesPicked, incrementTimesSeen, } from '../utils/utls.js';
import { noveltyItems } from '../novelty-items.js';
//send this array into local storage


const itemImages = document.querySelectorAll('img');
const itemRadios = document.querySelectorAll('input'); 
    
// const idTags = document.querySelectorAll('id');
const votesArray = [];
let totalChoices = 0;

    
const showNewSelection = () => {
    let randomItemOne = getRandomItem(noveltyItems);
    let randomItemTwo = getRandomItem(noveltyItems);
    let randomItemThree = getRandomItem(noveltyItems);
    
    while (randomItemOne.id === randomItemTwo.id || randomItemOne.id === randomItemThree.id || randomItemTwo.id === randomItemThree.id) {
        randomItemTwo = getRandomItem(noveltyItems);
        randomItemThree = getRandomItem(noveltyItems);
    }

    itemImages.forEach((itemImage, i) => {
        if (i === 0) {
            itemImage.src = randomItemOne.image;
        } else if (i === 1) {
            itemImage.src = randomItemTwo.image;
        } else {
            itemImage.src = randomItemThree.image;
        }
    });

    itemRadios.forEach((itemRadio, i) => {
        if (i === 0) {
            itemRadio.value = randomItemOne.id;
        } else if (i === 1) {
            itemRadio.value = randomItemTwo.id;
        } else {
            itemRadio.value = randomItemThree.id;
        }
    });

    

    const selectedItem = document.querySelector('input:checked');
    const value = selectedItem.value;
    incrementTimesPicked(value, votesArray);

    const seenItems = document.querySelectorAll('input');
    seenItems.forEach((item) => {
        incrementTimesSeen(item.value, votesArray);
        console.log(votesArray);
    });
    //const seenItems = document.querySelectorAll('img');
    //console.log(seenItems);

    if (totalChoices < 24) {
        totalChoices++;
    } else {
        localStorage.setItem('ARRAY', JSON.stringify(votesArray));
        window.location.href = '../results-page/results.html';
        
    }
};


document.querySelector('button').addEventListener('click', showNewSelection);

// Bring three new images that dont duplicate
// send to votes array, which images shown and picked.

//showNewSelection(); 