import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-tests',
    templateUrl: 'tests-history.html',
})
export class TestsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TestsPage');
    }

}