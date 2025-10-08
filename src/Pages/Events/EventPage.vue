
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
      <div class="cell">ID</div>
      <div class="cell">Name</div>
      <div class="cell">Date</div>
      <div class="cell d-flex j-end"></div>
     </div>
    </div>
    <div class="table-body">
     <div class="row" v-for="(data, index) in filteredEvents" :key="index">
      <div class="cell">{{ index + 1 }}</div>
      <div class="cell">{{ data.id }}</div>
      <div class="cell">{{ data.name }}</div>
      <div class="cell">{{ data.date }}</div>
      <div class="cell d-flex gap12 j-end">
       <Icons name="edit" class="icon info" @click="editEvent(data)" />
       <Icons name="deleted" class="icon danger" @click="deleteEvent(data.id)" />
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import Icons from "@/components/Icons.vue";
import api from "@/Utils/axios"
export default {
  name: "EventPage",
  components: {
    Icons
  },
  data() {
    return {
      events: [
        {
          id: 1,
          name: "Event One",
          date: "2023-10-01"
        },
        {
          id: 2,
          name: "Event Two",
          date: "2023-10-02"
        },
        {
          id: 3,
          name: "Event Three",
          date: "2023-10-03"
        }
      ],
      searchParameter: "",
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => 
        event.name.toLowerCase().includes(this.searchParameter.toLowerCase()) ||
        event.id.toString().includes(this.searchParameter)
      );
    }
  },
  methods: {
    getAllEvents(){
      api.get("/api/videos/video-opinions").then((data)=>{
        console.log(data);
        
      })
    },
    openModalFunc() {
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