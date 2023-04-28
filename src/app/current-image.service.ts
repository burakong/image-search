import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentImageService {
  private _currentImg: any;

  constructor() { }

  setCurrentImg(img: any) {
    this._currentImg = img;
  }

  getCurrentImg() {
    return this._currentImg;
  }
}
