import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VanbandenComponent } from './vanbanden/vanbanden.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FileTreesComponent } from './vanbanden/file-trees/file-trees.component';
import { VanbandenListsComponent } from './vanbanden/vanbanden-lists/vanbanden-lists.component';

const routes: Routes = [
  {path: '', redirectTo: 'Trangchu', pathMatch: 'full'},
  {path: 'Trangchu', component: HomeComponent},
  {path: 'Vanbanden', component: VanbandenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    VanbandenComponent,
    HomeComponent,
    FileTreesComponent,
    VanbandenListsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
