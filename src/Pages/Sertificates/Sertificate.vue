<template>
    <div class="page">
        <div class="page__top d-flex a-item j-between">
            <h2 class="page__title">Statistics</h2>
            <button class="create-button" @click="openModalFunc">Create Statistics</button>
        </div>
        <div class="page-bottom">
            <div class="table">
                <div class="table-header">
                    <div class="row">
                        <div class="cell">Title</div>
                        <div class="cell">Number</div>
                        <div class="cell">Info</div>
                        <div class="cell d-flex j-end">Buttons</div>
                    </div>
                </div>
                <div class="table-body">
                    <div class="row" v-for="data in statistics" :key="data.id">
                        <div class="cell" :title="data.title">{{ data?.title.slice(0,20) }}...</div>
                        <!-- {{data}} -->
                        <div class="cell" :title="data.subtitle">{{ data?.subtitle.slice(0,15) }}...</div> 
                        <div class="cell">{{ data?.integer }}</div>
                        <div class="cell d-flex gap12 j-end">
                            <Icons name="edit" class="icon info"/>
                            <Icons name="deleted" class="icon danger"/>

                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <StatisticsModal v-if="openModal" @close="openModal=event"/> -->
</template>
<script>
import axios from '@/Utils/axios';
import Icons from '@/components/Icons.vue';
export default {
    name:"SertificatePage",
    components:{
        Icons
    },
    data(){
        return{
            statistics:[],
            openModal:false
        }
    },
    methods:{
        async getAllStatistics(){
            let response = await axios.get('/statistics')
            this.statistics=response?.data
        },
        openModalFunc(){
            this.openModal=!this.openModal
            console.log(this.openModal);
            
        }
    },
    mounted(){
        this.getAllStatistics()
        

    }
}
</script>
<style >
    
</style>