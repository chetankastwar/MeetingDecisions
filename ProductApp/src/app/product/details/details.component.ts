import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDefinition } from '../product-definition';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  detailForm: FormGroup;
  isLoaded: boolean;
  IsSaved: boolean;
  productDefinition: ProductDefinition[] = [];
  constructor(public productService: ProductService, private route: ActivatedRoute) {
    this.detailForm = new FormGroup({});
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.productService.getDetailsByName(params.get('name')).subscribe((data: ProductDefinition[]) =>{
          this.detailForm = this.UpdateFormGroup(data);
          this.productDefinition = data;
          this.isLoaded = true;
        })
      });
  }
  UpdateFormGroup(data: ProductDefinition[]) {
    const group: any = {};
    data.forEach((fieldInfo, index) => {
      group[index] = fieldInfo.mandatory ? 
      new FormControl(fieldInfo.defaultValue || '', Validators.required) 
      : new FormControl(fieldInfo.defaultValue || '');
    });
    return new FormGroup(group);
  }
  onReset()
  {
    this.IsSaved = false;
    this.detailForm.reset();
  }
  onSubmit() {
    this.IsSaved = true;
    //we can call service here 
  }
}