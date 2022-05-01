<template>
  <div class="route-map">
    <aside class="routeSide">
      <div class="routeSide__container" v-show="routeContainer">
        <div class="route__header">
          <p class="route__title">Customize route</p>
        </div>
        <div class="route__cont">
          <div class="route__row">
            <div class="route__head">
              <p class="route__rowTit">Route Name</p>
            </div>
            <div class="route__inp">
              <input type="text" class="route__inpTxt">
            </div>
          </div>
          
          <div class="route__row">
            <div class="route__head">
              <p class="route__rowTit">Start port 1</p>
              <span class="route__spot">INCHON, KOREA, SOUTH</span>
            </div>
            <div class="route__inp">
              <input type="text" class="route__inpTxt" placeholder="Search port..." @keydown="autoComplete();">
            </div>
            <div>

            <button class="route__add" @click="addWayPointStart()"></button>
            </div>
              
          </div>
          <!-- 플러스 버튼 클릭시 way point 추가 -->
            <div>
              <li v-for="(p,idx) in waypoints" :key="idx"> 
                <addWayPoint @addWayPointchild = "addWayPoint(idx)" @delWayPointchild = "delWayPoint(idx)"/> 
              </li>
            </div>
          
          <div class="route__row">
            <p class="route__rowTit">End port</p>
            <div class="route__inp">
              <input type="text" class="route__inpTxt" placeholder="Search port..." @keydown="autoComplete();">
              
            </div>
          </div>
        </div>
        <div class="route__calc">
          <button class="route__calcBtn" @click="calc()">Calculate route</button>
        </div>
      </div>
      <div class="routeResult" v-show="result">
        <div class="routeResult__inner">
          <div class="routeResult__top">
            <p class="routeResult__topTxt1">root1</p>
            <p class="routeResult__topTxt2">INCHON, KOREA, SOUTH - BUSAN, KOREA, SOUTH - HAI PHONG, VIETNAM</p>
            <button class="routeResult__topW"><img src="@/assets/ico-write.png" alt="수정"></button>
          </div>
          
          <p class="routeResult__factor">Reduction Factor: 0.8604</p>
          
          <p class="routeResult__caption">Time portions in each area</p>
          
          <table class="routeResult__tbl">
            <colgroup>
              <col style="width: 60%">
              <col style="width: 40%">
            </colgroup>
            <thead>
              <tr>
                <th>Area No.Acc. to BMT</th>
                <th>Time Portion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>18</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>18</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>18</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>18</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
          
          <div class="route__order">
            <button class="route__calcBtn" @click="order()">Order route</button>
            <button class="route__calcBtn" @click="backc()">Back</button>
          </div>
        </div>
      </div>
    </aside>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import addWayPoint from './addwaypoint';

export default {
  
    setup() {
        
    },components:{
    addWayPoint
  },
  data() {
    return {
      access_token:
        "pk.eyJ1IjoiZWpsZWUiLCJhIjoiY2t5OWR0djZqMDVlNTJucWw0ZnRrMTE3ayJ9.zpjrcDwgCiSsGtpRVpNAUg", // your access token. Needed if you using Mapbox maps
      map:{},
      waypoints:[
    ],
      routeContainer: true,
      result: false
    };
  },
  mounted(){
    this.createmap()
  },
  methods:{
    createmap(){
      mapboxgl.accessToken = this.access_token
      this.map= new mapboxgl.Map({container:'map',style:"mapbox://styles/ejlee/cky9lllex3zgk14lo85t9yj7v",zoom:11,center:[100.0,-6.5]})
    },
    addPort () {
      console.log('addPort');
      
    },
    addWayPointStart () {
      console.log('addWayPoint start')
      //waypoint추가
      this.waypoints.splice(0, 0, {lon:0,lat:0.0});
      console.log(this.waypoints);
    },
    addWayPoint (idx) {
      console.log('addWayPoint out')
      //waypoint 추가
      this.waypoints.splice(idx+1, 0, {lon:idx+1,lat:0.0});
      console.log(this.waypoints);
      console.log(idx+1);
    },
    delWayPoint (idx) {
      console.log('delWayPoint out')
      //waypoint 추가
      this.waypoints.splice(idx+1, 1);
      console.log(this.waypoints);
      console.log(idx+1);
    },
    calc () {
      console.log('calc')
      this.routeContainer = false,
      this.result = true
    },
    backc () {
      console.log('backc')
      this.routeContainer = true,
      this.result = false
    },
    autoComplete() {
      console.log('autoComplete')
    },
    order() {
      console.log('order')
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {margin: 0; padding: 0; list-style: none;font-family: 'Roboto', sans-serif;}
a {color: #000; text-decoration: none;}
img {max-width: 100%;}
.route-map {display: flex; flex-wrap: wrap; height: 100vh;}
.routeSide {width: 500px; height: 100%; background: #f3f3f3;}
.routeSide__container {height: 100%; padding: 70px 50px; overflow-y: auto;}
.route__header {padding-bottom: 10px; border-bottom: 1px solid #ddd;}
.route__title {font-weight: bold; font-size: 40px;}
.route__row {position: relative; margin-top: 30px;}
.route__rowTit {font-weight: bold; font-size: 20px;}
.route__inp {position: relative;}
.route__inpTxt {width: 100%; height: 40px; margin-top: 10px; padding: 0 20px; background: #fff; border: 1px solid #238ebe; outline: none;}
.route__inpTxt:focus {box-shadow: 0 0px 1.5px 1.5px rgba(35, 142, 190, 0.75);}
.route__btnWrap {display: flex; justify-content: flex-end; margin-top: 15px;}
.route__btn {display: flex; align-items: center; height: 40px; padding: 0 5px; color: #0b2e76; font-size: 15px; font-weight: bold; border: 2px solid #0b2e76;  border-radius: 10px;}
.route__btn + .route__btn {margin-left: 15px;}
.route__calc {margin-top: 30px;}
.route__calcBtn {display: flex; justify-content: center; align-items: center; width: 100%; height: 60px; color: #8e8e8e; font-size: 20px; background: #d5d5d5;}
.route__tg {position: absolute; top: 65px; left: 0; z-index: 1; width: 100%; background: #fff; border: 1px solid #ddd;}
.route__tgItem {border-bottom: 1px solid #ddd;}
.route__tgBtn {display: block; padding: 0 20px; color: #333; font-size: 20px; line-height: 40px;}
.route__wp {display: flex; flex-wrap: wrap;}
.route__wpSub {width: 130px;}
.route__wpSub + .route__wpSub {margin-left: 15px;}
.route__wpInp {width: 100%; height: 40px; margin-top: 10px; padding: 0 20px; background: #ebebeb; border: 1px solid #238ebe; outline: none;}
.route__del {position: absolute; top: 0; right: 0; width: 30px; height: 30px; background: #022e84; border-radius: 5px;}
.route__del::before {content: ''; position: absolute; top: 13px; left: 5px; width: 20px; height: 4px; background: #fff;}
/* add 버튼 생성 부탁드립니다. */
.route__add {position: absolute; top: 0; right: 55px; width: 30px; height: 30px; background: #022e84; border-radius: 5px;}
.route__add::before {content: ''; position: absolute; top: 13px; left: 5px; width: 20px; height: 4px; background: #fff;}
.map{width: calc(100% - 500px); height: 100%; overflow: hidden;}

.routeResult {padding-right: 15px;}
.routeResult__inner {padding: 15px; background: #fff;}
.routeResult__top {position: relative; padding: 15px; border: 1px solid #ddd;}
.routeResult__topTxt1 {font-weight: bold; font-size: 20px;}
.routeResult__topTxt2 {margin-top: 20px; color: #666; font-size: 15px;}
.routeResult__topW {position: absolute; top: 20px; right: 20px; width: 25px;}
.routeResult__factor {margin-top: 20px; font-weight: bold; font-size: 25px;}
.routeResult__caption {margin-top: 20px; font-weight: bold; font-size: 20px;}
table {width: 100%; margin-top: 15px; table-layout: fixed; border-collapse: collapse;}
table th {height: 40px; padding-left: 20px; font-size: 20px; background: #dfdfdf; text-align: left;}
table td {height: 40px; padding-left: 20px; font-size: 20px; border-bottom: 1px solid #ddd;}
.route__order {margin-top: 20px;}
</style>


