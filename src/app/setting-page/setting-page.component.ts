import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from './../api-service.service';
import forEach from 'lodash/forEach';
@Component({
    selector: 'app-setting-page',
    templateUrl: './setting-page.component.html',
    styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent implements OnInit {
    configServer = [];
    program = [];
    constructor(public _apiService: ApiServiceService) {}

    ngOnInit() {
        this._apiService.apiCall('serverConfig.json').subscribe((res) => {
            forEach(res, (value, key) => {
                this.configServer.push({
                    'key': key,
                    'value': value
                })
            })
        }, (error) => {})
        this._apiService.apiCall('program.json').subscribe((res) => {
            forEach(res, (value, key) => {
                this.program.push({
                    'key': key,
                    'value': value
                })
            })
        }, (error) => {})
    }

}
