import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {


  chats = [
    {message:"teste de mensagem", data:"20/07/2000"},
    {message:"teste de mensagem", data:"20/07/2000"},
    {message:"teste de mensagem", data:"20/07/2000"},
    {message:"teste de mensagem", data:"20/07/2000"},
  ]
}
