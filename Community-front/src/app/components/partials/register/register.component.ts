import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() onSubmit = new EventEmitter<any>()
  @Input() btnText: string = "cadastrar"

  userForm!: FormGroup

  constructor(){}

  ngOnInit(): void {

    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }

  get name(){
    return this.userForm.get('name')!
  }
  get description(){
    return this.userForm.get('description')!
  }

  submit(){
    if(this.userForm.invalid){
      return
    }
    console.log(this.userForm.value)
     this.onSubmit.emit(this.userForm.value)
  }
}
