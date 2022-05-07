import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactComponent } from './contact/contact.component';
import {ContactListModule} from "./contact/contact-list/contact-list.module";
import {DocumentComponent} from "./document/document.component";
import { DocumentListComponent } from './document/document-list/document-list.component';
import { DocumentItemComponent } from './document/document-item/document-item.component';
import { DocumentDetailComponent } from './document/document-detail/document-detail.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageItemComponent } from './message/message-item/message-item.component';
import { MessageEditComponent } from './message/message-edit/message-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactDetailComponent,
    ContactComponent,
    DocumentComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageEditComponent
  ],
  imports: [
    BrowserModule,
    ContactListModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
