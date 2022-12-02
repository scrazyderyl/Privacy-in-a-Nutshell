import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LegalComponent } from './legal/legal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: "", component: HomeComponent, title: "Home"},
  {path: "info/:id", component: InfoComponent, title: "Privacy Summary"},
  {path: "resources", component: ResourcesComponent},
  {path: "glossary", component: GlossaryComponent},
  {path: "about", component: AboutComponent},
  {path: "legal", component: LegalComponent, title: "Legal"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
