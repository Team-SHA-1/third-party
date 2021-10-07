const button  = document.getElementById("verifyCanfirm");
const url = "http://localhost:3000/signin"
const childWindow = "";



const openWindow = () => {
    console.log("hey")
    childWindow = window.open(
      url,
      "childWindow",
      "width=1920,height=1080"
    );
  };

const call = () =>
{
    window.location.href = 'afterVerification.html';
}


button.addEventListener("click", openWindow);

window.addEventListener("message", function (e) {
    if (e.origin !== "http://localhost:3000") return;
   //setRecievedMessage("Got this message from parent: " + e.data);
    localStorage.setItem("data", e.data);

        setTimeout(call,500);
  });