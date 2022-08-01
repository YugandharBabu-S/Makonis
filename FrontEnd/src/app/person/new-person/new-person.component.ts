import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  personForm: FormGroup;
  person: any;
  errorMessage: any;
  hasError: any = false;
  personService: PersonService;
  submitted = false;

  constructor(private fb: FormBuilder , private pservice: PersonService, private router: Router) {
    this.personService = pservice;
    this.createPersonForm();
  }
  ngOnInit(): void {  }

  createPersonForm(): any{
    this.personForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      lastName: [null, Validators.compose([Validators.required , Validators.minLength(1), Validators.maxLength(50)])]
   });
  }

  redirectToPersonList(){
    this.router.navigateByUrl('/');
  }

  resetForm(): any{
   this.submitted = false;
   this.personForm.reset();
  }

  AddPerson() {
    this.submitted = true;
    if (this.personForm.invalid) {
      return;
    }
    if ( this.personForm.valid && this.personForm.dirty) {
         const person = {...this.person, ...this.personForm.value };
         this.personService.createPerson(person).subscribe({
        next: data => {
            this.router.navigateByUrl('/');
        },
        error: error => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
           errorMessage = 'Error:' + error.error.message;
          } else {
            // server-side error
            errorMessage = 'Error Code: ' + error.status + ' \n Message: ' + error.message;
          }
          alert(errorMessage);
        }
        });

    }

  }
}
