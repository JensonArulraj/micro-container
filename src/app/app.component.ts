import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-container';

  currentPage:string = 'bundle';
  constructor(){}

  ngOnInit() {
    this.setCurrentPage();
  }

  setCurrentPage() {
    const url = window.location.href;
    this.currentPage = url.includes('company')?'company':this.currentPage;
  }

  navigate(page:string) {
    this.currentPage = page;
  }

}
