import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  constructor(public r: Router, public http: HttpClient) { }
  public incrementCounter() {

    let url = "http://localhost:3439/api/Usuario/autenticar"
    console.log(url)
    var request = new Object
    request['username'] = "root"
    request['password'] = "Aezakami123"

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }


    //this.r.navigate(['/'])

    this.http.post(url, request, httpOptions).subscribe(done => {
      console.log(done)
    },
      err => {
        console.log(err)
      })

    this.currentCount++;
  }

  ngOnInit() {
    $('#mrecursoshumanos').children().addClass('active');
    $('#mpersona').children().addClass('active');
  }
}
