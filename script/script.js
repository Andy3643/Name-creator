var button = document.getElementById("getname");
button.addEventListener("click",()=>{

    var dayofweek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var male = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        let dateOfBirth = document.getElementById("dob").value;
        let monthOfBirth = document.getElementById("mob").value;
        let yearOfBirth = document.getElementById("yob").value;
        let gender = document.getElementById("gender").value;
        var ourdate = new Date(yearOfBirth +'/'+monthOfBirth+'/'+dateOfBirth);
        var day = ourdate.getDay();

        var print = document.getElementById("results");
        

      if(gender=="Female"){
          print.style.display="block";
           print.innerHTML = "You were born on a "+ dayofweek[day]+"<br>"+"Your name is "+ female[day];
      }
      else  {
        print.style.display="block";
        print.innerHTML = "You were born on a "+ dayofweek[day]+"<br>"+"Your name is "+ male[day];
      }




  
})