import { defineStore } from "pinia";
import { NFTGlobalModel } from "../models/State/Global/NFTGlobalModel";

export const useNFTStoreModule = defineStore("nft", {
  state: () => {
    return {
      nfts: new NFTGlobalModel(),
      searchText: ""
    };
  },
  actions: {
    filterNFTs() {
      const searchText = this.searchText.toLowerCase();
      return this.nfts.NFTList.filter(nft =>
        nft.internal_id.toString().toLowerCase().includes(searchText) ||
        nft.details.entity_name.toLowerCase().includes(searchText) ||
        nft.formatted_quantity_kg.toLowerCase().includes(searchText) ||
        nft.details.project_name.toLowerCase().includes(searchText) ||
        nft.standard_full.toLowerCase().includes(searchText) ||
        nft.details.project_type.toLowerCase().includes(searchText) ||
        nft.details.country_name.toLowerCase().includes(searchText) ||
        nft.details.transaction_datetime.toLowerCase().includes(searchText)
      );
    }
  }
});
