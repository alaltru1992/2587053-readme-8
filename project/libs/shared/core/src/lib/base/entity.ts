export class Entity{
  private _id = '';

  public get() : string {
    return this._id
  }

  public set(id: string) {
     this._id = id;
  }
}
