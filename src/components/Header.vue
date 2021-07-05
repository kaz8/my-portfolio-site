<template>
  <header>
    <router-link class="my-logo" v-bind:class="{ menuOpen: isOpen }" to="/"><a>kaz's portfolio</a></router-link>
    <nav class="navbar">

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{ 'is-active': isOpen }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" v-on:click="isPageTrans"><a>Home</a></router-link>
          <router-link to="/Skill" class="navbar-item" v-on:click="isPageTrans"><a>Skill</a></router-link >
        </div>
        <div class="navbar-end">
          <router-link to="/Work" class="navbar-item" v-on:click="isPageTrans"><a>Work</a></router-link>
        </div>
      </div>

      <div class="navbar-pc">
      <ul>
        <li>
          <router-link to="/"><a>Home</a></router-link>
        </li>
        <li>
          <router-link to="/Skill"><a>Skill</a></router-link>
        </li>
        <li>
          <router-link to="/Work"><a>Work</a></router-link>
        </li>
      </ul>
      </div>

    </nav>

  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    isPageTrans: function(){
      this.isOpen = false;
    },
    isNone: function () {
      if (window.innerWidth >= 780) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.isNone);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #e6e6e6;
}
header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f6f6f4;
  color: #87857c;
  padding: 0 4% 0;
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  align-items: center;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
a {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #87857c;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
}
a.my-logo {
  background-color: #f6f6f4;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 25px;
}
nav {
  margin: 0 0 0 auto;
}
ul {
  background-color: #f6f6f4;
  list-style: none;
  margin: 0;
  display: flex;
}
li {
  margin: 0 0 0 15px;
  font-size: 14px;
}
li:hover {
  background-color: #efefef;
  cursor: pointer;

}

.router-link-active,
.router-link-exact-active {
  background-color: #efefef;

}
.navbar {
    background-color: #efefef;
}
.navbar-burger{
  background-color: #efefef;
}
.navbar-menu {
  background-color: #efefef;
  padding-right: 20px;
  width: 100vw;

}
.navbar-item{
      border-top:solid #F5F5F5 1px;
}

.menuOpen {
  display: none;
}

@media (max-width: 780px) {
  header {
    padding: 0;
    margin: 0;
  }
  .navbar-pc{
    display: none;
  }
}
@media (min-width: 780px) {
  .navbar-burger {
    display: none;
  }
  .navbar-menu {
    display: none;
  }
}

</style>