import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { appRouter, routes } from '../routes/routes';
import { NoticiasComponent } from '../pages/noticias/noticias.component';
import { EditorialComponent } from '../pages/editorial/editorial.component';
import { MemoriasComponent } from '../pages/memorias/memorias.component';
import { TendenciasComponent } from '../pages/tendencias/tendencias.component';
import { ArticleComponent } from '../pages/articulos/articulos.component';
import { HistoriasComponent } from '../pages/historias/historias.component';
import { HeaderComponent } from '../global/header/header.component';
import { OpinionComponent } from '../pages/opinion/opinion.component';
import { ContenidoComponent } from '../pages/contenido/contenido.component';
import { ContenidoAuxComponent } from '../pages/contenidoAuxiliar/contentAux.component';
import { OpineContentComponent } from '../pages/opineContent/opineContent.component';
import { EntrevistaComponent } from '../pages/entrevistas/entrevistas.component';
import { ContentHistoryComponent } from '../pages/contentHistory/contentHistory.component';
import { ContentEntrevistaComponent } from '../pages/contentEntrevista/contentEntrevista.component';
import { FooterComponent } from '../global/footer/footer.component';
import { ContentTendencyOneComponent } from '../pages/contenidoTendencyOne/contentTendencyOne.component';
import { ContentTendencyTwoComponent } from '../pages/contenidoTendencyTwo/contentTendencyTwo.component';
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::. servicios ::::::::::::::::::::::::::::::::::::
import { NoticeService } from '../services/notices.services';
import { InmuebleService } from '../services/inmueble.services';
import { LogoService } from '../services/logo.services';
import { OpinionService } from '../services/opinion.services';
import { EntrevistaService } from '../services/entrevistas.services';
import { HistoriyService } from '../services/histories.services';
import { TendencyService } from '../services/tendency.services';
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import { SearchPipe } from '../pipes/pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    EditorialComponent,
    MemoriasComponent,
    TendenciasComponent,
    ArticleComponent,
    HistoriasComponent,
    SearchPipe,
    HeaderComponent,
    OpinionComponent,
    ContenidoComponent,
    ContenidoAuxComponent,
    OpineContentComponent,
    EntrevistaComponent,
    ContentHistoryComponent,
    ContentEntrevistaComponent,
    FooterComponent,
    ContentTendencyOneComponent,
    ContentTendencyTwoComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [
    appRouter,
    NoticeService,
    InmuebleService,
    LogoService,
    OpinionService,
    EntrevistaService,
    HistoriyService,
    TendencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
