<MnSelect/>
```javascript
<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Select</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-form :validate="$v" @success="success">
      <!-- radio item -->
      <mn-section>
        <mn-section-note>Choose your city</mn-section-note>
        <mn-section-note>
          <pre>
            传入的options 格式: [{label: String, value: any}]
          </pre>
        </mn-section-note>
        <mn-card>
          <mn-card-item type="link">
            <mn-card-prefix>
              <mn-label :validate="$v.models.city">City</mn-label>
            </mn-card-prefix>
            <mn-card-body>
              <mn-select :options="cityOptions" v-model="models.city"></mn-select>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
        <mn-section-note>
          <div>
            {{ models.city }}
          </div>
          <mn-helper :validate="$v.models.city">
            <mn-helper-item name="required">Must choose one</mn-helper-item>
          </mn-helper>
        </mn-section-note>
      </mn-section>

      <mn-section>
        <mn-section-btn>
          <mn-btn theme="primary" margin block ref="submit">Submit</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-form>
      <mn-section>
        <mn-section-note>更改显示label/value, 通过optionLabelProp/optionValueProp</mn-section-note>
        <mn-section-note>
          <pre v-pre>
            传入的options 格式: [{showName: String, emitValue: any}]
            optionLabelProp="showName"
            optionValueProp="emitValue"
          </pre>
        </mn-section-note>
        <mn-card>
          <mn-card-item type="link">
            <mn-card-prefix>
              <mn-label >City2</mn-label>
            </mn-card-prefix>
            <mn-card-body>
              <mn-select :options="cityOptions2"
                optionValueProp="emitValue"
                optionLabelProp="showName"
               v-model="models.city2"></mn-select>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
        <mn-section-note>
          <div>
            {{ models.city2 }}
          </div>
        </mn-section-note>
      </mn-section>
  </page>
</template>

<script>
  import select from 'vue-human/suites/select'
  import required from 'vuelidate/lib/validators/required'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...select.map()
    },
    validations: {
      models: {
        city: { required }
      }
    },
    data () {
      return {
        models: {
          city: 'Suzhou',
          city2: undefined
        },
        cityOptions: [
          { label: 'Choose your city', value: undefined },
          { label: 'Shanghai', value: 'Shanghai' },
          { label: 'Suzhou', value: 'Suzhou' },
          { label: 'Hangzhou', value: 'Hangzhou' }
        ],
        cityOptions2: [
          { showName: '选择城市', emitValue: undefined },
          { showName: '上海', emitValue: 'Shanghai City' },
          { showName: '苏州', emitValue: 'Suzhou City' },
          { showName: '无锡', emitValue: 'Hangzhou City' },
          { showName: '华东地区', emitValue: ['苏州', '上海', '无锡'] }
        ]
      }
    },
    methods: {
      success ($event, form) {
        form.loading = true
        this.$refs.submit.loading = true
        setTimeout(() => {
          Message.create({
            type: 'primary',
            // title: 'Success',
            message: 'Success validate.'
          }).show()
          form.loading = false
          this.$refs.submit.loading = false
        }, 1000)
      },
      onOpenTip () {
        Message.create({
          type: 'warning',
          title: 'Warning',
          message: 'Show some information'
        }).show()
      }
    }
  }
</script>

```