import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControlName,
  Validators,
} from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private NovoUsuarioService: NovoUsuarioService,
    private UsuarioExisteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: [ '',
        [Validators.required, Validators.minLength],
        [this.UsuarioExisteService.usuarioJaExiste()],
      ],
      senha: [''],
      confirmarSenha: [''],
    });
    {
      Validators: [usuarioSenhaIguaisValidator]
    }
  }
  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const NovoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.NovoUsuarioService.cadastraNovoUsuario(NovoUsuario).subscribe(()=>{
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
      );

    }
  }
}
