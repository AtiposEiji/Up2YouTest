import { defineComponent } from "vue";
import Heading from "../../components/Heading/index.vue";
import CustomTable from "../../components/CustomTable/index.vue";

export default defineComponent({
    name: 'Dashboard',
    components: {
        Heading,
        CustomTable
    },
    setup() {

        return {
        }
    }
});
