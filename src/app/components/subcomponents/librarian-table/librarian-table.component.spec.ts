import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianTableComponent } from './librarian-table.component';

describe('LibrarianTableComponent', () => {
  let component: LibrarianTableComponent;
  let fixture: ComponentFixture<LibrarianTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
