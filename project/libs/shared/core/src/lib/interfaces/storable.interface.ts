export interface StorableEntity<T>{
  id: string,
  toPOJO(): T,
}
