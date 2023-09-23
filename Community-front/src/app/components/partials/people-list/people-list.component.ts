import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  @Input() peoples:any[] = []
  @Output() onClicked: EventEmitter<any> = new EventEmitter()
  
  clicked(people:any){
    this.onClicked.emit(people)
  }
}
