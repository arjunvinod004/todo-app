import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
uname='';
pswd:any;
password:any;
loginForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  
})
 constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }
  
  mailchange(event:any){
    this.uname=event.target.value;
   }
  pswdchange(event:any){
    this.pswd=event.target.value;
     
    }

  login(){
    //alert('clicked')
   // console.log(this.loginForm);
    
    var uname= this.loginForm.value.uname;
    var pswd= this.loginForm.value.pswd;
 
    var userDetails= this.ds.userDetails;
    if(this.loginForm.valid){
      const result=this.ds.login(uname,pswd)
    if(result){
      alert('login successful');
      this.router.navigateByUrl('dashboard');

    }
    else{
      alert('login failed');
      
      this.router.navigateByUrl('');
    }
    }
   
  }


}




    // if(mail in userDetails){
    //   if(pswd==userDetails[mail]['password']){
    //     alert('login successful');
    //     this.router.navigateByUrl('dashboard')

    //   }
    //   else{
    //     alert('invalid password')
    //   }
    //  }
    //  else{
    //   alert('invalid user')
    //  }
  

 


