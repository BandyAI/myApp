import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EmployeeComponent} from '../employee/employee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  date = new Date();

  constructor(private service: EmployeeService,
              private dialog: MatDialog) { }

  // @ts-ignore
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['sample', 'fio', 'field', 'type', 'wellNum', 'dateOtb', 'datePos', 'interval', 'depth', 'horizont', 'lab', 'status', 'buttons'];
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // tslint:disable-next-line:typedef
  ngOnInit(){
  this.service.getEmployees().subscribe(
    list => {
      const array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.listData = new MatTableDataSource(array);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  // tslint:disable-next-line:typedef
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1328px';
    dialogConfig.height = '880px';
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1328px';
    dialogConfig.height = '880px';
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

}
