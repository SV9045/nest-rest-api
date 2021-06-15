import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { Item } from 'src/items/Interfaces/item.interface';
import { ItemsService } from 'src/items/service/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.itemService.getItems();
  }

  @Get(':id')
  getItem(@Param('id') id): Promise<Item> {
    return this.itemService.getItem(id);
  }

  @Post()
  createItem(@Body() createItem: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(createItem);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.updateItem(id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.itemService.deleteItem(id);
  }
}
