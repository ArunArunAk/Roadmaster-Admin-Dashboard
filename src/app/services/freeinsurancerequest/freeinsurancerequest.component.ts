import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../subscriber.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-freeinsurancerequest',
  templateUrl: './freeinsurancerequest.component.html',
  styleUrls: ['./freeinsurancerequest.component.css']
})
export class FreeinsurancerequestComponent implements OnInit {
  freeinsurance: Array<any> = [];
  freeinsurancesarray: Array<any> = [];
  policyCategory:boolean=false
  count=0
 
 
 constructor(private subscriberservices:SubscriberService,private Toastr:ToastrService,private router:Router){}
  
 
 ngOnInit(): void {

  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Scroll to the top of the page when navigation ends
      window.scrollTo(0, 0);
    }
  });  

   this.subscriberservices.loadDatafreeinsurance().subscribe(val=>{
     this.freeinsurancesarray=val;
     console.log(this.freeinsurancesarray)
    })

}

ngDoCheck(): void {
   
 
  this.freeinsurance = this.freeinsurancesarray.filter(
    (plan) => plan.data.adminAccess === this.policyCategory

  );
  this.count=this.freeinsurance.length

 }

 allowcomments(id:any,isFeautured:boolean){
  const feauturedata={
    adminAccess:isFeautured
  }
 this.subscriberservices.MarkFeautured(id,feauturedata);
 this.Toastr.success(" Free Insurance Accepted!", "Successs", { positionClass: 'toast-top-right' });
 window.scrollTo(0, 0);




}

}
