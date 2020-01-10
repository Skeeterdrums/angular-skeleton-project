import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  public static readonly TIMEOUT = 2000;

  constructor(private toastr: ToastrService) {}

  success(message: string) {
    this.toastr.success(message, 'title', {
      timeOut: ToastService.TIMEOUT
    });
  }

  error(message: string) {
    this.toastr.error(message, 'title', {
      timeOut: ToastService.TIMEOUT
    });
  }
}
