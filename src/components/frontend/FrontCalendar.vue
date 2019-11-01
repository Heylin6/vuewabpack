<template>
    <div id='main' class="container">
      <div>
        <div class="calendar"> 
          <div class="top">
            <div class="title"></div>
            <div class="btns">
              <button class="today">本月</button>
              <button class="icon-keyboard_arrow_left prev"></button>
              <button class="icon-keyboard_arrow_right next"></button>
            </div>
          </div>

          <div class="month">
                <div class="weeks">
                    <div v-for="(item, index) in weeks" :key="index">{{item}}</div>
                </div>
                <div class="days" v-for="(item, index) in this._montharr" :key="index">
                    
                          <div 
                            v-for="(item2, index) in item" 
                            :key="index"
                            :class="[item2.l ?'':'next-prev-month',item2.t ? 'today' : null]"
                            :data-y="item2.y"
                            :data-m="item2.m"
                            :data-d="item2.d">                                                  
                          </div>
                    
                </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
  data(){
    return {
        _prevmonth:{},
        _nextmonth:{},
        weeks:['日', '一', '二', '三', '四', '五', '六'],
        _monthDayCount:0,
        montharr:[]
    }
  },
  methods:{
    monthDayCount(y, m){
        this._monthDayCount = (--m == 1) ? ((y % 4) === 0) && ((y % 100) !== 0) || ((y % 400) === 0) ? 29 : 28 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
        console.log('_monthDayCount',this._monthDayCount);
    },
    prevMonth(y, m) {
        this._prevmonth = { y: m == 1 ? y - 1 : y, m: m == 1 ? 12 : (m - 1) };
        console.log('_prevMonth',this._prevmonth);
    },
    nextMonth(y, m) {
        this._nextmonth = { y: m == 12 ? y + 1 : y, m: m == 12 ? 1 : (m + 1) };
        console.log('_nextmonth',this._prevmonth);
    },
    createMonthArr (y, m){
        var firstDayWeek = new Date(y, m - 1, 1).getDay();
        var monthCount = this._monthDayCount;
        var weekCount = parseInt ((firstDayWeek + monthCount) / 7, 10) + (((firstDayWeek + monthCount) % 7) ? 1 : 0);      
        console.log('weekCount',weekCount);     

        var p = this._prevmonth;
        var prevMonthCount = this._monthDayCount;
        var n = this._nextmonth;

        var date = new Date();
        console.log('date',date);

        this._montharr = Array.apply (null, Array (weekCount)).map (function (_, i) {
        return Array.apply (null, Array (7)).map (function (_, j) {
              var d = i * 7 + j - firstDayWeek + 1;
              var m2 = m;
              var y2 = y;
              var l = true; // 是否為本月份
      
              if (d > monthCount) {
                d = d - monthCount;
                m2 = n.m;
                y2 = n.y;
                l = false;
              }
      
              if (d <= 0) {
                d = d + prevMonthCount;
                m2 = p.m;
                y2 = p.y;
                l = false;
              }
              var t = y2 == date.getFullYear () && m2 == date.getMonth () + 1 && d == date.getDate ();     
              return {
                y: y2,m: m2,d: d,l: l,t: t
              };
            });
          }); 
          
          console.log('montharr',this._montharr);
    },
    renderMonth (y, m){
         var monthArr = this._montharr;
    }
  },   
  computed: {

  },
  created() {
    var dt = new Date();
    //console.log("getYear() : " , dt.getFullYear()); 
    //console.log("getMonth() : " , dt.getMonth()); 
    var _year = dt.getFullYear();
    var _month = dt.getMonth()+1;
    this.monthDayCount(_year,_month);    
    this.prevMonth(_year,_month);
    this.nextMonth(_year,_month);
    this.createMonthArr(2019,_month);
  },
}
</script>
<style scoped>
.calendar{
    display:inline-block;
    width:100%;
    background-color:white;
    padding:16px;
    -moz-box-shadow:0 1px 3px rgba(0,0,0,0.1);
    -webkit-box-shadow:0 1px 3px rgba(0,0,0,0.1);
    box-shadow:0 1px 3px rgba(0,0,0,0.1)
  }
  .calendar .top{
    display:inline-block;
    width:100%;
    height:40px;
    line-height:40px;
    *zoom:1
  }
  .calendar .top:after{
      display:table;
      content:"";
      line-height:0;
      clear:both
  }
  .calendar .top>*{
      float:left;
      display:inline-block
  }
  .calendar .top .title{
      width:calc(100% - 200px)
  }
  .calendar .top .title:after{
      content:attr(data-y) "年 " attr(data-m) "月"
  }  
  .calendar .top .btns{
      width:200px;
      text-align:right
  }
  .calendar .top .btns>button{
      border:1px solid #c8c8c8;
      background-color:white;
      height:25px;
      line-height:25px;
      padding:0 5px;
      font-size:16px;
      margin-top:8px
  }
  .calendar .month{
    display:table;border-spacing:0;border-collapse:collapse;table-layout:fixed;width:100%;margin-top:16px
    }
  .calendar .month .weeks,.calendar .month .days{
    display:table-row
  }
  .calendar .month .weeks>div,.calendar .month .days>div{
    display:table-cell;width:calc(100% / 7);border:1px solid #c8c8c8
  }
  .calendar .month .weeks>div{
    height:35px;line-height:35px;text-align:center;background-color:#f0f0f0;font-weight:bold
  }
  .calendar .month .days>div{
    position:relative;
    height:100px;
    -moz-transition:background-color .3s;
    -o-transition:background-color .3s;
    -webkit-transition:background-color .3s;
    transition:background-color .3s
  }
  .calendar .month .days>div[data-y][data-m][data-d]:after{
    content:attr(data-y) "/" attr(data-m) "/" attr(data-d);
    position:absolute;top:0;right:0;display:inline-block
  }
  .calendar .month .days>div.next-prev-month{
    background-image:-webkit-gradient(linear, 0 0, 100% 100%, 
                                      color-stop(0.25, #e1e1e1), 
                                      color-stop(0.25, transparent), 
                                      color-stop(0.5, transparent), 
                                      color-stop(0.5, #e1e1e1), 
                                      color-stop(0.75, #e1e1e1), 
                                      color-stop(0.75, transparent), 
                                      to(transparent));
    -webkit-background-size:20px 20px
  }
  .calendar .month .days>div.today{
    border:3px solid #508ef5
  }
  .calendar .month .days>div:hover{background-color:rgba(0,0,0,0.05)}
  @media screen and (max-width: 499px) and (min-width: 0){
    .calendar .month{display:inline-block}
    .calendar .month .weeks,.calendar .month .days{display:inline-block;width:100%}
    .calendar .month .weeks>div,.calendar .month .days>div{display:inline-block;width:100%}
    .calendar .month .weeks{display:none}.calendar .month .days>div{height:auto;min-height:100px;border:0;border-top:1px solid #c8c8c8}
    .calendar .month .days>div[data-y][data-m][data-d]:after{top:4px;right:4px}
    .calendar .month .days>div.next-prev-month{display:none}
  }
</style>