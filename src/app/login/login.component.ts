import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  constructor(private fb: FormBuilder, private services: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(3)]]
      }
    )
  }
  //easy access to form fields
  get f() {
    return this.loginForm.controls;

  }

  login() {
    this.services.login().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      //if user exist
      if (user) {
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
        alert("login sucess !!")
        this.loginForm.reset();
        this.router.navigate(['quiz'])
      }
      else {
        this.loginForm.reset();
        alert("user not found !!")
      }
    },
      error => {
        alert("something went wrong..")
      })
  }
}
