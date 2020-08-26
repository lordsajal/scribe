import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  message:string='';
  userError:any;
  constructor(public fb:FormBuilder,public aS:AuthService, public router: Router) {
    this.myForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
onSubmit(form){
 this.aS.login(form.value.email,form.value.password).then((data)=>{
    console.log(data);
    this.message="you have been logged in successfully";
    this.router.navigate(['/myblogs']);
  }).catch((error)=>{
 this.userError=error;
 console.log(error);
  })
}
}
