<template>
   <transition name="modal">
     <div :class="['modal',{blackBack: backdrop}]" v-show="visible">
       <div :class="posCls">
         <div :class="modalClass">
           <div class="modal-header clearfix">
             <slot name="header">
               <h4 class="modal-title pull-left">{{modalTitle}}</h4>
               <button type="button" class="close" @click="close">
                 <span aria-hidden="true">×</span>
               </button>
             </slot>
           </div>
           <div class="modal-body"><slot name="body"></slot><slot></slot></div>
           <div class="modal-footer clearfix">
             <slot name="footer">
               <button class="btn btn-primary pull-right" @click="ok">
                 {{okText}}
               </button>
             </slot>
           </div>
         </div>
       </div>
     </div>
   </transition>
</template>

<script>
    import { oneOf } from '../../utils/base'
    export default {
      name: 'modal',
      props: {
        size: {
          type: String,
          validator (val) {
            return oneOf(val, ['sm', 'lg', 'default'])
          }
        },
        status: {
          type: [String, Boolean],
          default: false
        },
        okText: {
          type: String,
          default: 'ok'
        },
        modalTitle: String,
        backdrop: {
          type: Boolean,
          default: true
        },
        position: {
          type: String,
          default: 'center',
          validator (val) {
            return oneOf(val, ['center', 'top', 'bottom'])
          }
        }
      },
      data () {
        return {
          visible: this.status
        }
      },
      watch: {
        status (val) {
          if (val) {
            this.open()
          } else {
            this.close()
          }
        }
      },
      methods: {
        close () {
          this.visible = false
          // this.status = false 避免直接修改属性
          this.$emit('modal-close', this.visible)
        },
        open () {
          this.visible = true
          this.$emit('modal-open', this.visible)
        },
        ok () {
          this.$emit('modal-ok', this.visible)
        }
      },
      computed: {
        modalClass () {
          return [
            'modal-content',
            {
              'modal-lg': this.size === 'lg',
              'modal-sm': this.size === 'sm',
              'modal-default': this.size === 'default'
            }
          ]
        },
        posCls () {
          let pos = {}
          pos['modal-' + this.position] = true
          return ['modal-dialog', pos]
        }
      }
    }
</script>

<style scoped>
  .modal {
    display: table;
    height: 100%;
    width: 100%;
    transition: all .3s ease;
  }

  .blackBack {
    background-color: rgba(0,0,0,0.5);
  }

  .modal .modal-dialog{
    display: table-cell;
    background-color: transparent;
    transition: all .3s ease;
  }

  .modal .modal-content{
    background-color: white;
    margin: auto;
    width: 300px;
    border-radius: 5px;
    webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
  .modal .modal-sm{
    width: 500px;
  }
  .modal .modal-lg{
    width: 800px;
  }
  .modal .modal-center{
    vertical-align: middle;
  }

  .modal .modal-top{
    vertical-align: top;
  }

  .modal .modal-bottom{
    vertical-align: bottom;
  }

  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
  .modal-enter .modal-dialog{
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  .modal-leave-active .modal-dialog{
    opacity: 0;
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
</style>
