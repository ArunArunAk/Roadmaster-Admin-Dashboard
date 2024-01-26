import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
// import { Category } from '../models/category';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryarray!: Array<any>;
  editname = '';
  formstatus: string = 'Add';
  Categoryid = '';
  constructor(private categoryServices: CategoriesService) {}

  ngOnInit(): void {
    this.categoryServices.loadData().subscribe((val) => {
      this.categoryarray = val;

      console.log(val);
      console.log('arrsy', this.categoryarray);
    });
  }

  onsubmit(formData: any) {
    let categorydata: Category = {
      category: formData.value.category,
    };
    if (this.formstatus === 'Add') {
      console.log('add');
      this.categoryServices.savedata(categorydata);
      formData.reset();
    } else if (this.formstatus === 'Edit') {
      this.formstatus = 'Add';
      this.categoryServices.upateData(this.Categoryid, categorydata);
    }
  }

  OnEdit(category: any, id: any) {
    console.log(category, id);
    this.editname = category;
    this.formstatus = 'Edit';
    this.Categoryid = id;
  }

  OnDelete(categoryid:any){
    this.categoryServices.Deletedata(categoryid);
  }
}

// let categorydata: Category = {
//   category: formData.value.category,
//   name: formData.value.category,
// };
// this.categoryServices.savedata(categorydata);
// formData.reset();

// this.categoryServices.upateData(this.id,this.editname);
// this.formstatus="Add";
