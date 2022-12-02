import { Component, OnInit } from '@angular/core'
import { sectors, SiteListing, sites } from './index';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sectors: string[] = sectors;
  results: SiteListing[] = sites;
  query: string = "";
  sector: string = "Any Sector";

  constructor() {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.results = sites.filter(site => (this.query == "" || site.name.toLowerCase().search(this.query.trim().toLowerCase()) != -1) && (this.sector == "Any Sector" || this.sector == site.sector));
  }
}