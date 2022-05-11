$(document).ready(function () 
{
    $("#btn").click(function () 
    {
        //validating the data
        function isValid()
        {
            getStudentData();
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }


        //collect student data from student form
        function getStudentData() 
        {
            let student = {
            
            name: $("#name").val(),
            age: $("#age").val(),
            mob_no: $("#mob_no").val(),
            email: $("#email").val(),
            gender: $("input[name='gender']:checked").val(),
            bdate: $("#bdate").val(),
            city: $("#city").val(),
            state: $("#state").val(),
            
            } 
            $("#studentForm")[0].reset();
            
            return student; 
        }

        function isEmpty()
        {
            getStudentData();
            if(name===null)
            {
                alert("Name cannot be empty..!");
            }
        }

        //store student data to localStorage

        function storeDataToLocalStorage() 
        {
            if (!localStorage.getItem("student")) 
            {
                localStorage.setItem("student",JSON.stringify(getStudentData()));
            } 
            else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            }
        }

        //send data to server with AJAX request
        function sendData() 
        {
            let xhr = new XMLHttpRequest();
            let data = JSON.stringify(getStudentData());
            xhr.open("POST", "http://localhost:4000/storedata",true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data);
        }

        //call storeDataToLocalStorage and sendData functions
        storeDataToLocalStorage();
        sendData();
        window.location.href="display-data.html";
    });
});

function Clear()
{
    localStorage.clear();
}