function toggleCheckboxCheckedAttribute(checkbox) {
    if (checkbox.checked) {
      checkbox.setAttribute("checked", "checked");
    } else {
      checkbox.removeAttribute("checked");
    }
}
var Male = document.getElementById('Male')
var Female = document.getElementById('Female')
var Urologist = document.getElementById('Urologist')
var Neurologist = document.getElementById('Neurologist')
var Dentist = document.getElementById('Dentist')
var Cardiologist = document.getElementById('Cardiologist')
var Psychiatrist = document.getElementById('Psychiatrist')

document.addEventListener('DOMContentLoaded',function(){
  Male.firstElementChild.setAttribute("checked", "checked");
  var divElements = document.querySelectorAll('div[gender="Male"]');
  divElements.forEach(function (ele) {
    ele.style.display = "block";
  });
})

function handleCheckboxChange(checkbox, attribute, value) {
  checkbox.addEventListener('change', function () {
    var divElements = document.querySelectorAll(`div[${attribute}="${value}"]`);
    if (this.firstElementChild.checked) {
      divElements.forEach(function (ele) {
        ele.style.display = "block";
      });
    } else {
      divElements.forEach(function (ele) {
        ele.style.display = "none";
      });
    }
  });
}

handleCheckboxChange(Male, 'gender', 'Male');
handleCheckboxChange(Female, 'gender', 'Female');

handleCheckboxChange(Urologist, 'speciality', 'Urologist');
handleCheckboxChange(Neurologist, 'speciality', 'Neurologist');
handleCheckboxChange(Dentist, 'speciality', 'Dentist');
handleCheckboxChange(Cardiologist, 'speciality', 'Cardiologist');
handleCheckboxChange(Psychiatrist, 'speciality', 'Psychiatrist');