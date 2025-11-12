
<template>
 <div class="page">
  <div class="page__top d-flex a-item j-between">
   <h2>Events</h2>
   <button class="create-button" @click="openModalFunc">Create events</button>
  </div>
  <div class="page-bottom ">
   <div class="table scroll">
    <div class="table-header">
     <div class="row">
      <div class="cell">Index</div>
      <div class="cell">Title</div>
      <div class="cell">Direction</div>
      <div class="cell">Date</div>
      <div class="cell d-flex j-end"></div>
     </div>
    </div>
    <div class="table-body">
     <div class="row" v-for="(data, index) in events" :key="index">
      <div class="cell">{{ index+1 }}</div>
      <div class="cell">{{ data.title }}</div>
      <div class="cell">{{ data.direction }}</div>
      <div class="cell">{{ formatDate(data.createdAt) }}</div>
      <div class="cell d-flex gap12 j-end">
       <Icons name="edit" class="icon info" @click="editEvent(data)" />
       <Icons name="deleted" class="icon danger" @click="deleteEvent(data.id)" />
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 <EventModel v-if="openModal"/>
</template>
<script>
import Icons from "@/components/Icons.vue";
import api from "@/Utils/axios"
import EventModel from "./EvetModal.vue"
export default {
  name: "EventPage",
  components: {
    Icons,
    EventModel
  },
  data() {
    return {
      events: [],
      openModal:false,
      searchParameter: "",
    };
  },
  computed: {
    
  },
  methods: {
    async getAllEvents(){
      try {
        const response = await api.get("/api/videos/video-opinions");
        
        this.events = response.data;
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    openModalFunc() {
      this.openModal=true
      // Logic to open modal for creating new event
    },
    editEvent() {
      // Logic to edit the selected event
    },
    deleteEvent() {
      // Logic to delete the selected event
    }
  },
  mounted() {
    this.getAllEvents() 
  }
}
</script>

<style >
 
</style>