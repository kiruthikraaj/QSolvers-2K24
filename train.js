class Train {
  constructor(name, travelTime, capacity, departureTime, arrivalTime, status) {
    this.name = name;
    this.travelTime = travelTime;
    this.capacity = capacity;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.status = status;
  }
  getTravelTime() {
    return this.travelTime;
  }

  getName() {
    return this.name;
  }

  getCapacity() {
    return this.capacity;
  }
}

class TrainFactory {
  createTrain(name, travelTime, capacity, departureTime, arrivalTime, status) {
    return new Train(
      name,
      travelTime,
      capacity,
      departureTime,
      arrivalTime,
      status
    );
  }
}

class RailwayStation {
  constructor(operatingTime) {
    this.trains = [];
    this.operatingTime = operatingTime;
    this.factory = new TrainFactory();
    this.track = new RailwayTrack();
    this.passengersTravelled = 0;
  }

  addTrain(name, travelTime, capacity, departureTime, arrivalTime, status) {
    this.trains.push(
      this.factory.createTrain(
        name,
        travelTime,
        capacity,
        departureTime,
        arrivalTime,
        status
      )
    );
  }

  getTrains() {
    return this.trains;
  }

  updateStatus(train, status) {
    train.status = status;
  }

  getArrivedTrains() {
    return this.trains.filter((train) => train.status === "1");
  }

  getDepartedTrains() {
    return this.trains.filter((train) => train.status === "2");
  }

  getNotDepartedTrains() {
    return this.trains.filter((train) => train.status === "0");
  }

  operateStation() {
    let continueOperating = true;
    while (continueOperating) {
      continueOperating = false;
      for (let train of this.trains) {
        if (
          train.status === "0" &&
          this.operatingTime >= train.getTravelTime()
        ) {
          this.track.addTrainToTrack(train);
          this.operatingTime -= train.getTravelTime();
          this.passengersTravelled += train.getCapacity();
          this.updateStatus(train, "2");
          continueOperating = true;
        } else if (
          train.status === "2" &&
          this.operatingTime >= train.getTravelTime()
        ) {
          this.operatingTime -= train.getTravelTime();
          this.passengersTravelled += train.getCapacity();
          this.updateStatus(train, "1");
          this.track.removeTrainFromTrack(train);
          continueOperating = true;
        }
      }
    }
  }

  getTrainStatus() {
    const arrivedTrains = this.getArrivedTrains();
    const departedTrains = this.getDepartedTrains();
    const notDepartedTrains = this.getNotDepartedTrains();

    if (arrivedTrains.length > 0) {
      arrivedTrains.forEach((train) => {
        console.log(`${train.getName()} has arrived`);
      });
    } else {
      console.log("No trains have arrived yet");
    }

    if (departedTrains.length > 0) {
      departedTrains.forEach((train) => {
        console.log(`${train.getName()} has departed but not arrived`);
      });
    } else if (departedTrains.length === 0 && arrivedTrains.length === 0) {
      console.log("No trains have departed yet");
    }

    if (notDepartedTrains.length > 0) {
      notDepartedTrains.forEach((train) => {
        console.log(`${train.getName()} has not departed yet`);
      });
    } else {
      console.log("All trains have departed");
    }
  }
}

class RailwayTrack {
  constructor() {
    this.trains = [];
  }

  addTrainToTrack(train) {
    this.trains.push(train);
    console.log(`Train ${train.name} added to track`);
  }

  removeTrainFromTrack(train) {
    this.trains = this.trains.filter((t) => t.name !== train.name);
    console.log(`Train ${train.name} removed from track`);
  }

  getOnTrackTrains() {
    this.trains.length > 0
      ? console.log("All trains on track")
      : console.log("No trains on track");
    return this.trains.map((train) => train);
  }
}

// Usage
let railwayStation = new RailwayStation(6);

let trains = [
  {
    name: "A",
    travelTime: 1.5,
    capacity: 100,
    departureTime: "10:00",
    arrivalTime: "12:00",
    status: "0",
  },
  {
    name: "B",
    travelTime: 0.5,
    capacity: 200,
    departureTime: "12:00",
    arrivalTime: "13:00",
    status: "0",
  },
  {
    name: "C",
    travelTime: 0.75,
    capacity: 300,
    departureTime: "13:00",
    arrivalTime: "13:45",
    status: "0",
  },
];

trains.forEach((train) => {
  railwayStation.addTrain(
    train.name,
    train.travelTime,
    train.capacity,
    train.departureTime,
    train.arrivalTime,
    train.status
  );
});

railwayStation.operateStation();

railwayStation.getTrainStatus();

console.log(`Extra time: ${railwayStation.operatingTime * 60} minutes`);

console.log(
  `Total passengers travelled: ${railwayStation.passengersTravelled}`
);
