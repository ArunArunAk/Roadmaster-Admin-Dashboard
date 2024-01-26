import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private AFS:AngularFirestore,private toastr: ToastrService) { }


//post data
savedata(data:any){
  this.AFS.collection("categories").add(data).then(docRef =>{  
    this.toastr.success( "Data Save Successfully..!");

    console.log(docRef);
   })
   .catch(err => {
    console.log(err);
   })

}
//get data

loadData(){
  return  this.AFS.collection("categories").snapshotChanges().pipe(
    map(action =>{
     return action.map(a =>{

        const data=a.payload.doc.data();
        const id=a.payload.doc.id;
          return {id,data};
      })
    })
  )
}

upateData(id:any,editdata:any){
 this.AFS.collection("categories").doc(id).update(editdata).then(docred=>{
  this.toastr.success( "Data Editted Successfully..!");

 })
}

Deletedata(categoryid:any){
  this.AFS.collection("categories").doc(categoryid).delete().then(docred=>{
    this.toastr.success( "Data Delete Successfully..!");
})
}
}