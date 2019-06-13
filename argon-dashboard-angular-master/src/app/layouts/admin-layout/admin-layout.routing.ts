import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminEquipoComponent } from 'src/app/pages/admin-equipo/admin-equipo.component';
import { ReportesComponent } from 'src/app/pages/admin-equipo/reportes/reportes.component';
import { VerTorneoComponent } from 'src/app/pages/icons/ver-torneo/ver-torneo.component';
import { CrearTorneoComponent } from 'src/app/pages/icons/crear-torneo/crear-torneo.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'admin-equipo',           component: AdminEquipoComponent },
    { path: 'reportes',           component: ReportesComponent },
    { path: 'ver-torneo',           component: VerTorneoComponent },
    { path: 'crear-torneo',           component: CrearTorneoComponent },
];
