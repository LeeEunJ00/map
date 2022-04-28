<template>
    <v-container>
          <div>
    <h5>Route</h5>
    <div id="map">
    </div>
  </div>
    </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import mapboxgl from "mapbox-gl";

export default defineComponent({
    setup() {
        
    },
  data() {
    return {
      access_token:
        "pk.eyJ1IjoiZWpsZWUiLCJhIjoiY2t5OWR0djZqMDVlNTJucWw0ZnRrMTE3ayJ9.zpjrcDwgCiSsGtpRVpNAUg", // your access token. Needed if you using Mapbox maps
      map:{}
    };
  },
  mounted(){
    this.createmap()
  },
  methods:{
    createmap(){
      mapboxgl.accessToken = this.access_token
      this.map= new mapboxgl.Map({container:'map',style:"mapbox://styles/ejlee/cky9lllex3zgk14lo85t9yj7v",zoom:11,center:[100.0,-6.5]})
    }
  }
})
</script>
<style scoped>
#map{
   width:100%;
   height:100vh;
}
</style>


