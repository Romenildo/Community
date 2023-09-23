import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  title='Pessoas'
  pessoa = true

  changeSide = (event:any)=>{
    this.pessoa = !this.pessoa
    this.title = event.name
    console.log(event)
  }

  resetSide= () =>{
    this.pessoa =true
    this.title='Pessoas'
  }

  peoples = [
    {
      id:"1",
      name:"Kafka",
      imgUrl:"https://wotpack.ru/wp-content/uploads/2023/05/1-18.jpg",
      description:"teste"
    },
    {
      id:"2",
      name:"Seele",
      imgUrl:"https://criticalhits.com.br/wp-content/uploads/2023/07/honkai-star-rail-seele.jpg",
      description:"teste"
    }
  ]
}
