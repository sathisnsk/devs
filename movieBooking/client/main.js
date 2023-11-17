let seatIndex = 0;
//let selectedSeatCount = 0;
let selectedSeats = [];
const moviesAndRates = [{ movieName: "Jailer", rate: 150 }, { movieName: "Leo", rate: 200 }, { movieName: "Thunivu", rate: 250 }];
let selectedMovie;
let selectedMovieRate;

function buildMoviesAndRates() {
    moviesAndRates.forEach((movieAndRate) => {
        console.log(movieAndRate.movieName + movieAndRate.rate);
        const { movieName, rate } = movieAndRate;
        console.log({ movieName, rate });
        const selectOption = document.querySelector("#movies");
        const optionEntry = document.createElement("option");
        optionEntry.value = movieName;
        optionEntry.textContent = `${movieName} (Rs.${rate})`;
        selectOption.appendChild(optionEntry);
        selectOption.addEventListener("change", changeSelectedMovieAndRate);
    });
}

buildMoviesAndRates();

function loadSelectedSeatsAndMovie() {
    getFromLocalStorage();
    const selectOption = document.getElementById("movies");
    selectOption.value = selectedMovie;
    selectedSeats.forEach((selectedSeat) => {
        const seatSelected = document.getElementById("seat-" + selectedSeat);
        console.log(seatSelected);
        seatSelected.style.backgroundColor = "blue";
    });
    buildSummaryValues();
}

function getFromLocalStorage() {
    selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    selectedMovieRate = localStorage.getItem("selectedRate");
    selectedMovie = localStorage.getItem("selectedMovie");

}

function addSeatsToLocalStorage() {
    selectedSeats.sort();
    console.log(selectedSeats);
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}

function addMovieAndRateToLocalStorage() {
   localStorage.setItem("selectedMovie",selectedMovie);
   localStorage.setItem("selectedRate",selectedMovieRate);
}


function createSeats(columnName, numberOfSeats) {
    const seatTemplate = document.getElementById("seat-template");
    const seatSection = document.querySelector(`.${columnName}`);
    //document.body.appendChild(clone); 

    for (let index = 0; index < numberOfSeats; index++) {
        const clone = seatTemplate.content.cloneNode(true);
        const seatButton = clone.querySelector(".seat-btn");
        seatButton.id = "seat-" + seatIndex;
        seatSection.appendChild(seatButton);
        seatButton.addEventListener("click", seatSelected(seatButton.id, seatIndex));
        seatIndex++;
    }

}

createSeats("left-columns", 12);
createSeats("center-columns", 28);
createSeats("right-columns", 12);

function seatSelected(seatId, seatIndex) {
    return function () {
        const selectedSeat = document.getElementById(seatId);
        console.log("type of seat Index: " + typeof (seatIndex) + "value: " + seatIndex);
        selectedSeats.forEach((arrayEntry) => {
            console.log("type of array value: " + typeof (arrayEntry) + "value: " + arrayEntry);
            console.log(arrayEntry === seatIndex);
        }
        );
        console.log(selectedSeats.find((arrayEntry) => arrayEntry === seatIndex));

        console.log(selectedSeats);
        // selectedSeatCount++;
        // console.log(buttonStateArray[seatIndex]);
        if (selectedSeats.find((arrayEntry) => arrayEntry === seatIndex) === seatIndex) {
            console.log("index of value: " + selectedSeats.indexOf(seatIndex));
            selectedSeats.splice(selectedSeats.indexOf(seatIndex), 1);
            selectedSeat.style.backgroundColor = "white";
        } else {
            selectedSeat.style.backgroundColor = "blue";
            selectedSeats.push(seatIndex);
        }
        addSeatsToLocalStorage();
        buildSummaryValues();
    }
}

loadSelectedSeatsAndMovie();



function buildSummaryValues() {

    const noOfSeats = document.getElementById("no-of-seats");
    noOfSeats.textContent = selectedSeats.length;
    /*     const selectValue = document.getElementById("movies");
        selectValue.value */
    let totalValue = selectedSeats.length * selectedMovieRate;
    const totalPrice = document.getElementById("total-price");
    totalPrice.textContent = totalValue;
}


function changeSelectedMovieAndRate() {
    const selectValue = document.getElementById("movies");
    selectedMovie = selectValue.value;
    const selectedMovieAndRate = moviesAndRates.find((movieAndRate) => {
        const { movieName, rate } = movieAndRate;
        return (movieName === selectedMovie)
    });
    selectedMovieRate = selectedMovieAndRate.rate;
    addMovieAndRateToLocalStorage();
    buildSummaryValues();
}