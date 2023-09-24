import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit{

  chats:any[] = []

  constructor(private route:ActivatedRoute, private ps:PeopleService,private router: Router){}


  ngOnInit(): void {
    this.updateChat();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateChat();
      }
    });

    

  }

  updateChat() {
    const id = this.route.snapshot.paramMap.get("id")
    const type = this.route.snapshot.paramMap.get("type")
     this.ps.getById(id).subscribe(data=>{
      this.chats = data.chats[type!]
    })
  }

  
}
