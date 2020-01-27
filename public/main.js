function toggleSwitch() {
    let topNav = document.getElementById("topNav");
    if (topNav.className === "topnav") {
      topNav.className += " responsive";
      alert("responsive added");
    } else {
      topNav.className = "topnav";
      alert("responsive removed");
    }
}