<template>
    <div class="container bodypadding">
        <!-- 聯絡我們 -->  
        <Map></Map>
        <hr class="featurette-divider">  
        <SendMail></SendMail>
    </div>
</template>
<script>
import SendMail from './floor2/FrontSendMail';
import Map from './floor2/FrontMap';
export default {
    components: {
        SendMail,Map
    },
}
</script>