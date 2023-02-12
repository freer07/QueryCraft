import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { BuildQueryComponent } from './build-query/build-query.component';

const routes: Routes = [{ path: '', component: HomepageComponent }, { path: 'tutorials', component: TutorialsComponent}, { path: 'build-query', component: BuildQueryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
