import { Component, OnInit } from '@angular/core';

import { Person3Service } from '../person3.service';
import { Person3 } from '../person3';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent3 implements OnInit {

  persons3: Person3[] = [];
 
  constructor(public person3Service: Person3Service) { }


  ngOnInit(): void {
    this.person3Service.getAll().subscribe((data: Person3[])=>{
      this.persons3 = data;
      console.log(this.persons3);
    })
  }

  deletePerson3(id){
   
    this.person3Service.delete(id).subscribe(res => {
         this.persons3 = this.persons3.filter(item => item.id !== id);
         console.log('Person deleted successfully!');

         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Personal eliminado',
          showConfirmButton: false,
          timer: 1500
        })


    })
  }

}
