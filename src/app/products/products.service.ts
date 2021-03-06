import {Injectable} from '@angular/core';
import {IProduct} from './products';

//this is used send and receive data usinf http  request
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ProductService{
 
    private productUrl='assets/products.json';

    constructor(private http:HttpClient){ }

    //this observable is used to send data synchrnously .only one array data pass using Observable 
    getProducts():Observable<IProduct[]> {
    
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    
       
    }


  private handleError(err : HttpErrorResponse){
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
            errorMessage=`An occured : ${err.error.message}`

      }else{
            
           errorMessage=`Server returned code : ${err.status}, error message is : ${err.message}`;
      }

      console.error(errorMessage);
      return throwError(errorMessage);
  }

    /*   getProducts():IProduct[]{
        return[

            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95232,
                "starRating": 3.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
              },
              {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
              },
              {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
              },
              {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
              },
              {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
              }
            
        ]
    }*/
}