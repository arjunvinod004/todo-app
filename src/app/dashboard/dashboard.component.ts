


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  task: any;
   list:any[]=[];
  item: any;
    btnStyle: string | undefined;
  
    //adding task
   addtask(task:any)
   {
    if(task)
    {
  this.list.push({id:this.list.length,name:task})
   //console.log(this.addtask);
   //list
    }
    else
    {
      alert("enter task")
     // console.log(task);
      
    }
   }
  
  
   //removing task
   removetask(id:number)
   {
     this.list= this.list.filter(data=>data.id!==id)
   }
  
  
   //logout fn
   logout()
   {
    localStorage.setItem(this.ds.currentUser,JSON.stringify(this.list))
    this.router.navigateByUrl("")
   }
  
   
    constructor( private router:Router,private ds :DataService) {
      if (this.ds.currentuser in localStorage)
      {
        this.list= this.ds.nlist;
      }
     }

  
 
  ngOnInit(): void {
  }

}
