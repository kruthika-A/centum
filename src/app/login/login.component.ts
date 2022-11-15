import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any

  constructor() { }

  ngOnInit(): void {
    this.user=new FormGroup({
      password: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required,Validators.pattern(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$'
      ),]),
    })
  }
  get register() {
    return this.user.controls
  }
  login(){
    console.log('sssssss',this.user.value);  
    //   this.user=new FormGroup({
    //   password: new FormControl('', [Validators.required]),
    //   Email: new FormControl('', [Validators.required,Validators.pattern(
    //     '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$'
    //   ),]),
    // })
    
  }

}
