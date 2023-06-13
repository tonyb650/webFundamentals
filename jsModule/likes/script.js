console.log("page loaded...");
let feedEntryCount = 3;
let likeCount = [];
for (let i=0; i <feedEntryCount; i++){
    likeCount.push(0);
    // console.log(likeCount);
}

let likeCountDisplay = [];
likeCountDisplay.push(document.querySelector("#feedOneLikes"));
// console.log(likeCountDisplay[0]);
likeCountDisplay.push(document.querySelector("#feedTwoLikes"));
// console.log(likeCountDisplay[1]);
likeCountDisplay.push(document.querySelector("#feedThreeLikes"));
// console.log(likeCountDisplay[2]);

function like0(element) {
    // console.log(element);
    let index = 0;
    likeCount[index]++;
    if (likeCount[index] == 1) {
        likeCountDisplay[index].innerText = likeCount[index] + " like";
    } else {
        likeCountDisplay[index].innerText = likeCount[index] + " likes";
    }
}

function like1(element) {
    // console.log(element);
    let index = 1;
    likeCount[index]++;
    if (likeCount[index] == 1) {
        likeCountDisplay[index].innerText = likeCount[index] + " like";
    } else {
        likeCountDisplay[index].innerText = likeCount[index] + " likes";
    }
}
function like2(element) {
    // console.log(element);
    let index = 2;
    likeCount[index]++;
    if (likeCount[index] == 1) {
        likeCountDisplay[index].innerText = likeCount[index] + " like";
    } else {
        likeCountDisplay[index].innerText = likeCount[index] + " likes";
    }
}