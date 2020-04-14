import { noveltyItems } from '../novelty-items.js';

export function getRandomItem() {
    const randomItemId = Math.floor(Math.random() * noveltyItems.length);

    return noveltyItems[randomItemId];
}







