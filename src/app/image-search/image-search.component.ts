import { Component } from '@angular/core';
import { PhotoSearchService } from '../photo-search.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent {

  searchData: string = "";
  perPage: number = 6;
  photos: any = [];
  constructor(private photoSearchService: PhotoSearchService) { }

  search() {
    this.photoSearchService.getdata(this.searchData, this.perPage).subscribe((response: any) => {
      console.log(response);
      this.photos = response.photos;
    }, (error: Error) => {
      console.log(error);
    })
  }

}
