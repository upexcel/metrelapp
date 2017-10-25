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
    program = [];
    productionState = {};
    prodStatesData: any;
    constructor(public _apiService: ApiServiceService) {}
    ngOnInit() {
        this._apiService.apiCall('productionStates.json').subscribe((res) => {
            forEach(res, (val, keyData) => {
                if (!this.productionState[keyData]) {
                    this.productionState[keyData] = [];
                }
                forEach(val, (value, key) => {
                    this.productionState[keyData].push({
                        'key': key,
                        'value': value
                    })
                })
                this.prodStatesData = this.productionState["STATUSBAR"][0].value;
            })
        }, (error) => {})
        this._apiService.apiCall('states.json').subscribe((res) => {
            forEach(res.data, (value, key) => {
                this.states.push({
                    'key': key,
                    'value': value,
                    'background': (value == 'READY') ? '#7ece4b' : 'red'
                })
            })
        }, (error) => {})
        this._apiService.apiCall('config.json').subscribe((res) => {
            forEach(res, (value, key) => {
                this.config.push({
                    'key': key,
                    'value': value
                })
            })
        }, (error) => {})
        this._apiService.apiCall('program.json').subscribe((res) => {
            let count = 0;
            let data = [];
            forEach(res, (value, key) => {
                count++;
                if (count % 3 != 0) {
                    data.push({
                        'key': key,
                        'value': value,
                        'val': (count % 3 == 0) ? 1 : 0
                    })
                } else {
                    data.push({
                        'key': key,
                        'value': value,
                        'val': (count % 3 == 0) ? 1 : 0
                    })
                    this.program.push(data);
                    data = [];
                }
            })
        }, (error) => {})
    }
    changeMetrel(prodStatesData) {
        this.prodStatesData = prodStatesData;
    }
}

