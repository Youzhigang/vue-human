<template>
  <page>
    <mn-columns>
      <mn-column tablet="8, 2" desktop="6, 3">
        <mn-letter>
          <mn-letter-body>
            <h1>Carousel</h1>
          </mn-letter-body>
        </mn-letter>

        <mn-card>
          <mn-card-media>
            <mn-carousel ref="carousel">
              <mn-carousel-item v-for="(item, index) in pictures" :key="index">
                <img :src="item.src" style="width: 100%; display: block;">
              </mn-carousel-item>
            </mn-carousel>
          </mn-card-media>
        </mn-card>

        <mn-card>
          <mn-card-item>
            <mn-card-body>
              <h5>自动循环播放</h5>
            </mn-card-body>
            <mn-card-prefix>
              <mn-turn :data="true" v-model="models.autoplay" @input="onAutoplay"></mn-turn>
            </mn-card-prefix>
          </mn-card-item>
        </mn-card>
      </mn-column>
    </mn-columns>
  </page>
</template>

<script>
  import turn from 'vue-human/suites/turn'
  import carousel from 'vue-human/suites/carousel'

  export default {
    components: {
      ...turn.map(),
      ...carousel.map()
    },
    data () {
      return {
        models: {
          autoplay: true
        },
        pictures: [
          { src: 'https://via.placeholder.com/250x150/0000FF/ffffff' }
        ]
      }
    },
    methods: {
      onAutoplay (autoplay) {
        this.$refs.carousel.autoplay(autoplay)
      }
    },
    mounted () {
      setTimeout(() => {
        // 异步修改图片数量，修改后重新设定 length
        this.pictures = [
          { src: 'https://via.placeholder.com/250x150/0000FF/ffffff' },
          { src: 'https://via.placeholder.com/250x150/00FF00/ffffff' },
          { src: 'https://via.placeholder.com/250x150/FF00FF/ffffff' },
          { src: 'https://via.placeholder.com/250x150/ff0000/ffffff' }
        ]
        this.$refs.carousel.length = 4
      }, 2000)
    }
  }
</script>
