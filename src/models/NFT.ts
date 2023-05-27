import { Details } from "./Details";

export interface NFT {
    internal_id: number;
    image: string;
    details: Details;
    standard_full: string;
    formatted_quantity_kg: string;

}