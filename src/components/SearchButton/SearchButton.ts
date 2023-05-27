import { defineComponent, ref} from "vue";
import { useNFTStoreModule } from "../../stores/NFTStoreModule";
import { GetNFTs } from "../../services/CustomTableService";
import { NFTStateModel } from "../../models/State/NFTStateModel";

export default defineComponent({
    name: 'SearchButton',
    setup() {
      const nftsStore = useNFTStoreModule();
      const searchText = ref("");

      const getNFTs = () => {
        GetNFTs().then(({ data }) => {
            data.data.forEach((element) => {
                const nft = Object.assign(new NFTStateModel(), element);
                if (!nftsStore.nfts.NFTList.some((x) => x.internal_id === nft.internal_id)) {
                    nftsStore.nfts.NFTList.push(nft);
                }
              });
          
        });
      };
  
      const updateSearchText = () => {
        nftsStore.searchText = searchText.value;
        if (searchText.value === "") {
          getNFTs();
        } else {
          nftsStore.nfts.NFTList = nftsStore.filterNFTs();
        }
      };
  
      return {
        searchText,
        updateSearchText
      };
    }
  });
