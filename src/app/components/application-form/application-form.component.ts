import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'application-form',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent {
  applicationForm!: FormGroup;

  constructor() {
    this.applicationForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', Validators.required),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/^\d+$/)
      ]),

      cep: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.applicationForm.value);
  }

}
