class RailwayTrack {
    constructor(Tnumber, departure, arrival, distance, noOfPassengers, journey) {
        this.Tnumber = Tnumber;
        this.departure = departure;
        this.arrival = arrival;
        this.distance = distance;
        this.noOfPassengers = noOfPassengers;
        this.journey = journey;
    }

    roundTripTime() {
        let rtt = Math.abs(2 * (this.departure - this.arrival));
        return rtt;
    }
}

let totTime = 10;

let train1 = new RailwayTrack('T1', 6.00, 7.00, 65, 2000, "Arrival");
let train2 = new RailwayTrack('T2', 8.00, 9.00, 35, 3000, "Arrival");
let train3 = new RailwayTrack('T3', 10.00, 12.00, 85, 2800, "Arrival");

let trains = [train1, train2, train3];

function eachTrainRTT() {
    let t1 = train1.roundTripTime();
    let t2 = train2.roundTripTime();
    let t3 = train3.roundTripTime();

    console.log("Total Round Trip Time for Each Train:\n Train (T1):", t1, "hours\n Train (T2):", t2, "hours\n Train (T3):", t3, "hours");
}

function eachTrainCompleteTrip() {
    let t1 = train1.roundTripTime();
    let t2 = train2.roundTripTime();
    let t3 = train3.roundTripTime();

    let t1Complete = totTime / t1;
    let t2Complete = totTime / t2;
    let t3Complete = totTime / t3;

    if (t1Complete >= 1) {
        console.log("Train 1 alone can complete", Math.floor(t1Complete), "trips\n");
    }

    if (t2Complete >= 1) {
        console.log("Train 2 alone can complete", Math.floor(t2Complete), "trips\n");
    }

    if (t3Complete >= 1) {
        console.log("Train 3 alone can complete", Math.floor(t3Complete), "trips\n");
    }
}

function OverallTrips() {
    let totalTrips = { 'T1': 0, 'T2': 0, 'T3': 0 };
    let remainingTime = totTime;
    let currentIndex = 0;

    while (remainingTime > 0) {
        let train = trains[currentIndex];
        let roundTripTime = train.roundTripTime();

        if (remainingTime >= roundTripTime) {
            totalTrips[train.Tnumber]++;
            remainingTime -= roundTripTime;
        } else {
            totalTrips[train.Tnumber] = "PENDING - N/A";
            break;
        }

        currentIndex = (currentIndex + 1) % trains.length;
    }

    console.log("Complete trips each train makes:");
    for (let train of trains) {
        console.log(`Train (${train.Tnumber}): ${totalTrips[train.Tnumber]}`);
    }
}


console.log("RAILWAY TRACK TIMER\n");

console.log("\n1. Available Trains\n\n");

console.log(train1, "\n", train2, "\n", train3);

console.log("\n\n2. Each Train Round Trip Time\n\n");
eachTrainRTT();

console.log("\n\n3. Individual Train Trip possibility (any1 only possible)\n\n");
eachTrainCompleteTrip();

console.log("\n\n4. Overall Complete Trips within Time range\n\n");
OverallTrips();
