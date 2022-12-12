<template>
  <div class="px-3 py-4 grid grid-flow-col gap-3">
    <el-card shadow="hover" v-for="(card,index) in cards" :key="index" class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          <span>{{card.title}}</span>
          <el-tag type="danger" size="normal" effect="dark">月</el-tag>
        </div>
      </template>
      <!-- card body -->
      <div class="flex justify-between items-center">
        <span class="text-base">${{card.price}}</span>
        <i :class="[card.icon,card.iconColor]" class="text-4xl "></i>
      </div>
      <div class="flex justify-between items-center mt-5">
        <span>{{card.desc}}</span>
        <span>{{card.descNum}}</span>
      </div>
    </el-card>

    <div>
   <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
     <div id="echart1" style="width: 600px;height:400px;"></div>
     </div>
  </div>
</template>

<script lang="ts" setup>
 import { ref ,nextTick} from 'vue';

interface ICard{
    title:string,
    price:number,
    icon:string,
    iconColor?:string,
    desc:string,
    descNum:number,
}

const cards = ref<ICard[]>([
    {title:'总人数',price:424424,iconColor:'text-purple-400',icon:"fab fa-facebook-messenger",desc:'总金额',descNum:1353647},
    {title:'订单数',price:242424,iconColor:'text-green-400',icon:"fab fa-freebsd",desc:'订单量',descNum:896968},
    {title:'下载量',price:89642,iconColor:'text-blue-400',icon:"fab fa-guilded",desc:'下载人数',descNum:645646},
    {title:'转发数',price:65756,iconColor:'text-red-400',icon:"fab fa-mendeley",desc:'转发人数',descNum:646535}
])


nextTick(() =>{
    var myChart = echarts.init(document.getElementById('echart1'));
// 指定图表的配置项和数据
var option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
})

</script>

<style lang="scss" scoped></style>
