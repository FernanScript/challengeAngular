import { Categories } from "./category.interface";

export interface Tasks {
    name : string;
    description : string;
    category : Categories;
    fechaFin : Date;
}