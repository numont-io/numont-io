var appName = "Numont";
var date = "2021-08-04";

function onIndexLoad() {
  window.location.replace("http://numont.io");
}

function onPolicyLoad() {
  document.title = appName + " " + "Privacy Policy";
  getData();
}

function onTermLoad() {
  document.getElementById("appName2").innerHTML = appName;
  document.title = appName + " " + "Terms and Conditions";
  getData();
}

function getData() {
  document.getElementById("appName").innerHTML = appName;
  document.getElementById("date").innerHTML = date;
}
