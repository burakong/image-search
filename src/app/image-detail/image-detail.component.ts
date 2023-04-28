import { Component, OnInit } from '@angular/core';
import { CurrentImageService } from '../current-image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  public img!: any;

  constructor(private _currentImageService: CurrentImageService) { }

  ngOnInit(): void {
    this.img = this._currentImageService.getCurrentImg();
  }

  setBackgroundImg() {
    return { 'background-image': 'url(' + this.img.src.original + ')' };
  }

}
