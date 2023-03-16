import { Component,OnInit } from '@angular/core';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  user:any;
  constructor(private userService:UserService){}


  ApiCall =()=>{
    return this.userService.getUser().subscribe(   
      (user:any)=>{
       console.log("APP file success",user.results[0])
        this.user = user.results[0]
        
      },
      (err)=>{
       console.log("APP file failed")
        console.log("ERROR : ",err)
      }
     )
  }
  ngOnInit(){
    console.log("APP file")
    this.ApiCall()
   }

   getNewUser=()=>{
    this.ApiCall()
   }
  
}
