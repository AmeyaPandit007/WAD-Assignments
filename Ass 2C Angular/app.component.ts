import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signup_form: boolean = true;
  login_form:boolean = false;
  display_form:boolean = false;

  title = 'Angular Practice';

  reg_value : Array<String> = [];
  log_value : Array<String> = [];

  getValues(val : any)
  {
    console.log(val);
    this.reg_value.push(val.fname);
    this.reg_value.push(val.lname);
    this.reg_value.push(val.email);
    this.reg_value.push(val.mb);
    this.reg_value.push(val.age);
    this.reg_value.push(val.pass);
    this.reg_value.push(val.rpass);

    if(this.reg_value[5] === this.reg_value[6])
    {
      window.alert("Registration Successfull..!");
    }
    else {
      window.alert("Re-entered Password should be same as the previous password.");
      this.reg_value = [];
    }
    
  }
  toggleForm()
  {
    if(this.reg_value.length === 0)
    {
      window.alert("Please Register before Login..!");
    }
    else {
      this.login_form = !this.login_form;
      this.signup_form = !this.signup_form;
    }
  }
  getValues_login(val:any)
  {
    this.log_value.push(val.username);
    this.log_value.push(val.password);
    console.log(this.log_value);

    if((this.log_value[0] === this.reg_value[0]) && (this.log_value[1] === this.reg_value[5]))
    {
      window.alert("Login Successfull..!");
      this.display_form = true;
    }
    else {
      window.alert("Invalid Username or Password")
      this.log_value = [];
    }
  }

  viewProfile()
  {
    this.login_form = false;

    if(this.log_value.length === 0)
    {
      window.alert("Please login to view the Profile.")
      //this.log_value = [];
      this.login_form = true;
      // this.display_form = false;
    }
    else 
    {
      this.display_form = true;

      var First = document.getElementById('fname');
      First!.innerHTML = "FirstName :- "+ this.reg_value[0];

      var Last = document.getElementById('lname');
      Last!.innerHTML = "LastName :- "+ this.reg_value[1];

      var Email = document.getElementById('email');
      Email!.innerHTML = "Email Id :- "+ this.reg_value[2]

      var Mobile = document.getElementById("mbno");
      Mobile!.innerHTML = "Mobile Number :- "+ this.reg_value[3];

      var Age = document.getElementById('age');
      Age!.innerHTML = "Age :- "+ this.reg_value[4];
    }
  }
}
