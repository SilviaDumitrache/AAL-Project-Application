import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMedPage } from './chat-med.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMedPageRoutingModule {}
