import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleHomeComponent } from './example-home.component';
import { ExampleFoobarComponent } from './components/example-foobar/example-foobar.component';

@NgModule({
  declarations: [ExampleHomeComponent, ExampleFoobarComponent],
  imports: [
    CommonModule
  ]
})
export class ExampleModule { }
