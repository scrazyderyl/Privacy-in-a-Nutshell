import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

import { category_tooltips, data_tooltips } from './tooltips';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

interface SiteDetails {
  id: string
  name: string
  updated?: string
  breaches?: Link[]
  links?: Link[]
  contacts?: Contact[]
  documents?: Link[]
  overview?: string
  issues?: Issue[]
  data_collected?: Category[]
  usage?: string[]
  third_party?: Third_Party
  protections?: string[]
  rights?: string[]
  laws?: string[]
}

interface Link {
  description: string
  url: string
}

interface Contact {
  description: string
  type: string
  content: string
}

interface Issue {
  content: string
  source: string
  url: string
}

interface Category {
  category: string
  datapoints: string[]
}

interface Third_Party {
  parties: string[],
  other_sources: string[],
}

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  category_tooltips: Map<string, string> = category_tooltips;
  data_tooltips: Map<string, string> = data_tooltips;
  data: Observable<SiteDetails> | undefined;
  datapoints: string[] = [];
  fragment: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private title: Title, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get("id");
    this.data = this.httpClient.get<SiteDetails>(`../assets/data/${id}.json`);

    this.data.subscribe({next: data => {
      this.title.setTitle("Privacy Summary - " + data.name);

      if (data.data_collected) {
        for (let category of data.data_collected) {
          for (let datapoint of category.datapoints) {
            this.datapoints.push(datapoint);
          }
        };
  
        this.datapoints.sort()
      }
    }});
  }

  scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
  }

  openDialog(): void {
    this.matDialog.open(SearchDialogComponent, {
      data: this.datapoints
    });
  }
}