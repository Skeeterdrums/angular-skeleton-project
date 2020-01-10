import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { ToastService } from './toast.service';

@NgModule({
  declarations: [LoadingIconComponent],
  imports: [CommonModule, BrowserModule, ToastrModule.forRoot()],
  exports: [CommonModule, FormsModule, HttpClientModule, LoadingIconComponent, BrowserAnimationsModule],
  providers: [ToastService]
})
export class SharedModule {}
