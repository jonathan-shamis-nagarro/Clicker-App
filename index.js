let countElement = document.getElementById("count-el");
let previousEntriesElement = document.getElementById("previous-entries");

let count = Number(localStorage.getItem("count")) || 0;
let previousEntries = localStorage.getItem("prevEntries") || "Previous Entries: ";

countElement.innerHTML = count;
previousEntriesElement.innerHTML = previousEntries;
document.title = "Clicker App";

function increment() {
    count++;
    countElement.innerHTML = count;
}

function save() {
    previousEntries += count + " - ";
    previousEntriesElement.innerHTML = previousEntries;
    localStorage.setItem("prevEntries", previousEntries);
    localStorage.setItem("count", count);
}

function reset() {
    localStorage.removeItem("count");
    localStorage.removeItem("prevEntries");

    count = 0;
    previousEntries = "Previous Entries: ";

    countElement.innerHTML = count;
    previousEntriesElement.innerHTML = previousEntries;
}
