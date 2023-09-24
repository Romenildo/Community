import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.css']
})
export class OptionsListComponent {
  @Input() current:any = {}
  @Output() backToPeople: EventEmitter<any> = new EventEmitter()

  onClicked(){
    this.backToPeople.emit()
  }
}
