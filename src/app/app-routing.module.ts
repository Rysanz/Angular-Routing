import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_komponen/dashboard/dashboard.component';
import { ProfileComponent } from './_komponen/profile/profile.component';
import { SettingComponent } from './_komponen/setting/setting.component';
import { PostComponent } from './_komponen/post/post.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
