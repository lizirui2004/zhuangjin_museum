<template>
  <div class="homepage-flex-center">
    <div class="carousel-row">
      <el-carousel height="300px" indicator-position="outside" class="custom-carousel">
        <el-carousel-item v-for="(item, idx) in images" :key="idx">
          <img :src="item.src" class="carousel-img" :alt="item.alt" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="intro-section">
      <h2>四燕朝花纹壮锦</h2>
      <div class="intro-flex">
        <img class="intro-img" src="/img/home/sychw_img.png" alt="壮锦简介图" />
        <p>
          木叶弥章原创系列的「四燕朝花纹」壮锦，以燕纹、八角花、万字纹相组合为锦绣纹样。燕子历来是吉祥之鸟，象征福临宅地鸿运謙容顢龌浙头，也寓意家业兴旺，人才辈出。当燕子环绕太阳而飞舞，不仅是古人科举高中和功成名就的象征，更有着现代人对国泰民安、四海升平的美好析愿八角花则是西南少数民族地区常见的纹样，象征太阳崇拜，代表光明、力量之美竜羝拔有鋶涂着四方聚气、八方来财、生活富足的吉祥寓意。“旧时王谢堂前燕，飞入寻常百姓”曾经历史舞台上作为贡品的壮家。锦，可谓寸锦寸金，却只能躺在博物馆里供人观瞻;如今壮锦回归民间，在现代工艺的改进加持、以及非遗文化的传承推广下，焕发新生，越来越受到人民群众的喜爱与支持，成为新中式风格穿搭，送礼祝福的吉祥佳品!
        </p>
      </div>
    </div>
    <div class="intro-section">
      <h2>吉象如意纹壮锦</h2>
      <div class="intro-flex">
        <img class="intro-img" src="/img/home/jxryw_img.png" alt="壮锦图案图" />
        <p>
          木叶弥章原创「吉象如意纹」系列壮锦，以大象、如意、麦穗等组合为锦绣纹样。据《韩非子》记载:“昔者黄帝，驾象车而六蛟龙。将此番庄重而辉煌的景象，纳入锦绣壮锦之中，织出一片太平盛世的祥瑞景象。，“象”为吉，历来大象，“大”为尊，是地位尊贵、福禄吉祥的化身，更是权势、力量的象征。以象纹为锦，化如意”，铺稻穗为底，绕太阳为纹，寓意虽足丰饶、国泰民安，天下大同又选东方传统色，将“大象无形大音希声”的那份幽静、典雅、神秘、华贵的感觉，描绘得淋漓尽致。木叶弥章以全新原创壮锦纹样，开启民族文化的新征程，以一方织锦承载壮族文化的厚重底蕴，让非遗文化从古老的博物馆里鲜活地走出来，为化身万子文创，装点每一个人的生活。
        </p>
      </div>
    </div>
    <div class="intro-section">
      <h2>飞燕送财纹壮锦</h2>
      <div class="intro-flex">
        <img class="intro-img" src="/img/home/fyscw_img.png" alt="壮锦工艺图" />
        <p>
          木叶弥章原创系列「花开富贵。飞燕送财纹」壮锦，以燕纹、八角花;、铜钱和田格纹相组合为锦绣纹样，取财富和好运源源不断地到来之美意燕子是中国传统文化中的吉祥物之一燕属候鸟，随季节而迁徙，喜成双成对，故燕纹寓意爱情美满、家庭和睦;古时家中若有飞燕筑巢，象征着财源滚滚，鸿运当头，也寓意家业兴旺，人才辈出。铜钱和良田纹更是家财万贯、国富民强、传承不绝的吉祥符号。此锦集天时春燕至、地利良田丰、人和家业旺于一体，既承《山海经》“玄鸟司春”的古意，.又融壮族“万物有灵”的哲思。穿戴或陈设此纹壮锦，如深海藏珠，沉稳中见贵气，将“招财”的炽烈与“送财”的智慧纳入方寸之中
        </p>
      </div>
    </div>
    <div class="intro-section">
      <h2>凰蝶万仪纹壮锦</h2>
      <div class="intro-flex">
        <img class="intro-img"
          src="/img/home/fdwyw_img.png" alt="壮锦现代图" />
        <p>
          当黄河奔涌的雄浑气魄，凝于一方锦缎，便有了这款独一无二的「黄河琉璃·凰蝶万仪纹」壮锦面料其色泽取意黄河之水在日光照耀下，如同琉璃般流光溢彩贵气逼人;凤凰花好似飞翔的凤凰尾羽，有着事业红红火火一路生花的寓意;蝴蝶纹代表福气连绵，好运不绝;骏马纹象征马到功成驰骋四海!整幅壮锦将民族文化蓬勃的生命力和奋斗精神展现的淋漓尽致!如此高级的设计，每一寸纹理，皆是匠心设计，无论是做成民族风情的包包翩跹飘逸的礼服，还是简约知性的围巾，或低调奢华的领带，都仿若裹挟着千年的时光密语，触手生温，仿若被历史温柔相拥，又能在时尚浪潮中独树一识，散发与众不同的东方魅力。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import carousel1 from '@/assets/img/home/carousel1.png'
import carousel2 from '@/assets/img/home/carousel2.png'
import carousel3 from '@/assets/img/home/carousel3.png'
import { ref } from 'vue'

const images = ref([
  {
    src: carousel1,
    alt: '壮锦图1'
  },
  {
    src: carousel2,
    alt: '壮锦图2'
  },
  {
    src: carousel3,
    alt: '壮锦图3'
  }
])
</script>

<style scoped>
.homepage-flex-center {
  min-height: calc(100vh - 60px);
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #181818;
}

.carousel-row {
  width: 90%;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.custom-carousel {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}

.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.intro-section {
  width: 90%;
  max-width: 900px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-section h2 {
  color: #42b983;
  font-size: 1.6rem;
  margin-bottom: 16px;
}

.intro-flex {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.intro-img {
  width: 320px;
  max-width: 40vw;
  min-width: 120px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 0;
}

.intro-flex p {
  flex: 1;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left;
}

@media (max-width: 900px) {

  .carousel-row,
  .intro-section {
    width: 98vw;
    max-width: 98vw;
  }

  .homepage-flex-center {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .intro-flex {
    flex-direction: column;
    gap: 18px;
  }

  .intro-img {
    width: 100%;
    max-width: 100%;
  }

  .intro-flex p {
    text-align: center;
  }
}

body,
html {
  overflow-x: hidden;
}
</style>
