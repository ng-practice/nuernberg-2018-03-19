export class Book {
  private _rating = 0;

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    if (this._isNewRatingInRange(value, 0, 5)) {
      this._rating = value;
    } else {
      this._rating = 0;
    }
  }

  constructor(
    public isbn: string,
    public title: string,
    public subtitle: string,
    public authors: string[],
    public price: number,
    public description: string,
    rating = 0,
    public publishedAt = new Date(),
    public cover: string
  ) {
    this.rating = rating;
  }

  private _isNewRatingInRange(value: number, min: number, max: number) {
    if (value > max || value < min) {
      return false;
    }

    return true;
  }
}
