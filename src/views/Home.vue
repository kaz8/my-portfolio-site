<template>
  <div class="home">
    <div class="home-title">
      <span class="item delay-anime" v-for="(t, index) in text" :key="index" v-text="t" />
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      text: "Welcom to my portfolio",
    };
  },
};
</script>

<style lang="stylus" scoped>
.home{
  background-image : url(../assets/dawn.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  min-height: 88vh;
}
.home-title {
  color: #FFFBCE;  
  display: flex;
  justify-content: center;
  text-align : center;
  align-items: center;
  margin-top: 30vh;

}

@keyframes text-in {
  0% {
    transform: translate(-50px);
    opacity: 0;
  }
}

.item {
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: inline-block;
  min-width: 0.3em;
  font-size: 6vw;
  animation: text-in 1.0s cubic-bezier(0.25, 0.1, 0.25, 1.0) 0s backwards;
  text-shadow: 
    1px 0 0 #6F7A6B, 
    0 1px 0 #6F7A6B,
    -1px 0 0 #6F7A6B,
    0 -1px 0 #6F7A6B,
    3px 3px 0 #6F7A6B; 
}

for i in 0 .. 21 {
  .delay-anime:nth-child({i + 1}) {
    animation-delay: i * 100ms + 200ms;
  }
}
</style>