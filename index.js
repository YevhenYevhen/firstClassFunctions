var passengers = [{ name: "Barack Obama", paid: true, ticket: "coach" },
{ name: "Dr. Evil", paid: true, ticket: "firstclass" },
{ name: "Madonna", paid: false, ticket: "firstclass" },
{ name: "John Doe", paid: true, ticket: "premium" },
{ name: "Queen Elizabeth", paid: false, ticket: "premium" },
{ name: "Adele", paid: false, ticket: "coach" }];



function processPassengers(passengers, testFunction) {
	for (var i = 0; i < passengers.length; i++) {
		if (testFunction(passengers[i])) {
			return false;
		}
	}
	return true;
}

function servePassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}


function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	var getDinnerOrderFunction = createDinnerOrder(passenger);
	getDrinkOrderFunction();
	getDinnerOrderFunction();
}

function createDrinkOrder(passenger) {
	var orderFunction;
	if (passenger.ticket === "firstclass") {
		orderFunction = function () {
			console.log("Would you like a coctail or wine?");
		};
	} else if (passenger.ticket === "premium") {
		orderFunction = function () {
			console.log("Coke, water or wine?");
		};
	} else {
		orderFunction = function () {
			console.log("Coke or water?");
		};
	}
	return orderFunction;
}

function createDinnerOrder(passenger) {
	var dinnerFunction;
	if (passenger.ticket === "firstclass") {
		dinnerFunction = function () {
			console.log("Chicken or pasta?");
		};
	} else if (passenger.ticket === "premium") {
		dinnerFunction = function () {
			console.log("Snack box or cheese plate?");
		};
	} else {
		dinnerFunction = function () {
			console.log("Peanuts or pretzels?")
		}
	}
	return dinnerFunction;
}

function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evil");
}

function checkNoPaid(passenger) {
	return (!passenger.paid);
}

function printPassenger(passenger) {
	var message = passenger.name;
	if (passenger.paid) {
		message += " has paid";
	} else {
		message += " has not paid";
	}
	console.log(message);
	return false;
}


var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNoPaid);
if (!allPaid) {
	console.log("The plane can't take off: not everyone has paid.");
}


processPassengers(passengers, printPassenger);
servePassengers(passengers);

