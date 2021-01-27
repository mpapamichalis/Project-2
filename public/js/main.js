/* eslint-disable prefer-arrow-callback */
const newPat = document.getElementById("patadd-btn");
// const newDon = document.getElementById("adddonor-btn");

newPat.addEventListener("click", function() {
  console.log("new Patient added");
  
  $.ajax({url: "/api/newPatient", method: "POST", data: {patientName: "Tyler", bloodType: "AB", patientCon: "NA"}}).then(function() {
    window.reload();
  });

}); 

$("#adddonor-btn").on("click", function(event) {
  event.preventDefault();
  console.log("new Donor added");
    
  $.ajax({url: "/api/newDonor", method: "POST", data: {donorName: "Steven Douglas", bloodType: "O-", canDonate: true}}).then(function() {
    window.reload();
  });
}); 
  
