document.getElementById('buy_tickets_btn').addEventListener('click', function () {
    const phParibahanSection = document.getElementById('ph_paribahan');
    phParibahanSection.scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll('.kbd');
    const seatNumberDisplay = document.getElementById('seatnumber');
    const totalSeatsDisplay = document.getElementById('allseat');
    const totalPriceDisplay = document.getElementById('totalpeice').getElementsByTagName('p')[1];
    
    let selectedSeats = [];
    
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            if (selectedSeats.length < 4 || selectedSeats.includes(seat)) {
                if (!selectedSeats.includes(seat)) {
                    seat.classList.add('kbd-selected');
                    selectedSeats.push(seat);
                } else {
                    seat.classList.remove('kbd-selected');
                    selectedSeats = selectedSeats.filter(selectedSeat => selectedSeat !== seat);
                }
                
                // Update seat number display
                const seatNumbers = selectedSeats.map(selectedSeat => selectedSeat.textContent).join(', ');
                seatNumberDisplay.textContent = seatNumbers;
                
                // Update total seats display
                const seatsLeft = 40 - selectedSeats.length;
                totalSeatsDisplay.textContent = seatsLeft + " Seats left";
                
                // Update total price display
                const totalPrice = selectedSeats.length * 550;
                totalPriceDisplay.textContent = "BDT " + totalPrice;
            }
        });
    });
});

