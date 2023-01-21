import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname='';
pswd="";
mobilenum='';
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    mobilenum:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
   // alert('register clicked')
   //console.log(this.registerForm);
   
    var username=this.registerForm.value.uname;
    var pswd= this.registerForm.value.pswd;
    var mobilenum= this.registerForm.value.mobilenum;
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.get('uname')?.errors);   
      const result=this.ds.register(username,pswd,mobilenum);
    if(result){
      alert('register sucessful')
      this.router.navigateByUrl('');
    }
  
    else{
      alert('register failed')
      this.router.navigateByUrl('');
    }
   
    }
  }
}
