document.getElementById('buy_tickets_btn').addEventListener('click', function () {
    const phParibahanSection = document.getElementById('ph_paribahan');
    phParibahanSection.scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll(".kbd");
    const seatNumberElement = document.getElementById("seatnumber");
    const selectedTicketsElement = document.getElementById("selectedtickets");
    const allSeatsElement = document.getElementById("allseat");
    const totalPriceElement = document.getElementById("totalpeice");
    const seatPrice = 550; // Price per seat
    const maxSeats = 4; // Maximum number of seats that can be selected

    let selectedSeats = [];

    seats.forEach(seat => {
        seat.addEventListener("click", function() {
            const seatId = seat.textContent;
            if (selectedSeats.includes(seatId)) {
                // Deselect the seat
                selectedSeats = selectedSeats.filter(id => id !== seatId);
                seat.classList.remove("kbd-selected");
            } else {
                // Select the seat
                if (selectedSeats.length < maxSeats) {
                    selectedSeats.push(seatId);
                    seat.classList.add("kbd-selected");
                } else {
                    alert("You can only select up to 4 seats.");
                }
            }

            // Update seat number
            seatNumberElement.textContent = selectedSeats.length;

            // Update selected tickets
            selectedTicketsElement.innerHTML = "";
            selectedSeats.forEach(id => {
                const seatElement = document.createElement("div");
                seatElement.innerHTML = `<div><p>${id}</p></div>`;
                selectedTicketsElement.appendChild(seatElement);
            });

            // Update total price
            const totalPrice = selectedSeats.length * seatPrice;
            totalPriceElement.innerHTML = `<div><p>Total Price</p></div><div><p>BDT ${totalPrice}</p></div>`;

            // Update remaining seats
            const remainingSeats = 40 - selectedSeats.length;
            allSeatsElement.textContent = `${remainingSeats} Seats left`;
        });
    });
});
