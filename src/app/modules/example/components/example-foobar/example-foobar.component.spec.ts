import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFoobarComponent } from './example-foobar.component';

describe('ExampleFoobarComponent', () => {
  let component: ExampleFoobarComponent;
  let fixture: ComponentFixture<ExampleFoobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFoobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFoobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
