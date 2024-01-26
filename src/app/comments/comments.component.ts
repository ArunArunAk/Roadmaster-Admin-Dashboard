import { Component, DoCheck, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit,DoCheck {
 comments: Array<any> = [];
 commentsarray: Array<any> = [];
 policyCategory:boolean=false


constructor(private commentsservices:CommentsService,private Toastr:ToastrService){}
 

ngOnInit(): void {
  this.commentsservices.loadcomments().subscribe(val=>{
    this.commentsarray=val;
    console.log(this.comments)
 })

//  this.comments = this.commentsarray.filter(
//    (plan) => plan.data.viewstatus === this.policyCategory
//  );
}
ngDoCheck(): void {
   
 
  this.comments = this.commentsarray.filter(
    (plan) => plan.data.viewstatus === this.policyCategory
  );
 }


allowcomments(id:any,isFeautured:boolean){
  const feauturedata={
    viewstatus:isFeautured
  }
 this.commentsservices.MarkFeautured(id,feauturedata);
 this.Toastr.success("This comments allowe to show!", "Successs", { positionClass: 'toast-top-right' });



}
}
