import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './core/guards/admin.guard';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ProfileComponent } from './profile/profile.component';
import { ValidateComponent } from './validate/validate.component';




const routes: Routes = [

  {
    path: 'dummy',
    redirectTo: 'academy-manager',
    canActivate: [AuthGuard]
  },
  {
    path: 'academy-manager',
    loadChildren: () => import('./academy-manager/academy-manager.module').then(m => m.AcademyManagerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lessons',
    loadChildren: () => import('./gestao-aulas/gestao-aulas.module').then(m => m.GestaoAulasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'questionario',
    loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnaireModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'validate/:id',
    component: ValidateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
