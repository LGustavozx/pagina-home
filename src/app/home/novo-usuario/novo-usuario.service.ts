import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http:HttpClient) { }

  cadastraNovoUsuario(novoUsuario:NovoUsuario) {
    return this.http.post('http://localhost:3333/api/v1/user/signup', novoUsuario);
  }

  verificaUsuarioExistente (nomeUsuario: string) {
    return this.http.get(`http://localhost:3333/api/v1/user/exists/${nomeUsuario}`);
  }
}

