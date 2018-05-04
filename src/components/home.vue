<template>
  <div class='home'>
    <div class="flex-wrp flex-middle box1 ptb30">
      <div class="logo"></div>
    </div>
    <div class="flex-wrp flex-center box2 pt15">
      <div class="text relative">
        <div class="head">
          <div class="head-img animated wobble infinite"></div>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="flex-wrp flex-bottom pr40 pt60">
        <div class="text1" data-aos="fade-left"></div>
      </div>
      <div class="flex-wrp pt40 pl20">
        <div class="text2" data-aos="fade-right"></div>
      </div>
      <div class="flex-wrp flex-bottom pr20 pt35">
        <div class="text3" data-aos="fade-left"></div>
      </div>
    </div>
    <div class="box4">
      <div class="flex-wrp pl40 pt60 pb30">
        <div class="text1" data-aos="fade-right"></div>
      </div>
      <div class="box4-bg">
        <div class="flex-wrp flex-bottom pr20">
          <div class="text2" data-aos="fade-left"></div>
        </div>
      </div>
    </div>
    <div class="box5">
      <div class="pt40"></div>
      <div class="flex-wrp flex-between plr30">
        <div class="text1" data-aos="fade-down"></div>
        <div class="text2" data-aos="fade-down"></div>
        <div class="text3" data-aos="fade-down"></div>
      </div>
    </div>
    <div class="box6">
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="flex-wrp pl20 pt60">
        <div class="text1" data-aos="fade-right"></div>
      </div>
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="pt60"></div>
      <div class="flex-wrp flex-bottom pt30 pr20">
        <div class="text2" data-aos="fade-left"></div>
      </div>
      <div class="flex-wrp pl20 pt20">
        <div class="text3" data-aos="fade-right"></div>
      </div>
      <div class="flex-wrp flex-bottom pr20 pt25">
        <div class="text4" data-aos="fade-left"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 640px;
  margin: 0 auto;
  overflow: hidden;
  .box1{
    .logo{
      width: 206px;
      height: 47px;
      background: url(~@/assets/img/logo.png) no-repeat center / cover;
    }
  }
  .box2{
    width: 640px;
    height: 621px;
    background: url(~@/assets/img/box2-bg.png) no-repeat center / cover;
    .text{
      width: 513px;
      height: 305px;
      background: url(~@/assets/img/box2-text.png) no-repeat center / cover;
      .head{
        position: absolute;
        right: 70px;
        bottom: 0px;
        .head-img{
          width: 148px;
          height: 161px;
          background: url(~@/assets/img/box2-head.png) no-repeat center / cover;
        }
      }
    }
  }
  .box3{
    width: 640px;
    height: 1211px;
    margin-top: -160px;
    background: url(~@/assets/img/box3-bg.png) no-repeat center / cover;
    .text1{
      width: 376px;
      height: 59px;
      background: url(~@/assets/img/box3-text1.png) no-repeat center / cover;
    }
    .text2{
      width: 234px;
      height: 60px;
      background: url(~@/assets/img/box3-text2.png) no-repeat center / cover;
    }
    .text3{
      width: 516px;
      height: 48px;
      background: url(~@/assets/img/box3-text3.png) no-repeat center / cover;
    }
  }
  .box4{
    .text1{
      width: 360px;
      height: 136px;
      background: url(~@/assets/img/box4-text1.png) no-repeat center / cover;
    }
    .box4-bg{
      width: 640px;
      height: 922px;
      background: url(~@/assets/img/box4-bg.png) no-repeat center / cover;
      .text2{
        width: 421px;
        height: 77px;
        margin-top: -15px;
        background: url(~@/assets/img/box4-text2.png) no-repeat center / cover;
      }
    }
  }
  .box5{
    width: 640px;
    height: 1024px;
    margin-top: -12px;
    background: url(~@/assets/img/box5-bg.png) no-repeat center / cover;
    .text1{
      width: 107px;
      height: 490px;
      background: url(~@/assets/img/box5-text1.png) no-repeat center / cover;
    }
    .text2{
      width: 87px;
      height: 247px;
      margin-top: 460px;
      background: url(~@/assets/img/box5-text2.png) no-repeat center / cover;
    }
    .text3{
      width: 87px;
      height: 741px;
      background: url(~@/assets/img/box5-text3.png) no-repeat center / cover;
    }
  }
  .box6{
    width: 640px;
    height: 1182px;
    margin-top: -240px;
    background: url(~@/assets/img/box6-bg1.png) no-repeat center / cover;
    animation: img-bg .5s infinite;
    @keyframes img-bg {
      0%{
        background: url(~@/assets/img/box6-bg2.png) no-repeat center / cover;
      }
      50%{
        background: url(~@/assets/img/box6-bg1.png) no-repeat center / cover;
      }
      100%{
        background: url(~@/assets/img/box6-bg2.png) no-repeat center / cover;
      }
    }
    .text1{
      width: 337px;
      height: 128px;
      background: url(~@/assets/img/box6-text1.png) no-repeat center / cover;
    }
    .text2{
      width: 337px;
      height: 129px;
      background: url(~@/assets/img/box6-text2.png) no-repeat center / cover;
    }
    .text3{
      width: 563px;
      height: 85px;
      background: url(~@/assets/img/box6-text3.png) no-repeat center / cover;
    }
    .text4{
      width: 447px;
      height: 129px;
      background: url(~@/assets/img/box6-text4.png) no-repeat center / cover;
    }
  }
}
</style>
