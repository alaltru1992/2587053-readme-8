import {UserInterface} from './user.interface'
import {CommentInterface} from './comment.interface'
import {CategoryEnum} from './category.enum'
export interface PostInterface{
  id?: string
  user: UserInterface,
  comments: CommentInterface [],
  category: CategoryEnum,
  likes: number,
  img: string,
  tags: string [],
}
