const bookedSeats = document.querySelector('.booked-seats')
const remainingSeats = document.querySelector('.remaining-seats')
const seats = document.querySelectorAll('.seat')


function getTotalSeats() {
    return seats.length
}

if (!bookedSeats.innerHTML) 
    bookedSeats.innerHTML = '0'

if (!remainingSeats.innerHTML) 
    remainingSeats.innerHTML = getTotalSeats().toString()

seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        if (seat.isBooked === undefined) {
            seat.isBooked = false
        }

        let toBeBookedSeats = parseInt(bookedSeats.innerHTML)
        let toBeRemainingSeats = parseInt(remainingSeats.innerHTML)

        if (seat.isBooked) {
            toBeBookedSeats -= 1
            toBeRemainingSeats += 1
        } else {
            toBeBookedSeats += 1
            toBeRemainingSeats -= 1
        }

        bookedSeats.innerHTML = toBeBookedSeats.toString()
        remainingSeats.innerHTML = toBeRemainingSeats.toString()

        seat.classList.toggle('booked')
        seat.isBooked = !seat.isBooked
    })
})