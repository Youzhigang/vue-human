<MnTurn/>
```javascript
<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Turn</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-form :validate="$v" @success="success">
      <!-- radio item -->
      <mn-section>
        <mn-card>
          <mn-card-item>
            <mn-card-body>Agree Terms & Policy</mn-card-body>
            <mn-card-suffix action>
              <mn-turn :data="true" v-model="models.policy"></mn-turn>
            </mn-card-suffix>
          </mn-card-item>
        </mn-card>
        <mn-section-note>
          <mn-helper :validate="$v.models.policy">
            <mn-helper-item name="required">Need your agree</mn-helper-item>
          </mn-helper>
        </mn-section-note>
      </mn-section>

      <mn-section>
        <mn-section-btn>
          <mn-btn theme="primary" margin ref="submit">Submit</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-form>
  </page>
</template>

<script>
  import turn from 'vue-human/suites/turn'
  import required from 'vuelidate/lib/validators/required'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...turn.map()
    },
    validations: {
      models: {
        policy: { required }
      }
    },
    data () {
      return {
        models: {
          policy: undefined
        }
      }
    },
    methods: {
      success ($event, form) {
        form.loading = true
        this.$refs.submit.loading = true
        setTimeout(() => {
          Message.create({
            type: 'success',
            message: 'Success to validate.'
          }).show()
          form.loading = false
          this.$refs.submit.loading = false
        }, 3000)
      }
    }
  }
</script>

```