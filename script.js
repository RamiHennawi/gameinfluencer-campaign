function validStartDate() {
  var inputDate = document.getElementById("start-date").value;
  var todayDate = new Date();

  if (new Date(inputDate).getTime() < todayDate.getTime()) {
      alert("Starting date must be at least tomorrow");
      document.getElementById("start-date").value = '';
  }
}

function validEndDate() {
  var endDate = document.getElementById("end-date").value;
  var inputDate = document.getElementById("start-date").value;

  if (new Date(inputDate).getTime() > new Date(endDate).getTime()) {
      alert("Starting date must be before the ending date");
      document.getElementById("end-date").value = '';
      return false;
  }
  return true;
}

function validCampaignName() {
  var campaignName = document.getElementById("campaign-name").value;
  if(campaignName.length > 20){
    document.getElementById("validation-message").style.visibility = "visible";
    document.getElementById("validation-message").innerHTML = "Campaign name must consist of up to 20 characters.";
    return false;
  }
  return true;
}

function validCampaignDescription() {
  var campaignDescription = document.getElementById("campaign-description").value;
  if(campaignDescription.length > 200){
    document.getElementById("validation-message").style.visibility = "visible";
    document.getElementById("validation-message").innerHTML = "Campaign description must consist of up to 200 characters.";
    return false;
  }
  return true;
}

function addField(){
  if(document.getElementById("select-games").value == "other"){
    document.getElementById("other-option").style.display = "block";
 }
 else{
  document.getElementById("other-option").style.display = "none";
 } 
}

function validBudget(){
  var budget = document.getElementById("campaign-budget").value;
  if(parseInt(budget)> 10000 || parseInt(budget)<0){
    document.getElementById("validation-message").style.visibility = "visible";
    document.getElementById("validation-message").innerHTML = "Budget must not exceed 10000 USD.";
    return false;
  }
  return true;
}

function clearLabel(){
  var campaignName = document.getElementById("campaign-name").value;
  var campaignDescription = document.getElementById("campaign-description").value;
  var budget = document.getElementById("campaign-budget").value;
  if(campaignDescription.length <= 200 && campaignName.length <= 20 && parseInt(budget)<=10000 && parseInt(budget)>0){
    document.getElementById("validation-message").style.visibility = "hidden";
  }
}


let i=1;
function submitForm(){
  var campaignGame1;
  if(document.getElementById("select-games").value == "other"){
    campaignGame1 = document.getElementById("other-game").value;
  }else{
    campaignGame1 = document.querySelector("#select-games").value;
  }
  let Submission = {
    campaignName: document.getElementById("campaign-name").value,
    campaignDescription: document.getElementById("campaign-description").value,
    campaignGame: campaignGame1,
    campaignLanguage: document.querySelector("#language").value,
    campaignStartDate: document.getElementById("start-date").value,
    campaignEndDate: document.getElementById("end-date").value,
    campaignBudget: document.getElementById("campaign-budget").value,
    campaignCrypto: document.querySelector('input[name="crypto"]:checked').value
  };
  
  var paragraph = document.createElement("p");
  var containerSumbissions = document.getElementById("completed-forms");
  paragraph.innerHTML = "<b> Campaign </b>" + i + "<br />" + "name: " + Submission.campaignName +  "<br />" + 
  "description: " + Submission.campaignDescription +  "<br />" +
  "game: " + Submission.campaignGame + "<br />" + 
  "language: " + Submission.campaignLanguage + "<br />" +
  "start date: " + Submission.campaignStartDate + "<br />" +
  "end date: " + Submission.campaignEndDate +"<br />" +
  "budget: " + Submission.campaignBudget + "<br />" +
  "crypto: " + Submission.campaignCrypto + "<br />";
  containerSumbissions.appendChild(paragraph);
  i++;
  paragraph.style.marginRight = "10px";
  
  document.getElementById("form").reset();
  document.getElementById("other-option").style.display = "none";
}