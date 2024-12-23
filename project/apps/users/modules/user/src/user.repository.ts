import {BaseMemoryRepository} from "@project/data-access";
import {UserEntity} from "../src";
import {UserFactory} from "../src";

export class UserRepository extends BaseMemoryRepository<UserEntity>{
  constructor(entityFactory: UserFactory) {
    super(entityFactory);
  }

  async findUserByEmail(email: string): Promise<UserEntity | null>{
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);

    if (! user) {
      return null;
    }

    return this.entityFactory.create(user);
  }
}
