export class Movie {
  id: number;
  name: string;
  description : string;
  imageUrl : string;

  constructor(_id: number, _name: string, _description : string,
    _imageUrl : string){
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.imageUrl = _imageUrl;
  }
}
