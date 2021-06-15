import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/items/Interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  private readonly items: Item[];

  async getItems(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async getItem(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async createItem(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async updateItem(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async deleteItem(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}
