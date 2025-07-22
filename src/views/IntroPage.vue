<template>
  <div class="intro-layout">
    <aside class="intro-sidemenu">
      <ul>
        <li v-for="(item, idx) in menuList" :key="item.key" :class="{ active: idx === activeIndex }"
          @click="activeIndex = idx">
          {{ item.label }}
        </li>
      </ul>
    </aside>
    <main class="intro-main">
      <h1 class="intro-title">{{ menuList[activeIndex].label }}</h1>
      <img v-if="menuList[activeIndex].img" :src="menuList[activeIndex].img" :alt="menuList[activeIndex].label"
        class="intro-image" />
      <p class="intro-text">
        {{ menuList[activeIndex].desc }}
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import p1 from '@/assets/img/intro/1.png'
import p2 from '@/assets/img/intro/2.png'
import p3 from '@/assets/img/intro/3.png'
import p4 from '@/assets/img/intro/4.png'
import p5 from '@/assets/img/intro/5.png'
const menuList = [
  {
    key: 'intro',
    label: '壮锦概述',
    img: p1,
    desc: '壮锦概述壮锦是中国壮族传统手工织锦，与云锦、蜀锦、宋锦并称“中国四大名锦”，被誉为“广西民族文化瑰宝”和壮民族文化的“活化石”。其历史可追溯至汉代，宋代成熟定型，明清时期成为皇室贡品，2006年被列入国家级非物质文化遗产名录'
  },
  {
    key: 'history',
    label: '核心工艺与技术',
    img: p2,
    desc: '壮锦是壮族传统织锦艺术的代表，以“通经断纬”技法为核心工艺。它以上浆处理的棉线或苎麻线为经，彩色染色蚕丝为纬，通过脚踏竹笼织机进行手工编织，形成正反两面图案完全对称、纹样精美、质地厚实紧密的织物。织机结构简洁，操作灵活，可织出万字纹、回形纹等复杂几何图案。经线直径严格控制在0.3-0.5毫米，确保结构稳定；纬线规格多为20/22D染色蚕丝，现代则引入人造丝和金银线，增强色彩饱和度与金属光泽效果。染色方面，壮锦传承天然植物染料工艺，典型如蓝靛，经过粉碎、发酵、煮染、氧化等多重环节，可呈现月白至墨青等多种青碧色阶。随着科技发展，纳米固色剂的应用使色牢度从传统ISO 2级提升至5级，大幅增强耐洗晒性能。近年来，更开发出可降解生物丝线与碳纳米导热丝，使壮锦具备智能调温与环保特性，不仅保留传统手工韵味，更走向科技融合与可持续发展新阶段。'
  },
  {
    key: 'process',
    label: '色彩艺术',
    img: p3,
    desc: '壮锦多用重彩，以红、黄、蓝、绿为基本色，其余是补色，对比鲜明强烈。一幅壮锦，常常用几种至十几种颜色混搭配置组成。壮锦在色彩运用方面有其独特之处。整体而言，壮锦习惯以一种或两种接近大自然的纯色作为底色，像黑、白、红、黄、绿和蓝等颜色常被选作底色（主色）。在此基础上，多种颜色依据纹饰有规律地分布于壮锦各部分，并且根据壮锦的形状与构图产生不同的颜色搭配。在颜色关系方面，壮锦展现出高超的色彩艺术设计水平。一是补色的巧妙应用，补色是指两种颜色混合后形成中性灰黑色的色彩关系，如黄与蓝、青与红、品红与绿互为补色，而且一种颜色仅有一个补色。在壮锦里，从宏观的整体配色到微观的纹饰设计用色，补色都被大量运用，从而带来强烈的视觉冲击。二是类比色（同类色）的应用，由于邻近色在色相和明度上差别较小，组合起来的色调和谐，给人一种对比中有协调、和谐中有层次的感觉。三是纯色壮锦颇具特色，不少地区存在纯色壮锦，整幅壮锦仅有一种颜色，颜色也多为黑、白、红、黄、绿、蓝等，呈现出简约大方、素净优雅的风格。'
  },
  {
    key: 'pattern',
    label: '传统纹样',
    img: p4,
    desc: '四方连续构图四方连续纹样是指一个单位纹样向上、下、左、右四个方向反复互连续循环排列所产生的纹样。壮锦常由回纹、水波纹等几何纹样组成四方连续结构，在骨架的斜行、菱形空格内连续织各种花的纹样，自然纹与几何续紧密结合，既严谨和谐又生动自然。二方连续构图二方连续构图是指一个或几个单位纹样在两条平行线之间的带：状平面上，作有规律的排列并向上下或左右两个方向无限连续循环所构成的带状形纹样。壮锦中随处可见二方连续构图的设计，纹样多以动植物纱和几何纹为主'
  },
  {
    key: 'modern',
    label: '创新应用',
    img: p5,
    desc: '壮锦作为壮族文化的重要象征，正在多个现代领域焕发新生。在服饰时尚领域，设计师将传统壮锦纹样与现代审美结合，提取“红、黄、蓝”等主色调，通过简化图案、改良面料，设计出兼具传统韵味与实穿性的日常服饰，如T恤、连衣裙、刺绣衬衫等。同时，壮锦也逐步走入高端时装与配饰舞台，如用数码提花技术复刻纹理的礼服、围巾、手袋等，展现民族文化与现代工艺的融合之美。在家居与生活用品领域，壮锦从传统被面拓展为抱枕、地毯、灯罩等软装饰品，图案经比例缩放与色彩调整后，适配北欧、极简等风格。如“壮锦剪影”台灯，以光影呈现传统纹样，赋予家居艺术感与文化价值。在文创与文旅产品方面，壮锦纹样被提炼为轻量化文化符号，应用于钥匙扣、手机壳、书签、导览图等，增强互动性与纪念性。在广西景区、民宿中，壮锦织物被用于床旗、靠垫、地图设计等，提升游客文化体验。在艺术与公共空间领域，壮锦成为当代装置艺术与公共艺术的重要载体，如南宁机场的金属浮雕壁画《锦绣壮乡》，或装置作品《经纬之间》，通过材料重构与空间演绎，引发观众对传统工艺与文化价值的思考。科技赋能方面，通过3D扫描与数据库建设，实现壮锦纹样的数字化保护与再设计；同时，借助AI设计系统与数码提花机提高生产效率，甚至将纹样与3D打印结合，拓展壮锦在智能制造与个性化产品中的应用边界。这些创新路径让壮锦在新时代不仅被“看见”，更被“使用”，展现了民族工艺的当代表达与持续生命力。'
  }
]
const activeIndex = ref(0)
</script>

<style scoped>
.intro-layout {
  display: flex;
  min-height: calc(100vh - 60px);
  background: #181818;
  margin: 0;
}

.intro-sidemenu {
  width: 220px;
  background: #232323;
  border-radius: 0 16px 16px 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.intro-sidemenu ul {
  list-style: none;
  padding: 0 0 0 0;
  margin: 0;
  width: 100%;
}

.intro-sidemenu li {
  padding: 18px 32px 18px 24px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border-radius: 0 16px 16px 0;
}

.intro-sidemenu li.active,
.intro-sidemenu li:hover {
  background: #42b983;
  color: #fff;
}

.intro-main {
  flex: 1;
  padding: 48px 0 32px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-title {
  font-size: 32px;
  color: #42b983;
  margin-bottom: 20px;
}

.intro-image {
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 18px;
  line-height: 1.8;
  text-align: left;
  max-width: 600px;
}

@media (max-width: 900px) {
  .intro-layout {
    flex-direction: column;
  }

  .intro-sidemenu {
    width: 100vw;
    flex-direction: row;
    align-items: center;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    justify-content: center;
  }

  .intro-sidemenu ul {
    display: flex;
    width: 100vw;
    justify-content: space-around;
  }

  .intro-sidemenu li {
    border-radius: 0;
    padding: 14px 10px;
    font-size: 1rem;
  }

  .intro-main {
    padding: 24px 0 16px 0;
  }
}
</style>
