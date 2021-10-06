//checking if a number is big

const biggerThanCheck = function(number) {
    if (input <= 100) {
        return false;
    }else {
        return true;
    };
};

const input= 167;
//const input = 89;

const uitslag = biggerThanCheck(input);
console.log (uitslag);

//this funtion produces something



//Brenda the bouncer Bot

const BBB = function(full, visitors, adult ){
    if (adult <18) {
        return "This is a club for adults"
    } else if (visitors < full){
        return "Come in"
    } else /*if (visitors => full)*/{
        return "It's too busy now come back later"
    }
};

const maxvisit1 = 100;
const numberofVisit1 = 45;
const age1 = 15;

const maxvisit2 = 100;
const numberofVisit2 = 100;
const age2 = 45;

const maxvisit3 = 100;
const numberofVisit3 = 80;
const age3 = 45;

const respons1 = BBB(maxvisit1, numberofVisit1, age1);
console.log (respons1);

const respons2 = BBB(maxvisit2, numberofVisit2, age2);
console.log (respons2);

const respons3 = BBB(maxvisit3, numberofVisit3, age3);
console.log (respons3);


//this function produces something


//calcutating avarage

const averageCalculator = function(nr1, nr2, nr3, nr4, nr5){
 const calculating = (nr1 + nr2 + nr3 + nr4 + nr5)/5
 return calculating
};

const a1 = 3;
const a2 = 5;
const a3 = 4;
const a4 = 5;
const a5 = 7;


const b1 = 7;
const b2 = 6;
const b3 = 4;
const b4 = 8;
const b5 = 8;

const c1 = 9;
const c2 = 8;
const c3 = 9;
const c4 = 9;
const c5 = 7;

const averageA = averageCalculator(a1, a2, a3, a4, a5);
console.log (averageA);
console.log (Math.round(averageA));

const averageB = averageCalculator(b1, b2, b3, b4, b5);
console.log (averageB);
console.log (Math.round(averageB));

const averageC = averageCalculator(c1, c2, c3, c4, c5);
console.log (averageC);
console.log (Math.round(averageC));

//this function produces somthing