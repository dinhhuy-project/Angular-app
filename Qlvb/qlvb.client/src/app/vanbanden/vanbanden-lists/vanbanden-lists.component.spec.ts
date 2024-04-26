import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenListsComponent } from './vanbanden-lists.component';

describe('VanbandenListsComponent', () => {
  let component: VanbandenListsComponent;
  let fixture: ComponentFixture<VanbandenListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VanbandenListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VanbandenListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
