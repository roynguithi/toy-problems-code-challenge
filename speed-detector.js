function calculatePoints(speed) {
    const speedLimit = 70;
    let Points = 0;
    
//condition to test true or false
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        Points = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${Points}`);
    }

    if (Points > 12) {
        console.log("License suspended");
    }
}
//Output for speed recorded
let speed = 0;
//calling a function "calculate points"
calculatePoints(speed);