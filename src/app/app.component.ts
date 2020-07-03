import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeAutomation';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('http://192.168.1.30:4012/api/homeAuto/ip').subscribe((res: any[]) => {
      console.log(res)
    })
    };
}
