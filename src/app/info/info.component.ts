import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SiteDetails } from '../viewer/viewer.component';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

const category_tooltips: Map<string, string> = new Map<string, string>([
  ["Biographical", "Attributes that can be used to identify a person and information about their experiences"],
  ["Behavioral", "Lifestyle and user interaction patterns"],
  ["Consumer", "Preferences related to services and products"],
  ["Financial", "Payment details and information about finances and taxes"],
  ["Health", "Medical condition and history"],
  ["Biometric", "Physical features"],
  ["Device", "Details and identifiers for the device that is accessing a service"]
]);

const data_tooltips: Map<string, string> = new Map<string, string>([
  ["IP Address", "A unique identifier for an internet connection"]
]);

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, AfterViewInit {
  category_tooltips: Map<string, string> = category_tooltips;
  data_tooltips: Map<string, string> = data_tooltips;
  @Input() data!: SiteDetails;
  datapoints: string[] = [];

  constructor(private title: Title, private matDialog: MatDialog, private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit(): void {      
    this.title.setTitle("Privacy Summary - " + this.data.name);

    if (this.data.data_collected) {
      for (let category of this.data.data_collected) {
        for (let datapoint of category.datapoints) {
          this.datapoints.push(datapoint);
        }
      };

      this.datapoints.sort();
    }
  }

  ngAfterViewInit(): void {
    this.activatedRoute.fragment.subscribe({next: fragment => {
      if (fragment) {
        this.jumpTo(fragment);
      }
    }});
  }

  jumpTo(id: string) {
    var element: HTMLElement | null = document.getElementById(id);

    if (element) {
      element.scrollIntoView();
    }
  }

  scrollTo(id: string) {
    var url = this.router.createUrlTree([], {relativeTo: this.activatedRoute, fragment: id}).toString();
    this.location.go(url);
    var element: HTMLElement | null = document.getElementById(id);

    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  openDialog(): void {
    this.matDialog.open(SearchDialogComponent, {
      data: this.datapoints
    });
  }
}