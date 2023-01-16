import { Component, OnInit } from '@angular/core';

import { Person2Service } from '../person2.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Person2 } from '../person2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent2 implements OnInit {


  id2: number;
  person2: Person2;
  form2: FormGroup;

  constructor(
    public person2Service: Person2Service,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id2 = this.route.snapshot.params['idPerson'];
    
    this.person2Service.find(this.id2).subscribe((data: Person2)=>{
      this.person2 = data;
    });

    this.form2 = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      descripcion: new FormControl('', [ Validators.required ]),
      estatus: new FormControl('', [ Validators.required])
    });


  }

  get f(){
    return this.form2.controls;
  }

  submit(){
    console.log(this.form2.value);
    this.person2Service.update(this.id2, this.form2.value).subscribe(res => {
         console.log('Person updated successfully!');

         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actualizado con exito',
          showConfirmButton: false,
          timer: 1500
        })

         this.router.navigateByUrl('person2/index');
    })
  }

}


