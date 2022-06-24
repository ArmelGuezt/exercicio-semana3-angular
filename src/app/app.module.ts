import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListagemCadastrosComponent } from './listagem-cadastros/listagem-cadastros.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListagemCadastrosComponent,
    SharedComponent,
    ComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
