import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ApiServiceService} from './api-service.service';
import {SettingPageComponent} from './setting-page/setting-page.component';

const appRoutes: Routes = [
    {path: 'main-page', component: MainPageComponent},
    {path: 'setting-page', component: SettingPageComponent},
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
        MainPageComponent,
        SettingPageComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(
            appRoutes, { useHash: true }), HttpModule
    ],
    providers: [ApiServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {}
