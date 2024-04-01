import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsToDoComponent } from './lists-to-do.component';

describe('ListsToDoComponent', () => {
  let component: ListsToDoComponent;
  let fixture: ComponentFixture<ListsToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsToDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListsToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
