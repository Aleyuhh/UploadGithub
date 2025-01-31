document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/PLyB0b3V88w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJJh5Wm__c9laZEKK5fSI5UGw-hA')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

function toggleBlur() {
    const container = document.querySelector('.container');
    if (container.style.filter === "blur(5px)") {
        container.style.filter = "none";
    } else {
        container.style.filter = "blur(5px)";
    }
}

