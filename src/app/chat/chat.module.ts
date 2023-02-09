import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatMensagemComponent } from './chat-mensagem/chat-mensagem.component';


@NgModule({
  declarations: [
    ChatMensagemComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
