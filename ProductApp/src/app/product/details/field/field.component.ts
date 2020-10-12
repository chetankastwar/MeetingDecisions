import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductDefinition } from '../../product-definition';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html'
})
export class FieldComponent {
  @Input() id: string;
  @Input() fieldInfo: ProductDefinition;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.id].valid; }
}
