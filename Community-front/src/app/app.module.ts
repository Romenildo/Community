import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { PeopleListComponent } from './components/partials/people-list/people-list.component';
import { OptionsListComponent } from './components/partials/options-list/options-list.component';
import { ChatsComponent } from './components/partials/chats/chats.component';
import { RegisterComponent } from './components/partials/register/register.component';
import { HomeComponent } from './components/partials/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PeopleListComponent,
    OptionsListComponent,
    ChatsComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
