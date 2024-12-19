import {Entity} from "../../../core/src/lib/base/entity";

export interface RepositoryInterface<T extends Entity> {
  findById(id: T['id']): Promise<T | null>;
  save(entity:T): Promise<void>;
  update(entity: T): Promise<void>;
  delete(id: T['id']): Promise<void>;

}
