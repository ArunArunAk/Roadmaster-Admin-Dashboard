import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private store: AngularFireStorage,
    private toastr: ToastrService,
    private AFS: AngularFirestore,
    private router:Router
  ) { }
  uploadinsuranceImage(selectedinsuranceimg: any, insurancedata: any) {
    const filepath = `postInsuranceIMG/${Date.now()}`;
    console.log('filepath', filepath)

    this.store.upload(filepath, selectedinsuranceimg).then(() => {
      console.log("insurance image successfully");

      this.store.ref(filepath).getDownloadURL().subscribe(URL => {
        console.log('Url', URL);
        insurancedata.policyproviderimg = URL;

      console.log('postdata of insurance', insurancedata);
      console.log('postimgpathpostimgpath of insurance', URL);
      
      this.saveInsurance(insurancedata)


  
      });
    });
  }
  saveInsurance(insurancedata:any){
    this.AFS.collection('insurance').add(insurancedata).then(docRef => {
      this.toastr.success("insurance Save Successfully in posts..!");
      this.router.navigate(['/insurance']);

    });
  }
 
  loadInsurance(){
    return  this.AFS.collection("insurance").snapshotChanges().pipe(
      map(action =>{
       return action.map(a =>{
  
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;
          return {id,data};
          
        })
      })
    )

    
  }

  Deleteinsurance(postimgpath:any,categoryid:any){
   

    this.store.storage.refFromURL(postimgpath).delete().then((deletepost)=>{
      console.log("deleteinsurance",deletepost);
     })
     this.deletedatawithinsurance(categoryid)

    }
  
       
    
    deletedatawithinsurance(categoryid:any){
      this.AFS.collection("insurance").doc(categoryid).delete().then(docred=>{
        this.toastr.warning( "insurance Delete Successfully..!");
    });
     }
}
