import { Injectable } from '@angular/core';

@Injectable()
export class LoginHistoryService {
  private logins: Array<Date> = [new Date(), new Date(), new Date()];

  getLogins(): Array<Date> {
    return this.logins;
  }
}
