import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private afs: AngularFirestore) { }

 

  // Method to load all subscribers
  loadSubscribers() {
    return this.afs.collection("subscribers").snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return { id, data };
        });
      })
    );
  }

  loadDatafreeinsurance(){
    return  this.afs.collection("userofinsurancedetail").snapshotChanges().pipe(
      map(action =>{
       return action.map(a =>{
  
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;

         

            return {id,data};
        })
      })
    )
  }

  
  loadClaimData(){
    return  this.afs.collection("claim").snapshotChanges().pipe(
      map(action =>{
       return action.map(a =>{
  
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;

         

            return {id,data};
        })
      })
    )
  }

  MarkFeautured(id:any,feauturedata:any){
    this.afs.collection("userofinsurancedetail").doc(id).update(feauturedata).then(docred=>{ 
      
  
     })
}

Markcliam(id:any,feauturedata:any){
  this.afs.collection("claim").doc(id).update(feauturedata).then(docred=>{ 
    

   })
}

}
