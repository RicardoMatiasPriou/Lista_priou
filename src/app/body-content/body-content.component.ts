import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})


export class BodyContentComponent implements OnInit {
  alumnosForm:FormGroup
  alumosArray=[]
  alumno=[]
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.alumnosForm=this.fb.group({
      nombre:["", Validators.required],
      correo:["", [Validators.required , Validators.email]],
      mensaje:["", Validators.required]
    })
  }


  onSubmit(){

alert(this.alumnosForm.value.nombre)
  }

}

