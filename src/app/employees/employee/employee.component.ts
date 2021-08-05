import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

import {EmployeeService} from '../../shared/employee.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  tabs = ['Номер пробы '];
  selected = new FormControl(0);
  // @ts-ignore
  index: 1;

  constructor(public service: EmployeeService,
              public dialogRef: MatDialogRef<EmployeeComponent>) { }

  ngOnInit(): void {
    this.service.getEmployees();
  }

  // tslint:disable-next-line:typedef
  onClear() {
    this.service.form.reset();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
   // @ts-ignore
    if (!this.service.form.get('$key').value) {
    this.service.insertEmployee(this.service.form.value);
    }
    else {
      this.service.updateEmployee(this.service.form.value);
    }
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.onClose();
  }

  // tslint:disable-next-line:typedef
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
