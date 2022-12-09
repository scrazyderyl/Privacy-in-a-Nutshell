import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { LegalComponent } from './legal/legal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: "", component: HomeComponent, title: "Home"},
  {path: "viewer/:id", component: ViewerComponent},
  {path: "resources", component: ResourcesComponent, title: "Resources"},
  {path: "glossary", component: GlossaryComponent, title: "Glossary"},
  {path: "about", component: AboutComponent, title: "About"},
  {path: "legal", component: LegalComponent, title: "Legal"},
  {path: "**", component: NotFoundComponent, title: "Page Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
