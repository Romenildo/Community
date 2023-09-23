import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.css']
})
export class OptionsListComponent {

  @Output() backToPeople: EventEmitter<any> = new EventEmitter()

  onClicked(){
    //aciona o evento ao chamar o onCick e envia um emiter para o pai
    this.backToPeople.emit()
  }
}
