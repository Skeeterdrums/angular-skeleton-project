import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from '../shared/shared.module';
import { LoginHistoryComponent } from './login-history.component';
import { LoginHistoryService } from './login-history.service';
import { LoginHistoryRoutes } from './routes';

@NgModule({
  imports: [RouterModule.forChild(LoginHistoryRoutes), SharedModule],
  declarations: [LoginHistoryComponent],
  providers: [LoginHistoryService]
})
export class LoginHistoryModule {}
