import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';

const routes: Routes = [
  // {
  // path: 'analyst',
  // loadChildren: () =>import('./analyst/analyst.module').then(m => m.AnalystModule)
  //  },
   {path: 'login',
    loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  // { path: 'sme', loadChildren: () => import('./Modules/sme/sme.module').then(m => m.SmeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
