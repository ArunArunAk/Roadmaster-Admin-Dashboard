import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/models/post';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{
  permalink:string='';
  imgSrc: any = 'assets/images1.png';
  selectimg:any;
  category!: Array<any>;
  postForm!: FormGroup;
  contentvalue:any;
   formstatus='Add'
  postId:any;


  constructor(private categoryServices: CategoriesService,
    private fb: FormBuilder,
    private postservice:PostsService,
    
    private route:ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router:Router){
      this.route.queryParams.subscribe(params => {
        this. postId = params['id']; 
        if(this.postId){ 
          this.postservice.loadOnePost(this.postId).subscribe((postonedetails:any)=>{
            console.log('postonedetails',postonedetails);
              this.contentvalue=postonedetails.content;
               
        this.postForm = this.fb.group({
          title: [postonedetails.title, [Validators.required,Validators.minLength(10)]],
          permantlink: { value: postonedetails.permalink, disabled: true }, 
          excerpt: [postonedetails.excerpt, [Validators.required,Validators.minLength(50)]],
          category: [`${postonedetails.category.categoryId}-${postonedetails.category.category}`, Validators.required],
          postimg: ['', Validators.required],
          content: [postonedetails.content, Validators.required],
        });
          this.imgSrc=postonedetails.postimgpath
          console.log('Content value:',this.contentvalue);
          this.formstatus="Edit";
          
    
            });

        }
        else{
          this.postForm = this.fb.group({
            title: ['', [Validators.required,Validators.minLength(10)]],
            permantlink: { value: '', disabled: true }, 
            excerpt: ['', [Validators.required,Validators.minLength(50)]],
            category: ['', Validators.required],
            postimg: ['', Validators.required],
      
            content: ['', Validators.required],
      
          
           
          });

        }

       

       });
   }
 // Access the 'id' parameter
  // Now you can use postId to fetch/post data related to this particular post
  ngOnInit(): void {

    this.postForm = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(10)]],
      permantlink: { value: '', disabled: true }, 
      excerpt: ['', [Validators.required,Validators.minLength(50)]],
      category: ['', Validators.required],
      postimg: ['', Validators.required],

      content: ['', Validators.required],

    
     
    });

 this.categoryServices.loadData().subscribe((val) => {
      this.category = val;

      console.log(val);
    });

    
}


  onTitleChanged($event:any){
     console.log($event.target.value);
     const title=$event.target.value;  //replace is js function
    this.permalink= title.replace(/\s/g,'-');
    console.log("permalink",this.permalink)
  }
  
  showpreview(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      reader.readAsDataURL(file);
      this.selectimg=event.target.files[0]
      console.log("imagess",this.selectimg)
    }
  }


  get fc(){
    return this.postForm.controls
 }
 
  onSubmit(){
    console.log('Form submitted:', this.postForm.value);
    
    let splitted=this.postForm.value.category.split('-'); 
    console.log('splitted',splitted);

   const postdata:Post={
       title:this.postForm.value.title,
       permalink:this.postForm.value.permantlink,
       category:{
        categoryId:splitted[0],
        category:splitted[1]
       },
       postimgpath:'',
       excerpt:this.postForm.value.excerpt,
       content:this.postForm.value.content,

       isFeautured:false,
       views:0,
       status:'new',
       createAt:new Date(),
      
      };
    
    
  
      this.postservice.uploadImage(this.selectimg,postdata,this.formstatus,this.postId);
      this.postForm.reset();
      this.imgSrc='assets/images.png'
 }
  


  
}
