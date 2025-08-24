// Fetch all seats from backend
function loadSeats() {
  fetch("http://localhost:3000/seats")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(seat => {
        let statusClass = seat.status === "booked" ? "booked" : "available";
        html += `<button class="${statusClass}" onclick="bookSeat(${seat.id})">${seat.seat_number}</button>`;
      });
      document.getElementById("seat-map").innerHTML = html;
    });
}

// Book a seat
function bookSeat(id) {
  fetch(`http://localhost:3000/book/${id}`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      loadSeats(); // refresh seat map after booking
    });
}

// Initial load
loadSeats();
