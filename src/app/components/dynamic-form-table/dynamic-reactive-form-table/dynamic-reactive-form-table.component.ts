import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-reactive-form-table',
  templateUrl: './dynamic-reactive-form-table.component.html',
  styleUrls: ['./dynamic-reactive-form-table.component.css']
})
export class DynamicReactiveFormTableComponent implements OnInit {

  constructor() {
  }

  dForm!: FormGroup;
  datasource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedCol: string[] = [
    "name", 'phone', 'email', 'action'
  ]

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  ngOnInit(): void {
    this.dForm = new FormGroup({
      row: new FormArray([this.createDynamicForm()])
    });

    console.log(this.row);    
  }


  get row() {
    return this.dForm.get('row') as FormArray;
  }

  createDynamicForm() {
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
    })
  }


  addRow() {
    this.row.push(this.createDynamicForm())

    this.datasource.data = this.row.controls;

    this.table.renderRows();
  }

  removeRow(index: number) {
    this.row.removeAt(index);
    this.datasource.data = this.row.controls;

    this.table.renderRows();
  }

}

// interface UserData {
//   name: string;
//   phone: string;
//   email: string
// }
