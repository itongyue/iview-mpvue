<template>
  <div>
    <i-panel i-class="cell-panel-demo">
      <i-cell title="单行列表"></i-cell>
    </i-panel>

    <i-panel i-class="cell-panel-demo">
      <i-cell title="单行列表" is-link="true" value="详细信息"></i-cell>
    </i-panel>

    <i-panel i-class="cell-panel-demo">
      <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
    </i-panel>

    <i-panel i-class="cell-panel-demo" title="带 icon 的 Cell">
      <i-cell title="单行列表" value="详细信息">
        <i-icon type="like_fill" slot="icon"/>
      </i-cell>
    </i-panel>

    <i-panel i-class="cell-panel-demo" title="带箭头的 cell">
      <i-cell title="只显示箭头" is-link="true"></i-cell>
    </i-panel>

    <i-panel i-class="cell-panel-demo">
      <i-cell title="跳转到首页" is-link="true" url="/pages/index/main"></i-cell>
    </i-panel>

    <i-panel i-class="cell-panel-demo" title="cell 组">
      <i-cell-group>
        <i-cell title="只显示箭头" is-link="true"></i-cell>
        <i-cell title="跳转到首页" is-link="true" url="/pages/index/main"></i-cell>
        <i-cell title="只有 footer 点击有效" is-link="true" url="/pages/index/main" :only-tap-footer="switch1"></i-cell>
        <block v-if="switch1">
          <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
          <i-cell title="表单">
            <div slot="footer">
              <input type="digit" placeholder="带小数点的数字键盘">
            </div>
          </i-cell>
        </block>
        <i-cell title="开关">
          <div slot="footer">
            <i-switch :value="switch1" @change="onChange">
              <i-icon type="right" slot="open"></i-icon>
              <i-icon type="close" slot="close"></i-icon>
            </i-switch>
          </div>
        </i-cell>
      </i-cell-group>
    </i-panel>

    <i-panel i-class="cell-panel-demo">
      <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
    </i-panel>
  </div>
</template>
<script>
import panel from '../../components/panel/panel'
import cell from '../../components/cell/cell'
import icon from '../../components/icon/icon'
import iswitch from '../../components/switch/switch'
export default {
  components: {
    'i-panel': panel,
    'i-cell': cell,
    'i-icon': icon,
    'i-switch': iswitch
  },
  data() {
    return {
      switch1: true
    }
  },
  methods: {
    onChange(val) {
      const { value } = val
      this.switch1 = value
    }
  },
};
</script>
<style>
.cell-panel-demo{
    display: block;
    margin-top: 15px;
}
</style>

