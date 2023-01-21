import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //current User
  currentUser="";
  //current uname
  currentuname="";
  
  // taskinput: any;
  task:any;
  
  userDetails:any={
    joice:{username:'joice',password:'1234',mobilenum:'7510949135'},
    arjun:{username:'arjun',password:'1234',mobilenum:'8086373858'},
    dathen:{username:'joice',password:'1234',mobilenum:'9745288092'}
  }
 currentuser ="";
  nlist:any;
  
  constructor() { }

  login(username:any,upassword:any)
  {
    if(username in this.userDetails)
    {
      this.currentuser= username;      
      if(upassword == this.userDetails[username]['password'])
      {
        this.currentuser=username;
        if(username in localStorage)
        {
        this.nlist= JSON.parse(localStorage.getItem(username)||'')
        }
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }


  register(uname:any,upassword:any,umobile:any)
  {
    if(uname in this.userDetails)
    {
      return false;
    }
    else
    {
      this.userDetails[uname]={
        username: uname,
        password:upassword,
        mobile:umobile
      }
      console.log(this.userDetails);
      return true;
      
      
    }
  }
}
  

//   saveDetails(){
//     if(this.userDetails){
//       localStorage.setItem('dashboard',JSON.stringify(this.userDetails))
//     }
//     if(this.currentuname){
//       localStorage.setItem('currentuname',JSON.stringify(this.currentuname))
//     }
//  if(this.currentUser){
//   localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
//  }

//   }

//   userDetails:any={
//     rony:{username:'rony',password:3001},
//     devadathan:{username:'devadathan',password:3002},
//     gokul:{username:'gokul',password:3003}
  
//   }
// constructor() { }

// register(uname:any,pswd:any,mobilenum:any){
//   let userDetails = this.userDetails
//   if(uname in userDetails){
//     return false;
//   }
//   else{
//     userDetails[uname]={
//       username:uname,
//       password:pswd,
//       mobilenum:mobilenum
//     }
//     console.log(userDetails);
//     this.saveDetails()
//      return true;
//   }
//   }





// login(uname:any,pswd:any){
//  let userDetails = this.userDetails;
//  if(uname in userDetails){
//   if(pswd==userDetails[uname]['password']){
//     this.currentUser=this.userDetails[uname]['password']
//    // this.currentuname=this.userDetails[uname]['uname']
//     this.saveDetails() 
//   return true;
//   }
//   else{
//     return false
//     // return userDetails[uname]['password'] ;  
//   }
//  }
//  else{
//   return false;
//  }

// }



