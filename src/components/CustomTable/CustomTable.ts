import { computed, defineComponent } from "vue";
import { useNFTStoreModule } from "../../stores/NFTStoreModule";
import { GetNFTs } from "../../services/CustomTableService";
import { NFTStateModel } from "../../models/State/NFTStateModel";
import SearchButton from "../SearchButton/index.vue";

export default defineComponent({
    name: 'CustomTable',
    components: {
        SearchButton
    },
    setup() {
        const nftsStore = useNFTStoreModule();

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

        getNFTs();

        return {
            currentNFTs: computed(() => nftsStore.nfts.NFTList),
        }
    }
});
