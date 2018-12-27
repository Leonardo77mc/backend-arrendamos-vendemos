import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NoticiasComponent } from '../pages/noticias/noticias.component';
import { EditorialComponent } from 'pages/editorial/editorial.component';
import { ArticleComponent } from '../pages/articulos/articulos.component';
import { TendenciasComponent } from '../pages/tendencias/tendencias.component';
import { HistoriasComponent } from '../pages/historias/historias.component';
import {OpinionComponent} from '../pages/opinion/opinion.component';
import {ContenidoComponent} from '../pages/contenido/contenido.component';
import {ContenidoAuxComponent} from '../pages/contenidoAuxiliar/contentAux.component';
import {OpineContentComponent} from '../pages/opineContent/opineContent.component';
import {ContentHistoryComponent} from '../pages/contentHistory/contentHistory.component';
import {ContentEntrevistaComponent} from '../pages/contentEntrevista/contentEntrevista.component';
import {ContentTendencyOneComponent} from '../pages/contenidoTendencyOne/contentTendencyOne.component';
import {ContentTendencyTwoComponent} from '../pages/contenidoTendencyTwo/contentTendencyTwo.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'notices', component: NoticiasComponent},
    {path: 'editorial', component: EditorialComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'tendency', component: TendenciasComponent},
    {path: 'history', component: HistoriasComponent},
    {path: 'opinion', component: OpinionComponent},
    {path: 'content', component: ContenidoComponent },
    {path: 'contentAux', component: ContenidoAuxComponent },
    {path: 'opineContent', component: OpineContentComponent },
    {path: 'historyContent', component: ContentHistoryComponent },
    {path: 'entrevistaContent', component: ContentEntrevistaComponent },
    {path: 'tendencyOneContent', component: ContentTendencyOneComponent },
    {path: 'tendencyTwoContent', component: ContentTendencyTwoComponent },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const appRouter: any[] = [];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
