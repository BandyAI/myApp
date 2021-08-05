import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase: AngularFireDatabase) { }

  employeeList: AngularFireList<any> | undefined;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    customerName: new FormControl(''),
    bin: new FormControl(''),
    orderNumber: new FormControl(''),
    endDate: new FormControl(''),
    field: new FormControl(''),
    wellNum: new FormControl(''),
    interval: new FormControl(''),
    depth: new FormControl(''),
    horizont: new FormControl(''),
    dateOtb: new FormControl(''),
    datePos: new FormControl(''),
    fio: new FormControl(''),
    position: new FormControl(''),
    type: new FormControl('1'),
  });

  // tslint:disable-next-line:typedef
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      customerName: '',
      bin: '',
      orderNumber: '',
      endDate: '',
      field: '',
      wellNum: '',
      interval: '',
      depth: '',
      horizont: '',
      dateOtb: '',
      datePos: '',
      fio: '',
      position: '',
      type: 1,
    });
  }

  // tslint:disable-next-line:typedef
  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  insertEmployee(employee) {
    // @ts-ignore
    this.employeeList.push({
      customerName: employee.customerName,
      bin: employee.bin,
      orderNumber: employee.orderNumber,
      endDate: employee.endDate,
      field: employee.field,
      wellNum: employee.wellNum,
      interval: employee.interval,
      depth: employee.depth,
      horizont: employee.horizont,
      dateOtb: employee.dateOtb,
      datePos: employee.datePos,
      fio: employee.fio,
      position: employee.position,
      type:  employee.type,
    });
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  updateEmployee(employee) {
    // @ts-ignore
    this.employeeList.update(employee.$key, {
      customerName: employee.customerName,
      bin: employee.bin,
      orderNumber: employee.orderNumber,
      endDate: employee.endDate,
      field: employee.field,
      wellNum: employee.wellNum,
      interval: employee.interval,
      depth: employee.depth,
      horizont: employee.horizont,
      dateOtb: employee.dateOtb,
      datePos: employee.datePos,
      fio: employee.fio,
      position: employee.position,
      type:  employee.type,
    });
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  populateForm(employee) {
    this.form.setValue(employee);
  }
}
