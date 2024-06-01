function handleMessage() {
    const userInput = document.getElementById("maintag").value;
    if (userInput.toLowerCase().includes("ticket reissue")) {
        alert("The message is "+userInput);
    }
    else{
        alert("The message ticket reissue not found");
    }
}
