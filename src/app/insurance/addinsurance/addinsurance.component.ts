import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from 'src/app/services/insurance.service';
import { insurance } from 'src/models/insurance';

@Component({
  selector: 'app-addinsurance',
  templateUrl: './addinsurance.component.html',
  styleUrls: ['./addinsurance.component.css']
})
export class AddinsuranceComponent implements OnInit{

  postFormInsurance!: FormGroup;
  imgSrc: any = 'assets/images.png';
  selectimg:any;

constructor(private fb:FormBuilder,private insuranceservice:InsuranceService){}

  ngOnInit(): void {
    this.postFormInsurance = this.fb.group({
      PolicyId: ['', [Validators.required,Validators.minLength(5)]],
      PolicyName: ['', [Validators.required,Validators.minLength(10)]],

      PolicyDescription: ['', [Validators.required,Validators.minLength(50)]],
      Policyduration: ['', Validators.required],
      Policycategory: ['', Validators.required],

      postimg: ['', Validators.required],
      PolicyType: ['', Validators.required],
      Policyprice: ['', Validators.required],
      Policyprovider: ['', Validators.required],



    
     
    });
  }
  get fc(){
    return this.postFormInsurance.controls
 }
 
  onSubmit(){
    
   const postinsurancedata:insurance={
    policyid:this.postFormInsurance.value.PolicyId,
    policyname:this.postFormInsurance.value.PolicyName,
    
    policyproviderimg:'',
    policydescription:this.postFormInsurance.value.PolicyDescription,
    policytype:this.postFormInsurance.value.PolicyType,
    policycategory:this.postFormInsurance.value.Policycategory,
    policyduration:this.postFormInsurance.value.Policyduration,
    policyprovidername:this.postFormInsurance.value.Policyprovider,
    policyprice:this.postFormInsurance.value.Policyprice,


   
   };
   this.insuranceservice.uploadinsuranceImage(this.selectimg,postinsurancedata);

   this.postFormInsurance.reset();
   this.imgSrc='assets/images.png'
   console.log('Form submitted:', this.postFormInsurance.value);
   console.log('Form submitted:', postinsurancedata);

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
}
