import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUserStoryPage } from './create-user-story';

@NgModule({
  declarations: [
    CreateUserStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUserStoryPage),
  ],
})
export class CreateUserStoryPageModule {}
