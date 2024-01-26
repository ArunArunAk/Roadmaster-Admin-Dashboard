import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any> = [];
  usersrel: Array<any> = [];
  totalusers=0;


  constructor(private userservices:UsersService,private comments:CommentsService){}

  ngOnInit() {
     this.userservices.loadData().subscribe(val=>{
      this.users=val;
     this.totalusers=this.users.length
     })
    
  }

}
