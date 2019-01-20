import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule],
})
export class MaterialModule { }
