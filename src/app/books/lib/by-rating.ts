import { Book } from '../models/book';

export function byRating(current: Book, next: Book): number {
  return next.rating - current.rating;
}
