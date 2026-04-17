//Write your code here

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  if (attendee && typeof attendee.ticketPrice === "number") {
    console.log(attendee.ticketPrice);
  } else {
    console.log("Invalid attendee object or ticketPrice not found.");
  }
}

function updateTicketType(attendee, newTicketType) {
  if (typeof newTicketType === "string" && newTicketType.trim() !== "") {
    attendee.ticketType = newTicketType;
  } else {
    console.log("Invalid ticket type provided.");
  }
}

function updateTicketPrice(attendee, newPrice) {
  if (typeof newPrice === "number" && newPrice >= 0) {
    attendee.ticketPrice = newPrice;
  } else {
    console.log("Invalid price provided.");
  }
}

function removeEventProperty(attendee) {
  delete attendee.event;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
