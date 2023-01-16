import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Person2Service } from '../person2.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent2 implements OnInit {

  form2: FormGroup;

  constructor(
    public person2Service: Person2Service,
    private router2: Router
  ) { }

  ngOnInit(): void {

    

    this.form2 = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      descripcion: new FormControl('', [ Validators.required]),
      estatus: new FormControl('', [ Validators.required])
    });

  }

  get f(){
    return this.form2.controls;
  }


  submit(){
    console.log(this.form2.value);
    this.person2Service.create(this.form2.value).subscribe(res => {
         console.log('Person created successfully!');

         Swal.fire(
          'Creado',
          'El personal fue registrado con exito',
          'success'
        );

     // this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');

         this.router2.navigateByUrl('person2/index');
    })
  }

}
