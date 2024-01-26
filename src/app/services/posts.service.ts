
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private store: AngularFireStorage,
    private toastr: ToastrService,
    private AFS: AngularFirestore,
    private router:Router
  ) { }



  uploadImage(selectedimg: any, postdata: any, formstatus: any, formupdatedid: any) {
    const filepath = `postIMG/${Date.now()}`;
    console.log('filepath', filepath)

    this.store.upload(filepath, selectedimg).then(() => {
      console.log("post image successfully");

      this.store.ref(filepath).getDownloadURL().subscribe(URL => {
        console.log('Url', URL);
        postdata.postimgpath = URL;
        postdata.permalink = this.generatePermalink(postdata.title);

      console.log('postdata', postdata);
      console.log('postimgpathpostimgpath', URL);


      if(formstatus=="Edit"){
     console.log('editttttttttt');
     console.log('dtatadata',postdata);
     console.log('idddd',formupdatedid);
     formstatus=="Add"

     

        this.upatepost(formupdatedid,postdata);
      }else{ 
        console.log('dtatadata',postdata);
        console.log('adddddddddd');

        this.savepost(postdata)
      }
      });
    });
  }

  savepost(postdata:any){
    // Generate permalink here before adding the document
     postdata.permalink = this.generatePermalink(postdata.title);

    this.AFS.collection('posts').add(postdata).then(docRef => {
      this.toastr.success("post Save Successfully in posts..!");
      this.router.navigate(['/posts']);
     
    });

  }

  loadpost(){
    return  this.AFS.collection("posts").snapshotChanges().pipe(
      map(action =>{
       return action.map(a =>{
  
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;
          return {id,data};
          
        })
      })
    )
  }
 

  Deletepost(postimgpath:any,categoryid:any){
    console.log('postimgpath',postimgpath)
    console.log('categoryid',categoryid)

    this.store.storage.refFromURL(postimgpath).delete().then((deletepost)=>{
      console.log("deletepost",deletepost);
      alert("delete post from firebsae cloud storage");
     })
     this.deletedatawithpost(categoryid)

    }
  
       
    
    deletedatawithpost(categoryid:any){
      this.AFS.collection("posts").doc(categoryid).delete().then(docred=>{
        this.toastr.warning( "post Delete Successfully..!");
    });
     }
 

upatepost(id:any,editpostdetail:any){
  this.AFS.collection("posts").doc(id).update(editpostdetail).then(docred=>{
   this.toastr.success( "post Editted Successfully..!");
   this.router.navigate(['/posts']);
 
  })
 }

 MarkFeautured(id:any,feauturedata:any){
  this.AFS.collection("posts").doc(id).update(feauturedata).then(docred=>{ 
    this.toastr.info("Feautured status updated!", "Feautured", { positionClass: 'toast-top-right' });

   })

 }
//  snapshotChanges-is load all datas and dataid also fetch from firestore ,
// valueChanges-is load only one dta depends on the id ,it cant give id like snapshotChanges 

 loadOnePost(id:any){
    return this.AFS.collection("posts").doc(id).valueChanges();
 }
  // Helper function to generate permalink from the title
  generatePermalink(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }


}
