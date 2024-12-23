import { randomUUID } from 'node:crypto';
import {Entity} from "../../../core/src/lib/base/entity";
import {EntityFactory, StorableEntity} from "@project/core";
import {RepositoryInterface} from './repository.interface';

export abstract class BaseMemoryRepository<T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>> implements RepositoryInterface<T>{
  protected entities: Map<T['id'], ReturnType<T['toPOJO']>> = new Map();

  constructor(
    protected entityFactory: EntityFactory<T>
  ) {}

  public async findById(id: T['id']): Promise<T>{
    const entity = this.entities.get(id) || null;
    if(!entity){
      return null;
    }
    return this.entityFactory.create(entity)
  }
  public async save(entity: T): Promise<void> {
    if (! entity.id) {
      entity.id = randomUUID();
    }

    this.entities.set(entity.id, entity.toPOJO());
  }
  public async update(entity: T): Promise<void>{
    if (! this.entities.has(entity.id)) {
      throw new Error('Entity not found');
    }

    this.entities.set(entity.id, entity.toPOJO());
  }
  async delete(id: T['id']): Promise<void>{
    if (! this.entities.has(id)) {
      throw new Error('Entity not found');
    }
    this.entities.delete(id)
  }
}
