import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTreesComponent } from './file-trees.component';

describe('FileTreesComponent', () => {
  let component: FileTreesComponent;
  let fixture: ComponentFixture<FileTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileTreesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
