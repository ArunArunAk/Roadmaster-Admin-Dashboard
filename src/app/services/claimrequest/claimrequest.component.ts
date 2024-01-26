import { Component } from '@angular/core';
import { SubscriberService } from '../subscriber.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-claimrequest',
  templateUrl: './claimrequest.component.html',
  styleUrls: ['./claimrequest.component.css']
})
export class ClaimrequestComponent {
  cliaminsurance: Array<any> = [];
  claiminsurancesarray: Array<any> = [];
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

   this.subscriberservices.loadClaimData().subscribe(val=>{
     this.claiminsurancesarray=val;
     console.log(this.claiminsurancesarray)
    })

}

ngDoCheck(): void {
   
 
  this.cliaminsurance = this.claiminsurancesarray.filter(
    (plan) => plan.data.claimStatus === this.policyCategory

  );
  this.count=this.cliaminsurance.length

 }

 allowclaim(id:any,isFeautured:boolean){
  const feauturedata={
    claimStatus:isFeautured
  }
 this.subscriberservices.Markcliam(id,feauturedata);
 this.Toastr.success(" Claim is Accepted!", "Successs", { positionClass: 'toast-top-right' });
 window.scrollTo(0, 0);


}
}
