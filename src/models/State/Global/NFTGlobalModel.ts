import { NFTStateModel } from "../NFTStateModel";

export class NFTGlobalModel extends Object {
    constructor() {
        super();
        this.NFTList = new Array<NFTStateModel>();    
    }

    NFTList: NFTStateModel[] = [];
}
