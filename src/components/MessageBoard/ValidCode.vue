<template>
  <div class="s-canvas">
    <canvas id="s-canvas" :width="contentWidth" :height="contentHeight" @click="drawPic"></canvas>
  </div>
</template>
<script>
export default{
  name: 'ValidCode',
  props:['updateRealCode'],
  data() {
    return {
        identifyCode:'abcd',
        fontSizeMin:25,
        fontSizeMax:35,
        backgroundColorMin:200,
        backgroundColorMax:220,
        dotColorMin:60,
        dotColorMax:120,
        contentWidth:140,
        contentHeight:38
    }
  },
  methods: {
      randomBase(len){
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < len; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
    return result;
    },
    // 生成一个随机数
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
 
    // 生成一个随机的颜色
    randomColor (min, max) {
      let r = this.randomNum(min, max)
      let g = this.randomNum(min, max)
      let b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
 
    drawPic () {
      this.identifyCode = this.randomBase(6)
      this.updateRealCode(this.identifyCode)
      let canvas = document.getElementById('s-canvas')
      let ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      // 绘制背景
      ctx.fillStyle = '#e6ecfd'
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      // 绘制文字
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i)
      }
      this.drawLine(ctx)
      this.drawDot(ctx)
    },
 
    drawText (ctx, txt, i) {
      ctx.fillStyle = this.randomColor(50, 160) // 随机生成字体颜色
      ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei' // 随机生成字体大小
      let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
      var deg = this.randomNum(-30, 30)
      // 修改坐标原点和旋转角度
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(txt, 0, 0)
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },
 
    drawLine (ctx) {
      // 绘制干扰线
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randomColor(100, 200)
        ctx.beginPath()
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        ctx.stroke()
      }
    },
 
    drawDot (ctx) {
      // 绘制干扰点
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
  },
//   watch: {
//     identifyCode () {
//       this.drawPic()
//     }
//   },
  mounted () {
    this.drawPic()
    this.$bus.$on('toggleCode',()=>{
        this.drawPic()
    })
  }
}
</script>