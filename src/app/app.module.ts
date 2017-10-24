import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ApiServiceService} from './api-service.service';
const appRoutes: Routes = [
    {path: 'main-page', component: MainPageComponent},
    {
        path: '',
        redirectTo: '/main-page',
        pathMatch: 'full'
    },
    {path: '**', component: MainPageComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent],
    imports: [
        BrowserModule, RouterModule.forRoot(
            appRoutes), HttpModule
    ],
    providers: [ApiServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {}
