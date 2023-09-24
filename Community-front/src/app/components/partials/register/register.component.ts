import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() onSubmit = new EventEmitter<any>()
  @Input() btnText: string = "cadastrar"

  userForm!: FormGroup

  constructor( private ps:PeopleService){}

  ngOnInit(): void {

    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('', []),
    })
  }

  get name(){
    return this.userForm.get('name')!
  }
  get description(){
    return this.userForm.get('description')!
  }
  get imgUrl(){
    return this.userForm.get('imgUrl')!
  }

  submit(){
    if(this.userForm.invalid){
      return
    }
    this.ps.add(this.userForm.value).subscribe()

    this.onSubmit.emit(this.userForm.value)
  }
}
