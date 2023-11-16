let seatIndex = 0;
let selectedSeatCount = 0;
const selectedSeats = [];

function addToLocalStorage() {
    selectedSeats.sort();
    console.log(selectedSeats);
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
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
        selectedSeatCount++;
        // console.log(buttonStateArray[seatIndex]);
        if (selectedSeats.find((arrayEntry) => arrayEntry === seatIndex) === seatIndex) {
            console.log("index of value: "+selectedSeats.indexOf(seatIndex));
            selectedSeats.splice(selectedSeats.indexOf(seatIndex),1);
            selectedSeat.style.backgroundColor = "white";
        } else {
            selectedSeat.style.backgroundColor = "blue";
            selectedSeats.push(seatIndex);
        }
        addToLocalStorage();
    }


}    
