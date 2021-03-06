import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetronomePage } from './main/metronome.page';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MetroModalComponent } from './metro-modal/metro-modal.component';
import { MetronomeInfoComponent } from './info/metronome-info.component';
import { MetronomeModalInfoComponent } from './modal-info/metronome-modal-info.component';
import { TranslateModule } from '@ngx-translate/core';
import { HammerModule } from '@angular/platform-browser';
import { LongpressDirective } from 'src/app/services/longpress.directive';
import { DragDirective } from 'src/app/services/drag.directive';

const routes: Routes = [
  {
    path: '',
    component: MetronomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MetronomePage, MetronomeInfoComponent, MetroModalComponent, MetronomeModalInfoComponent, LongpressDirective, DragDirective]
})
export class MetronomePageModule { }
