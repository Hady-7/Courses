export interface ICourse{
  id: number,
  courseName: string,
  author: string,
  actualPrice: number,
  discountPercentage: number,
  tags: string[],
  isAddedToWishlist: boolean,
  isAddedToCart: boolean,
}
