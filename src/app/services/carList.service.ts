import {ICarsList, carList} from '../module/carList.modulel'; 


export class CarService {
carList: ICarsList[] = carList;

  getCars(): ICarsList[] {
    return this.carList;}
};

