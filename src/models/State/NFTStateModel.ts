import { Details } from '../Details';
import { NFT } from '../NFT';

export class NFTStateModel extends Object implements NFT {
    internal_id!: number;
    image!: string;
    details!: Details;
    standard_full!: string;
    formatted_quantity_kg!: string;
}
