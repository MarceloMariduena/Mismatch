function toggleSwitch() {
    let topNav = document.getElementById("topNav");
    if (topNav.className === "topnav") {
      topNav.className += " responsive";
    } else {
      topNav.className = "topnav";
    }
}