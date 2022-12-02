import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
  datapoints: string[];
  query: string = "";
  results: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private data: string[], private matDialogRef: MatDialogRef<SearchDialogComponent>) {
    this.datapoints = data;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.matDialogRef.close();
  }

  search(): void {
    if (this.query.length >= 2) {
      this.results = this.datapoints.filter(datapoint => datapoint.toLowerCase().search(this.query.trim().toLowerCase()) != -1);
    } else {
      this.results = [];
    }
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }
}