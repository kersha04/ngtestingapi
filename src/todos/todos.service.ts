/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as cuid from 'cuid';
import { TodoCreate, TodoItem } from '../models';

@Injectable()
export class TodosService {
    data: TodoItem[] = [
        { id: 'cklz8vjxp0000y0w68dwafcwf', description: 'Clean Garage' },
        { id: 'cklz8w6rx0001y0w66gf4gdyo', description: 'Pressure-Wash Shed' }
    ];

    getAll(): TodoItem[] {
        return this.data;
    }

    add(todo: TodoCreate): TodoItem {
        const newItem: TodoItem = {
            ...todo,
            id: cuid()
        };
        this.data = [newItem, ...this.data];
        return newItem;
    }

    remove(id: string): void {
        this.data = this.data.filter(i => i.id !== id);
    }
}
