import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private elRef: ElementRef) { }
  ngAfterViewInit() {
    let loader = this.elRef.nativeElement.querySelector('#loader');
    loader.style.display = "none"; //hide loader
    console.log("cargato");
  }
}
