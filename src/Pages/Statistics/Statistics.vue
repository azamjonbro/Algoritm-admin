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
                        <div class="cell" :title="data.title">{{ data?.title.slice(0, 20) }}...</div>
                        <!-- {{data}} -->
                        <div class="cell" :title="data.subtitle">{{ data?.subtitle.slice(0, 15) }}...</div>
                        <div class="cell">{{ data?.integer }}</div>
                        <div class="cell d-flex gap12 j-end">
                            <Icons name="edit" class="icon info" @click="editProfile(data)" />
                            <Icons name="deleted" class="icon danger" @click="deleteItem(data.id)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <StatisticsModal v-if="openModal"  :editOneProfile="oneStatistics" @close="openModal=false" @status="closeModalEvent($event)" />
     <Toastiff :toastOptions="toastOptions" />
</template>
<script>
import axios from '@/Utils/axios';
import StatisticsModal from './StatisticsModal.vue';
import Icons from '@/components/Icons.vue';
import Toastiff from '@/Utils/Toastiff.vue';
export default {
    name: "StatisticsPage",
    components: {
        StatisticsModal,
        Icons,
        Toastiff
    },
    data() {
        return {
            statistics: [],
            openModal: false,
            oneStatistics:{},
            toastOptions: {
                open: false,
                text: "",
                style: { background: "#4CAF50" },
            },
        }
    },
    methods: {
        async getAllStatistics() {
            let response = await axios.get('/api/statistics');
            this.statistics = response?.data
        },
        openModalFunc() {
            this.openModal = !this.openModal
            console.log(this.openModal);

        },
        closeModalEvent(element) {
            if (element.status == "success") {
                this.openModal = false
                this.toastOptions={
                    open:true,
                    text:element.message,
                    style: { background:"#5565FF" },   
                }
                this.getAllStatistics()
            }else{
                this.openModal = false
                this.toastOptions={
                    open:true,
                    text:element.message,
                    style: { background:"#F30300" },
                }
            }
        },
        async deleteItem(item){
            console.log(item);
            let res =await axios.delete("/statistics/"+item)
            if(res.status==200){
                this.getAllStatistics()
                this.toastOptions={
                    open:true,
                    text:"Statistics successfully deleted",
                    style:{background:"#F30300"}
                }
            }
        },
        editProfile(element){
            console.log(element);
            this.oneStatistics=element
            this.openModal=true
        }
    },
    mounted() {
        this.getAllStatistics()
    }
}
</script>
<style>
</style>