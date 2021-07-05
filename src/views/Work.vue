<template>
  <div class="work">
    <h2 class="title">Works</h2>
    <section class="cards">
      <div class="works-card">
        <img
          class="works-img"
          src="../assets/myPortfolio.png"
          alt="myPortfoliio"
          width="600"
          height="400"
        />
        <div class="works-content">
          <h1 class="works-title">ポートフォリオサイト</h1>
          <p class="works-text">
            現在閲覧しているサイトです。vue.jsを使用して作成しています。
            学習したことをアウトプットするサイトとして運用をしていく予定です。
          </p>
        </div>
        <div class="works-link">
          <a href="http://webcreatorbox.com/about">Guthub</a>
        </div>
      </div>

      <div class="works-card">
        <a href="https://vcl.jp/publications/2020/2020-09-k-ohara.html">
          <img
            class="works-img"
            src="../assets/reserch.png"
            alt="reserch"
            width="600"
            height="400"
        /></a>

        <div class="works-content">
          <h1 class="works-title">研究活動</h1>
          <p class="works-text">
            ヘッドマウントディスプレイを使用し、自動車のサーキット走行を支援するシステムの開発を行っています。
          </p>
        </div>
        <div class="works-link">
          <a href="https://vcl.jp/publications/2020/2020-09-k-ohara.html"
            >所属研究室の研究紹介ページ</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
body {
  background: #eee;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  width: 80%;
}
.title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  text-align: center;
}
.works-card {
  margin: 20px auto;
  width: 500px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.works-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.works-content {
  padding: 20px;
}
.works-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.works-text {
  color: #777;
  font-size: 15px;
  line-height: 1.5;
}
.works-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.works-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.works-link a:hover {
  color: #0090aa;
}
</style>