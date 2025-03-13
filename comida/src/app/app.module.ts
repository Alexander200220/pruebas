import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ComidaFormComponent } from './Components/comida-form/comida-form.component';
import { ComidaListarComponent } from './Components/comida-listar/comida-listar.component';

import { ComidasService } from './services/comidas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ComidaFormComponent,
    ComidaListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComidasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
