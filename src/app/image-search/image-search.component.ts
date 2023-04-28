import { Component, OnDestroy } from '@angular/core';
import { PhotoSearchService } from '../photo-search.service';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { CurrentImageService } from '../current-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnDestroy {

  public searchData: string = "";
  public perPage: number = 6;
  public photos: any = [];
  private _unsubscribe$: Subject<void> = new Subject();
  constructor(private _photoSearchService: PhotoSearchService,
    private _currentImageService: CurrentImageService, private _router: Router) { }

  search() {
    if (this.searchData.length >= 1) {
      this._photoSearchService.getdata(this.searchData, this.perPage).pipe(take(1),
        takeUntil(this._unsubscribe$),
        tap((response: any) => {
          console.log(response.photos);
          this.photos = response.photos;
        }))
        .subscribe();
    }
  }

  onImgDetails(img: any) {
    this._currentImageService.setCurrentImg(img);
    this._router.navigate(['image-detail/' + img.id]);
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
