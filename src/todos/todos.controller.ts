/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TodoCreate, TodoItem } from '../models';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor(private service: TodosService) { }
    @Get()
    getAll(): { data: TodoItem[] } {
        return {
            data: this.service.getAll()
        }
    }

    @Post()
    addOne(@Body() todo: TodoCreate): TodoItem {
        const result = this.service.add(todo);
        return result;
    }

    @Delete('/:id')
    removeOne(id: string) {
        this.service.remove(id);
    }
}
