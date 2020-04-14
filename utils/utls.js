import { noveltyItems } from '../novelty-items.js';

export function getRandomItem() {
    const randomItemId = Math.floor(Math.random() * noveltyItems.length);

    return noveltyItems[randomItemId];
}



export function findById(id, noveltyItems) {

    for (let i = 0; i < noveltyItems.length; i++) {
        const item = noveltyItems[i];

        if (item.id === id) {
            return item;
        }
    }
}

export function incrementTimesSeen(id, votesArray) {
    let temp = findById(id, votesArray);
    if (!temp) {
        addInitialVoteItem(id, votesArray);
        temp = findById(id, votesArray);
    }
    temp.timesSeen++;
}

export function incrementTimesPicked(id, votesArray) {
    let temp = findById(id, votesArray);
    if (!temp) {
        addInitialVoteItem(id, votesArray);
        temp = findById(id, votesArray);
    }
    temp.timesPicked++;
}

export function addInitialVoteItem(id, votesArray) {
    const voteItem = {
        id: id,
        timesSeen: 0,
        timesPicked: 0
    };
    votesArray.push(voteItem);
}







