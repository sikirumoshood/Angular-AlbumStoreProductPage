import { Http, Response } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
	_albumUrl = '../assets/album.json';
	constructor(@Inject(Http) private _http: Http) {}
	getAlbum(id: number) {
		return this._http.get(this._albumUrl).pipe(map((response: Response) => response.json()));
	}
}
