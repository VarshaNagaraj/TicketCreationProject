import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListUserStoryPage } from './list-user-story';

@NgModule({
  declarations: [
    ListUserStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ListUserStoryPage),
  ],
})
export class ListUserStoryPageModule {}
