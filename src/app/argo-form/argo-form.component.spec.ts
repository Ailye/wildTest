import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgoFormComponent } from './argo-form.component';

describe('ArgoFormComponent', () => {
  let component: ArgoFormComponent;
  let fixture: ComponentFixture<ArgoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
