import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenComponent } from './vanbanden.component';

describe('VanbandenComponent', () => {
  let component: VanbandenComponent;
  let fixture: ComponentFixture<VanbandenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VanbandenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VanbandenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
