<template>
  <div class="skill">
    <section class="skill" id="skill">
      <div class="inner">
        <h2 class="title">Skill</h2>
        <div class="skill-list">
          <div class="skill-item">
            <p class="skill-img"><img src="../assets/html5.png" alt="html5" width="90" height="90"></p>
            <div class="skill-body">
              <h3 class="skill-name">HTML5/CSS3</h3>
              <p class="skill-text">
                学習中。アウトプットを兼ねて本サイトを作成しました。
              </p>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><img src="../assets/JavaScript.png" alt="JavaScript" width="90" height="90"></p>
            <div class="skill-body">
              <h3 class="skill-name">JavaScript</h3>
              <p class="skill-text">
                学習中。本サイトはJavaScriptのフレームワークのVue.jsを使用しました。
              </p>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><img src="../assets/java.png" alt="java" width="90" height="90"></p>
            <div class="skill-body">
              <h3 class="skill-name">Java</h3>
              <p class="skill-text">
                大学の講義で学習。XML文書の操作を通してDOMやRESTについて学習しました。
              </p>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><img src="../assets/Csharp.png" alt="Csharp" width="90" height="90"></p>
            <div class="skill-body">
              <h3 class="skill-name">C#</h3>
              <p class="skill-text">
                主にUnityで使用。
              </p>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><img src="../assets/unity.png" alt="unity" width="90" height="90"></p>
            <div class="skill-body">
              <h3 class="skill-name">Unity</h3>
              <p class="skill-text">
                大学での研究活動で使用。VIVE SRWorks SDKと呼ばれるAR開発キットを利用してARコンテンツの開発を行っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  text-align: center;

}
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding-top: 20px;
  padding-left: 100px;
  width: 75%;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 45%;
  margin-bottom: 50px;
  font-size: 0.9vw;
}

.skill-img {  
  width: 100px;
  height: auto;
  margin-right: 40px;
}

.skill-body {
  flex: 1;
}

.skill-name {
  font-size: 1.5vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 5px;
}

@media (max-width: 780px) {
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding-top: 20px;
  padding-left: 0;
  width: 100%;
}

.skill-img {  
  width: 50px;
  height: auto;
  margin: 5px;
}
  
}
</style>