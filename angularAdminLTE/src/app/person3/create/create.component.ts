import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Person3Service } from '../person3.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent3 implements OnInit {

  form3: FormGroup;

  constructor(
    public person3Service: Person3Service,
    private router3: Router
  ) { }

  ngOnInit(): void {

    

    this.form3 = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      categoria: new FormControl('', [ Validators.required]),
      precio: new FormControl('', [ Validators.required]),
      stock: new FormControl('', [ Validators.required]),
      
    });

  }

  get f(){
    return this.form3.controls;
  }


  submit(){
    console.log(this.form3.value);
    this.person3Service.create(this.form3.value).subscribe(res => {
         console.log('Person created successfully!');

         Swal.fire(
          'Creado',
          'El producto fue creado con exito',
          'success'
        );

     // this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');

         this.router3.navigateByUrl('person3/index');
    })
  }

}
