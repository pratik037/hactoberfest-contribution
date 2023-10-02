import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { DashoardTableComponent } from './dashoard-table.component';

describe('DashoardTableComponent', () => {
  let component: DashoardTableComponent;
  let fixture: ComponentFixture<DashoardTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashoardTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashoardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-table rendered', ()=>{
    const tbElement = fixture.nativeElement.querySelector('table')

    expect(tbElement).toBeTruthy();
  })

  it('should have two columns', () => {
    const tbElement = fixture.nativeElement.querySelector('table');

    const headerCells = tbElement.querySelectorAll('.mat-header-cell');

    const expectedColumnCount = 2;

    expect(headerCells.length).toBe(expectedColumnCount);
  })

  it('should have 10 rows rendered', (done)=>{

    fixture.detectChanges();
    const tbElement = fixture.nativeElement.querySelector('table tbody');

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      const rows = tbElement.querySelectorAll('.mat-row')
      const expectedSize = 10;
      expect(rows.length).toBe(expectedSize);
      done();
    });
  })


  it('should have mat-paginator rendered', ()=> {
    const paginatorEle = fixture.nativeElement.querySelector('.mat-paginator');

    expect(paginatorEle).toBeTruthy();
  })

  it('should have 2 pages', ()=> {

    expect(component.paginator.getNumberOfPages()).toBe(2);

  });

  it('should have 10 elements per page for paginator', ()=> {
    expect(component.paginator.pageSize).toBe(10);
  })

  it('should not have next page at index 2', ()=> {
    component.paginator.nextPage();
    fixture.detectChanges();

    expect(component.paginator.hasNextPage()).toBeFalsy()
  })

  it('should not have next page when page size is 20', ()=>{
    component.paginator._changePageSize(20);

    fixture.detectChanges();

    expect(component.paginator.hasNextPage()).toBeFalsy();
  })

  it('total elements should be 26 in datasource', ()=>{
    expect(component.dataSource.data.length).toBe(20);
  })
});
