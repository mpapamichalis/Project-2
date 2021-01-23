/* eslint-disable prefer-arrow-callback */
const newPat = document.getElementById("patadd-btn");


newPat.addEventListener("click", function() {
  console.log("new Patient added");
  
  $.ajax({url: "/api/newPatient", method: "POST", data: {patientName: "Tyler", bloodType: "AB", patientCon: "NA"}}).then(function(res) {
    window.reload();
  });
}); 
