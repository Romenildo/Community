import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/partials/chats/chats.component';
import { HomeComponent } from './components/partials/home/home.component';
import { RegisterComponent } from './components/partials/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chat/:type/:id', component: ChatsComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
