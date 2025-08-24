// JavaScript for dynamic seat generation and booking toggle

// Seat Rows & Columns
const rows = ['A', 'B', 'C', 'D', 'E'];
const cols = 5;

const seatContainer = document.getElementById('seatContainer');

// Generate seats dynamically
rows.forEach(row => {
  for (let i = 1; i <= cols; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat'); // default = available (green)
    seat.innerText = row + i;

    // Toggle booked/available on click
    seat.addEventListener('click', () => {
      seat.classList.toggle('booked');
    });

    seatContainer.appendChild(seat);
  }
});
