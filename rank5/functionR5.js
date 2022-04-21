let dice = [3, 3, 3, 3, 2]
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let score = 0
for (let i = 0; i < dice.length; i++) {
    switch (dice[i]) {
        case 1:
            count1++;
            break;
        case 2:
            count2++;
            break;
        case 3:
            count3++;
            break;
        case 4:
            count4++;
            break;
        case 5:
            count5++;
            break;
        case 6:
            count6++;
            break;
    }
}

switch (count1) {
    case 0:
        score += 0;
        break;
    case 1:
        score += 100;
        break;
    case 2:
        score += 200;
        break;
    case 3:
        score += 1000;
        break;
    case 4:
        score += 1100;
        break;
    case 5:
        score += 1200;
        break;

}
switch (count5) {

    case 1:
        score += 50;
        break;
    case 2:
        score += 100;
        break;
    case 3:
        score += 500;
        break;
    case 4:
        score += 550;
        break;
    case 5:
        cscore += 600;
        break;

}
switch (3) {

    case count2:
        score += 200;
        break;
    case count3:
        score += 300;
        break;
    case count4:
        score += 400;
        break;
    case count6:
        score += 600;
        break;

}
switch (4) {
    case count2:
        score += 300;
        break;
    case count3:
        score += 300;
        break;
    case count4:
        score += 400;
        break;
    case count6:
        score += 600;
        break;
}
switch (5) {
    case count2:
        score += 300;
        break;
    case count3:
        score += 300;
        break;
    case count4:
        score += 400;
        break;
    case count6:
        score += 600;
        break;
}
console.log(score)