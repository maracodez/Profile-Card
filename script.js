// Function to update UTC time every second
function updateUTCTime() {
    const utcTimeElement = document.querySelector(".utc-time");

    function refreshTime() {
        const now = new Date();
        utcTimeElement.textContent = "UTC Time: " + now.toUTCString();
    }

    // Update immediately when the page loads
    refreshTime();

    // Set an interval to update the time every second
    setInterval(refreshTime, 1000);
}

// Call the function when the page loads
updateUTCTime();
