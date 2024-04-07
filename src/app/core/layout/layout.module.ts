import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'converter'
        },
      {
        path: 'converter',
        loadChildren: () =>
          import('../../features/convert/convert.module').then(
            (m) => m.ConvertModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule],
})
export class LayoutModule {}
