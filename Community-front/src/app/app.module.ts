import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { ContentComponent } from './components/partials/content/content.component';
import { PeopleListComponent } from './components/partials/people-list/people-list.component';
import { OptionsListComponent } from './components/partials/options-list/options-list.component';
import { ChatsComponent } from './components/partials/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    PeopleListComponent,
    OptionsListComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
