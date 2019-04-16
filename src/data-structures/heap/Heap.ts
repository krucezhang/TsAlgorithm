import { Comparator } from "../../utils/Comparator";

class Heap {

    public heapContainer: any[] = [];
    public compare: Comparator = null;

    constructor(comparatorFunction?: Function) {
        if(new.target === Heap){
            throw new TypeError('Cannot construct Heap instance directly');
        }

        console.log(JSON.stringify(new.target));

        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }


}


export { Heap };