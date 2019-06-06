import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot({
		timeOut:3000,
		positionClass: 'toast-bottom-left',
		preventDuplicates: true
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
