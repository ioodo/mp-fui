/**
 */
Component({
  options :{
    addGlobalClass: true,
    multipleSlots: true,
    styleIsolation: 'shared'
  },
  properties: {
    footer: {
      type: Boolean,
      value: true
    },
    footerBorder: {
      type: Boolean,
      value: true
    }
  },
  data : {
  },
  observers : {
  },
  lifetimes: {
    ready: function () {
    }
  },
  created () {
  },
  attached () {
  },
  methods: {
  }
})
