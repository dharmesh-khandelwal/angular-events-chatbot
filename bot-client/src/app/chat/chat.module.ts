import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { PlacesService } from './places.service';
import { LocationDetailComponent } from './chat-dialog/location-detail/location-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ChatRoutingModule,
  ],
  declarations: [ChatDialogComponent, LocationDetailComponent],
  providers: [ChatService, PlacesService],
  exports: [ChatDialogComponent]
})
export class ChatModule { }
