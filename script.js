let customertform = document.getElementById("customerform");

function genearetUniqueID(){
  let randomnum = Math.floor(Math.random()*1000000)
  return randomnum
}


customertform.addEventListener("submit", (e) => {
  // e.preventDefault();
  let uniqueid = Math.random().toString(16).slice(2);
  let name = document.getElementById("name").value;
  let order = document.getElementById("order").value;
  let quantity = document.getElementById("quantity").value;
  let date = document.getElementById("date").value;

  var existingData = JSON.parse(localStorage.getItem("customerData")) || [];


  let formData = {
    uniqueid:uniqueid,
    name: name,
    order: order,
    quantity: quantity,
    date: date,
  };
  existingData.push(formData)

  let formDataJson = JSON.stringify(existingData);
  localStorage.setItem("customerData", formDataJson);

  alert("Data saved successfully");
});


//console.log(cname)


function loadData(){
    var formDataJSON = localStorage.getItem("customerData");


    var formData = JSON.parse(formDataJSON);
    console.log(formData)
}

loadData()