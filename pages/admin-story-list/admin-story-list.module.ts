import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminStoryListPage } from './admin-story-list';

@NgModule({
  declarations: [
    AdminStoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminStoryListPage),
  ],
})
export class AdminStoryListPageModule {}
