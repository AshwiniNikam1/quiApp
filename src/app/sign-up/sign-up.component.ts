import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup

  constructor(private fb: FormBuilder, private services: ServiceService, private router: Router) { }

  ngOnInit(): void {
    //Form Control 
    this.signupForm = this.fb.group(
      {
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(3)]]
      }
    )
  }
  //easy access to form fields
  get f() {
    return this.signupForm.controls;

  }
  //submit
  signup() {
    const body = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    this.services.signUp(body).subscribe(res => {
      // this.signupForm=res;
      alert("Sign up sucessfully")
      console.log("res", res)
      this.signupForm.reset();
      this.router.navigate(['login'])

    },
      error => {
        alert("something went wrong....")
        console.log(error)
      })
  }
}
