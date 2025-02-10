import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/navigation/navigation.component')
      .then(m => m.NavigationComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component')
          .then(m => m.DashboardComponent)
      },
      {
        path: 'tree',
        loadComponent: () => import('./features/tree/tree.component')
          .then(m => m.TreeComponent)
      },
      {
        path: 'drag-drop',
        loadComponent: () => import('./features/drag-drop/drag-drop.component')
          .then(m => m.DragDropComponent)
      },
      {
        path: 'address-form',
        loadComponent: () => import('./features/address-form/address-form.component')
          .then(m => m.AddressFormComponent)
      },
      {
        path: 'table',
        loadComponent: () => import('./features/table/table.component')
          .then(m => m.TableComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
