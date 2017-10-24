import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from './../api-service.service';
import forEach from 'lodash/forEach';
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    states = [];
    config = [];
    program =[];
    constructor(public _apiService: ApiServiceService) {}
    ngOnInit() {
        let path = '../assets/jsonData/productionStates.json'
        this._apiService.apiCall(path).subscribe((res) => {}, (error) => {})
        this._apiService.apiCall('../assets/jsonData/states.json').subscribe((res) => {
            forEach(res.data, (value, key) => {
                this.states.push({
                    'key': key,
                    'value': value,
                    'background':(value=='READY')?'green':'red'
                })
            })
        }, (error) => {})
        this._apiService.apiCall('../assets/jsonData/config.json').subscribe((res) => {
            forEach(res, (value, key) => {
                this.config.push({
                    'key': key,
                    'value': value
                })
            })
        }, (error) => {})
        this._apiService.apiCall('../assets/jsonData/program.json').subscribe((res) => {
            forEach(res, (value, key) => {
                this.program.push({
                    'key': key,
                    'value': value
                })
            })
        }, (error) => {})
    }

}
