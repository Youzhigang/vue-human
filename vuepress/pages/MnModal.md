<MnModal/>
```javascript
<template>
  <div>
    <page>
      <mn-letter>
        <mn-letter-body><h1>Modal</h1></mn-letter-body>
      </mn-letter>

      <mn-section>
        <mn-card>
          <mn-card-item>
            <mn-card-body>
              <mn-btn theme="primary" @click="onOpenModal" block>Open Modal</mn-btn>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-section>
    </page>

    <mn-modal :visible.sync="showModal">
      <mn-scroller>
        <mn-section>
          <mn-card>
            <mn-card-item v-for="item in 20" :key="item" type="link">
              <mn-card-body>奈好</mn-card-body>
              <mn-card-suffix>{{ item }}</mn-card-suffix>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-scroller>
      <mn-modal-action slot="suffix">
        <mn-btn theme="secondary-link" @click="onCloseModal">Cancel</mn-btn>
        <mn-btn theme="primary">Confirm</mn-btn>
      </mn-modal-action>
    </mn-modal>
  </div>
</template>

<script>
  import modal from 'vue-human/suites/modal'

  export default {
    components: {
      ...modal.map()
    },
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      onOpenModal () {
        this.showModal = true
      },
      onCloseModal () {
        this.showModal = false
      }
    }
  }
</script>

```