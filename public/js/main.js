/* eslint-disable prefer-arrow-callback */
$("#newPatientbtn").on("click", (event) => {
  event.preventDefault();
  console.log("new Patient added");
  const patNameInput = $("input#patientNameInput");
  const patBtInput = $("select#patBtInput");
  const patConInput = $("input#patientConInput");
  $.ajax({ url: "/api/newPatient", method: "POST", data: { patientName: patNameInput.val().trim(), bloodType: patBtInput.val().trim(), patientCon: patConInput.val().trim() } }).then(function () {
    window.reload();
  });
});
$("#newDonorbtn").on("click", (event) => {
  event.preventDefault();
  console.log("new Donor added");
  const donNameInput = $("#donNameInput");
  const donBtInput = $("#donBtInput");
  $.ajax({ url: "/api/newDonor", method: "POST", data: { donorName: donNameInput.val().trim(), bloodType: donBtInput.val().trim(), canDonate: true}}).then(function() {
    window.reload();
  });
});