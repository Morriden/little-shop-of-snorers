const stringyarray = localStorage.getItem('ARRAY');
let array = JSON.parse(stringyarray);

console.log(array);

//const stringyitem = localStorage.getItem('ITEM');
//let items = JSON.parse(stringyitem);
//console.log(stringyitem);

//const stringySeenItems = localStorage.getItem('SEENITEMS');
//const seenItems = JSON.parse(stringySeenItems);

//items.forEach((item) => {
//    incrementTimesPicked(item.id, votesArray);
//});
//
//seenItems.forEach((seenItem) => {
//    incrementTimesSeen(seenItem.id, votesArray);
//});