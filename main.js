let raceNumber = Math.floor(Math.random() * 1000);

var didRegisterEarly = true;

let runnerAge = 27;

if(didRegisterEarly && runnerAge > 18) {
    raceNumber += 1000;
}

if(didRegisterEarly && runnerAge > 18) {
    console.log(`Your race time is at 9:30am! Your race number is ${raceNumber}`);
} else if(didRegisterEarly === false && runnerAge > 18) {
    console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
} else {
    console.log(`Your race time is 12:30 and your race number is ${raceNumber}`);
}
