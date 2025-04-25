<template>
    <div class="page">
        <div class="page__top d-flex a-item j-between">
            <h2 class="page__title">Statistics</h2>
            <button class="create-button">Create Statistics</button>
        </div>
        <div class="page-bottom">
            <div class="table">
                <div class="table-header">
                    <div class="row">
                        <div class="cell">No</div>
                        <div class="cell">Title</div>
                        <div class="cell">Number</div>
                        <div class="cell">Info</div>
                        <div class="cell">Buttons</div>
                    </div>
                </div>
                <div class="table-body"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '@/Utils/axios';
export default {
    name:"StatisticsPage",
    data(){
        return{
            statistics:[]
        }
    },
    methods:{
        async getAllStatistics(){
            let response = await axios.get('/statistics')
            this.statistics=response?.data
        }
    },
    mounted(){
        this.getAllStatistics()
        

    }
}
</script>
<style >
    
</style>