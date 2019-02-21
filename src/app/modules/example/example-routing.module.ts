import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleHomeComponent } from './example-home.component';
import { ExampleFoobarComponent } from './components/example-foobar/example-foobar.component';


const ROUTES: Routes = [
  {
      path: '',
      component: ExampleHomeComponent,
      children: [
        {
            path: 'example',
            component: ExampleFoobarComponent
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {}
