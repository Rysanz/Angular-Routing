import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_komponen/header/header.component';
import { FooterComponent } from './_komponen/footer/footer.component';
import { DashboardComponent } from './_komponen/dashboard/dashboard.component';
import { LayoutComponent } from './_komponen/layout/layout.component';
import { PostComponent } from './_komponen/post/post.component';
import { SettingComponent } from './_komponen/setting/setting.component';
import { ProfileComponent } from './_komponen/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LayoutComponent,
    PostComponent,
    SettingComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
