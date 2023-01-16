import { Component, OnInit } from '@angular/core';

import { Person3Service } from '../person3.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Person3 } from '../person3';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent3 implements OnInit {


  id3: number;
  person3: Person3;
  form3: FormGroup;

  constructor(
    public person3Service: Person3Service,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id3 = this.route.snapshot.params['idPerson'];
    
    this.person3Service.find(this.id3).subscribe((data: Person3)=>{
      this.person3 = data;
    });

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
    this.person3Service.update(this.id3, this.form3.value).subscribe(res => {
         console.log('Person updated successfully!');

         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actualizado con exito',
          showConfirmButton: false,
          timer: 1500
        })

         this.router.navigateByUrl('person3/index');
    })
  }

}


