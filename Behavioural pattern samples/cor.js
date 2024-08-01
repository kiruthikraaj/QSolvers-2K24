// It helps multiple handlers to process a request without the end-user knowing which handler is handling the request.

// Requests can be handled and sent to the handlers suitable for the request handler dynamically.

class Handler {
  constructor(handler = null) {
    this.handler = handler;
  }

  handleRequest(request) {
    if (this.handler) {
      this.handler.handleRequest(request);
    }
  }
}

class TVHandler extends Handler {
  handleRequest(request) {
    if (request === "TV") {
      console.log("Request handled by Tv handler");
    } else {
      super.handleRequest(request);
    }
  }
}

class CarHandler extends Handler {
  handleRequest(request) {
    if (request === "car") {
      console.log("Request handled by Car handler");
    } else {
      super.handleRequest(request);
    }
  }
}

class PhoneHandler extends Handler {
  handleRequest(request) {
    if (request === "phone") {
      console.log("Request handled by Phone handler");
    } else {
      super.handleRequest(request);
    }
  }
}

let phonehandler = new PhoneHandler();
let carHandler = new CarHandler(phonehandler);

let tvHandler = new TVHandler(carHandler);

tvHandler.handleRequest("car");
