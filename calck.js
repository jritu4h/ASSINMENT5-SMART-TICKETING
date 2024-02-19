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
    const grandTotalElement = document.getElementById("grandtotal")
    const seatPrice = 550; // Price per seat
    const maxSeats = 4; // Maximum number of seats that can be selected

    let selectedSeats = [];

    seats.forEach(seat => {
        seat.addEventListener("click", function() {
            const seatId = seat.textContent;
            if (selectedSeats.includes(seatId)) {
                //  the seat
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

            //  seat number
            seatNumberElement.textContent = selectedSeats.length;

            //  selected tickets
            selectedTicketsElement.innerHTML = "";
            selectedSeats.forEach(id => {
                const seatElement = document.createElement("div");
                seatElement.innerHTML = `<div><p>${id}</p></div>`;
                selectedTicketsElement.appendChild(seatElement);
            });

            // total price
            const totalPrice = selectedSeats.length * seatPrice;
            totalPriceElement.innerHTML = `<div><p>Total Price</p></div><div><p>BDT ${totalPrice}</p></div>`;
            //  grand price
            const grandTotal = selectedSeats.length * seatPrice;

            grandTotalElement.innerHTML =`<div><p>grand Total</p></div><div><p>BDT ${grandTotal}</p></div>`;

            //  remaining seats
            const remainingSeats = 40 - selectedSeats.length;
            allSeatsElement.textContent = `${remainingSeats} Seats left`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const grandTotalElement = document.getElementById("grandTotalAmount");
    const applyCouponButton = document.getElementById("applyCouponButton");

    //  calculate discounted price
    function calculateDiscountedPrice(basePrice, discountPercentage) {
        return basePrice * (1 - discountPercentage / 100);
    }

    //  applying coupon
    applyCouponButton.addEventListener("click", function () {
        const couponCode = document.getElementById("couponCodeInput").value.trim();

        // Check which coupon is applied 
        let discountedPrice;
        if (couponCode.toUpperCase() === "NEW 15") {
            discountedPrice = calculateDiscountedPrice(1100, 15);
        } else if (couponCode.toUpperCase() === "COUPLE 20") {
            discountedPrice = calculateDiscountedPrice(1100, 20);
        } else {
            alert("Invalid coupon code.");
            return;
        }

        //  grand total with discounted price
        grandTotalElement.textContent = `BDT ${discountedPrice.toFixed(2)}`;
    });
});

