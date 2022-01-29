import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduComponent } from './edu/edu.component';
import { HomeComponent } from './home/home.component';
import { ProjComponent } from './proj/proj.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: "",  component: HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"skills",component:SkillsComponent},
  {path:"projects",component: ProjComponent},
  {path:"education",component:EduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
