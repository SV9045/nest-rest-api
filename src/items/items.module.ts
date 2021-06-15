import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from 'src/items/items.controller';
import { ItemSchema } from 'src/items/schemas/item.schema';
import { ItemsService } from 'src/items/service/items.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Item',
        schema: ItemSchema,
      },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
