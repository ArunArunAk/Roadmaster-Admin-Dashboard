import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-displayinsurance',
  templateUrl: './displayinsurance.component.html',
  styleUrls: ['./displayinsurance.component.css']
})
export class DisplayinsuranceComponent implements OnInit {
  Allinsurance!: Array<any>;
  

  constructor(private insuranceservice:InsuranceService,private router:Router){}
  ngOnInit(): void {
  this.insuranceservice.loadInsurance().subscribe(val=>{
    this.Allinsurance=val;
    console.log(val)
  })
}
ondelete(insuranceimg:any,insuranceid:any){
  this.insuranceservice.Deleteinsurance(insuranceimg,insuranceid);

}
}
