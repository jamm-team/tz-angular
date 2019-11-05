import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor( ) {}

  resizeContain(w, h, url, x, format?) {
    return this.resize('contain', w, h, url, x, format);
  }

  resizeCover(w, h, url, x, format?): string{
    return this.resize('cover', w, h, url, x, format);
  }

  resizeCoverW(w, url, x, format?): string {
    return this.resize('cover', w, 0, url, x, format);
  }

  resizeCoverH(h, url, x, format?): string {
    return this.resize('cover', 0, h, url, x, format);
  }

  private resize(type, w, h, url, x, format): string {
    if (!url) {
      return null;
    }

    if (x > 1) {
      w = w * x;
      h = h * x;
    }

    let proxyUrl = 'https://image.premiumbonus.su/' + w + 'x' + h;
    if (type === 'contain') {
      proxyUrl = proxyUrl + ',fit';
    }
    if (format) {
      proxyUrl = proxyUrl + ',' + format;
    }

    return proxyUrl + '/' + url;
  }
}
