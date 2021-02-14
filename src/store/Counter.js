import { makeAutoObservable } from "mobx";


class Counter {
    count = 0;

    count_value_total = 0;
    constructor(){
        //отслеживаемый класс (makeObservable(настройки))
        //автоматическая настройка отслеживания
        makeAutoObservable(this);
    };
    //auto update count and render component
    Increment(){
        this.count += 1;
        console.log(this.count);
    };

    Decrement(){
        this.count -= 1;
        console.log(this.count);
    };

    //computing method - вычисляемый метод
    get total() {
        return `Count total ${this.count + this.count_value_total}`
    }
}

export default new Counter();