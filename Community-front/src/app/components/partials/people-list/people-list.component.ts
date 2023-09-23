import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {


  peoples = [
    {
      name:"Kafka",
      imgUrl:"https://wotpack.ru/wp-content/uploads/2023/05/1-18.jpg",
      description:"teste"
    },
    {
      name:"Seele",
      imgUrl:"https://criticalhits.com.br/wp-content/uploads/2023/07/honkai-star-rail-seele.jpg",
      description:"teste"
    }
  ]
}
