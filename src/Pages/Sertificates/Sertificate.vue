<template>
    <div class="page">
        <div class="page__top d-flex a-item j-between">
            <h2 class="page__title">Sertificates</h2>
            <button class="create-button" @click="openModalFunc">Create Sertificate</button>
        </div>
        <div class="page-bottom">
            <div class="table scroll">
                <div class="table-header">
                    <div class="row">
                        <div class="cell">ID</div>
                        <div class="cell">Name</div>
                        <div class="cell">Role</div>
                        <div class="cell">Date</div>
                        <div class="cell d-flex j-end"></div>
                    </div>
                </div>
                <div class="table-body">
                    <div class="row" v-for="data in statistics" :key="data.id">
                        <div class="cell">{{ data?.sertificate_Id }}</div>
                        <div class="cell" :title="data.title">{{ data?.first_Name +data.last_Name }}...</div>
                        <!-- {{data}} -->
                        <div class="cell" :title="data.subtitle">{{ data?.stack }}...</div> 
                        <div class="cell">{{ data?.accepted_Date }}</div>
                        <div class="cell d-flex gap12 j-end">
                            <Icons name="edit" class="icon info"/>
                            <Icons name="deleted" class="icon danger" @click="deleteUser(data?.id)"/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <SertificateModal v-if="openModal" @close="openModal=event" @status="CreatedSertificate($event)"/>
</template>
<script>
import axios from '@/Utils/axios';
import Icons from '@/components/Icons.vue';
import SertificateModal from './SertificateModal.vue';
export default {
    name:"SertificatePage",
    components:{
        Icons,
        SertificateModal
    },
    data(){
        return{
            statistics:[],
            openModal:false
        }
    },
    methods:{
        async getAllStatistics(){
            let response = await axios.get('/sertificate')
            this.statistics=response?.data
        },
        openModalFunc(){
            this.openModal=!this.openModal
            console.log(this.openModal);
            
        },
        CreatedSertificate(item){
            console.log(item);
            this.getAllStatistics()
            this.openModal=false
        },
        async deleteUser(id){
            let response = await axios.delete('/sertificate/'+id)
            console.log(response);
            if(response.status==200){
                this.getAllStatistics()
            }
        }
    },
    mounted(){
        this.getAllStatistics()
    }
}
</script>
<style >
    
</style>