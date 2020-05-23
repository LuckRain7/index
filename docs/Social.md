# 社交平台

<div v-for="(item,index) in SocialData" :key="index" class="shield">
    <a :href="item.url" target="_blank" rel="noopener noreferrer">
        <img style="width:auto;height:25px;" :src="item.img"/>
    </a>
</div>

<style>
.shield{
    margin:20px 0;
}
</style>
<script>
import {SocialData} from '../data.js'
export default {
    data(){
        return {
            SocialData:SocialData
        }
    },
}
</script>
