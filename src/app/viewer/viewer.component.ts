import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SiteDetails {
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
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent {
  siteDetails: Observable<SiteDetails> | undefined;
  error: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    var id = this.activatedRoute.snapshot.paramMap.get("id");
    this.siteDetails = this.httpClient.get<SiteDetails>(`../assets/data/${id}.json`);
    
    this.siteDetails.subscribe({
      error: () => {
        this.error = true;
      }
    })
  }
}