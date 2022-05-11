$(document).ready(function () 
    {
        getData();
    });
    
function getData() 
{
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#name").text(studentObj.name);
    $("#age").text(studentObj.age);
    $("#mob_no").text(studentObj.mob_no);
    $("#email").text(studentObj.email);
    $("#age").text(studentObj.age);
    $("#gender").text(studentObj.gender);
    $("#bdate").text(studentObj.bdate);
    $("#city").text(studentObj.city);
    $("#state").text(studentObj.state);
}