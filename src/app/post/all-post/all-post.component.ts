import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  Allposts!: Array<any>;
  editdata:any;
  editId:any;

  constructor(private postservices:PostsService,private router:Router){}
  ngOnInit(): void {
  this.postservices.loadpost().subscribe(val=>{
    this.Allposts=val;
    console.log(val)
  })
}

ondelete(postsdetail:any,postid:any){
  this.postservices.Deletepost(postsdetail,postid);
}

onEdit(data:any,id:any){
  this.editdata=data;
  this.editId=id;
  this.router.navigate(['posts/new']);
  }

   postsdetail:any;
  onFeatured(id:any,isFeautured:boolean){
    const feauturedata={
      isFeautured:isFeautured
    }
   this.postservices.MarkFeautured(id,feauturedata)


  }
}
