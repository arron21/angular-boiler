import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHomeComponent } from './example-home.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExampleHomeComponent', () => {
  let component: ExampleHomeComponent;
  let fixture: ComponentFixture<ExampleHomeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleHomeComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
