import { AxiosResponse } from "axios";
import apiClient from "../http-common";
import { FolderResponse } from "../models/Response/NFTResponse";


export const GetNFTs = async (): Promise<AxiosResponse<FolderResponse>> => {
    return await apiClient.get('/nft');
}