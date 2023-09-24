import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  
  constructor(private ps:PeopleService){}

  title='Pessoas'
  pessoa = true
  currentPeople = {}
  peoples = [
  ]

  ngOnInit(): void {
     this.ps.getAllPeople().subscribe(data=>{
      this.peoples = data
    })
  }

  changeSide = (event:any)=>{
    this.pessoa = !this.pessoa
    this.title = event.name
    this.currentPeople = event
  }

  resetSide= () =>{
    this.pessoa =true
    this.title='Pessoas'
  }

  
}
