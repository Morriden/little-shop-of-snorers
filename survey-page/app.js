import { getRandomItem } from '../utils/getRandomItem.js';
import { noveltyItems } from '../novelty-items.js';

const itemImages = document.querySelectorAll('img');
const itemRadios = document.querySelectorAll('input');

let endResults = () => {
    noveltyItemSelected = showNewSelection.checked;
} 


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
            itemRadio.value = randomItemOne.name;
        } else if (i === 1) {
            itemRadio.value = randomItemTwo.id;
        } else {
            itemRadio.value = randomItemThree.id;
        }
        console.log(itemRadio.value)
    });


};

document.querySelector('button').addEventListener('click', showNewSelection);

