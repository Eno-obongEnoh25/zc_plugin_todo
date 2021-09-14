"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Transactions"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CommentBox.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CommentBox.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CommentBox'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardMenu.vue */ "./resources/js/components/CardMenu.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NewCard",
  data: function data() {
    var _this = this;

    return {
      isModalVisible: false,
      links: [{
        name: 'Edit',
        action: function action() {
          _this.toggleMenu(); // this.$emit('toggleShareModal')
          //alert('You cant assign tasks now')

        },
        type: 'default'
      }, {
        name: 'Delete',
        action: function action() {
          _this.toggleMenu();

          alert('completed');
        },
        type: 'default'
      }]
    };
  },
  components: {
    CardMenu: _CardMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    ClickAway: function ClickAway(event) {
      this.isModalVisible = false;
    },
    details: function details(any) {
      this.$router.push({
        name: 'Details',
        params: {
          id: this.todo.card_id
        }
      });
    },
    toggleMenu: function toggleMenu() {
      this.isModalVisible = !this.isModalVisible;
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    },
    alert: function (_alert) {
      function alert() {
        return _alert.apply(this, arguments);
      }

      alert.toString = function () {
        return _alert.toString();
      };

      return alert;
    }(function () {
      alert('hi');
    })
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { Picker } from 'emoji-mart-vue'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TextArea',
  data: function data() {
    return {
      showEmojiPicker: false
    };
  },
  methods: {
    toggleEmojiPicker: function toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
    addEmoji: function addEmoji(emoji) {
      var textarea = this.$refs.textarea;
      var cursorPosition = textarea.selectionEnd;
      var start = this.value.substring(0, textarea.selectionStart);
      var end = this.value.substring(textarea.selectionStart);
      var text = start + emoji["native"] + end;
      this.$emit('input', text);
      textarea.focus();
      this.$nextTick(function () {
        textarea.selectionEnd = cursorPosition + emoji["native"].length;
      });
    }
  },
  components: {// Picker
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/checkbox */ "./node_modules/primevue/checkbox/checkbox.esm.js");
/* harmony import */ var _components_TextArea_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TextArea.vue */ "./resources/js/components/TextArea.vue");
/* harmony import */ var _components_CommentBox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CommentBox.vue */ "./resources/js/components/CommentBox.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TodoDetails',
  data: function data() {
    return {
      selectedTodo: '',
      checked: [],
      alltasks: ['', '', '', '', '', '', '', '', '', '']
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    allTodos: 'todos/allTodos'
  })), {}, {
    percent: function percent() {
      return this.checked.length / this.alltasks.length * 100;
    }
  }),
  components: {
    TextArea: _components_TextArea_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Checkbox: primevue_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    close: function close() {
      this.$emit('hideComment');
    },
    check: function check() {
      var id = this.$route.params.id;
      this.selectedTodo = this.allTodos.find(function (todo) {
        return todo.card_id.toLowerCase() === id.toLowerCase();
      });

      if (this.selectedTodo <= 0 || this.selectedTodo === undefined) {
        this.$emit('hideComment');
        this.$router.push({
          path: '/main'
        });
      } else {}

      console.log(this.selectedTodo);
    }
  },
  mounted: function mounted() {// this.check();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Didier.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Didier.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TaskForm */ "./resources/js/components/TaskForm.vue");
/* harmony import */ var _components_TodoNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoNav */ "./resources/js/components/TodoNav.vue");
/* harmony import */ var _components_AddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddTaskBtn */ "./resources/js/components/AddTaskBtn.vue");
/* harmony import */ var _components_Search_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search-Input */ "./resources/js/components/Search-Input.vue");
/* harmony import */ var _components_shareModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shareModal */ "./resources/js/components/shareModal.vue");
/* harmony import */ var _components_Newcard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Newcard.vue */ "./resources/js/components/Newcard.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'New Main',
  data: function data() {
    return {
      isModal: false,
      isShareModal: false,
      showAll: true,
      isComment: false,
      showEditModal: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)({
    allTodos: "todos/allTodos"
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)({
    searchValue: 'todos/SEARCH'
  })), {}, {
    toggleModal: function toggleModal() {
      console.log("hi");
      this.isModal = !this.isModal;
    },
    toggleShareModal: function toggleShareModal() {
      console.log("hi");
      this.isShareModal = !this.isShareModal;
    },
    isMobile: function isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
    showComment: function showComment() {
      this.isComment = true;
    },
    hideComment: function hideComment() {
      this.isComment = false;
    },
    searchTodo: function searchTodo(val) {
      this.searchValue(val);
    },
    check: function check() {
      if (this.$route.params.id) {
        this.showComment();
      } else {
        this.hideComment();
      }
    }
  }),
  components: {
    NewCard: _components_Newcard_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddTaskBtn: _components_AddTaskBtn__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchInput: _components_Search_Input__WEBPACK_IMPORTED_MODULE_3__["default"],
    shareModal: _components_shareModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    TaskForm: _components_TaskForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    TodoNav: _components_TodoNav__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CommentBox.vue?vue&type=template&id=e9a844d2":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CommentBox.vue?vue&type=template&id=e9a844d2 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-64 w-full border "
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=template&id=1e0da615&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=template&id=1e0da615&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1e0da615");

var _hoisted_1 = {
  "class": "px-4 py-2 mx-auto hover:border cursor-pointer my-4 sm:my-0 taskcard sm:mx-0 relative"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-ellipsis-h"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex justify-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "card_title py-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "title font-bold  "
}, "App Project"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "description text-gray-400 font-bold text-sm"
}, "Do your best...")])], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex justify-between items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "collaborators font-medium text-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-bold text-gray-700"
}, "Collaborators"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "77",
  height: "27",
  viewBox: "0 0 77 27",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M61.5928 26.5C68.4963 26.5 74.0928 20.9036 74.0928 14C74.0928 7.09644 68.4963 1.5 61.5928 1.5C54.6892 1.5 49.0928 7.09644 49.0928 14C49.0928 20.9036 54.6892 26.5 61.5928 26.5Z",
  fill: "#F7E0FF",
  stroke: "#00B87C"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M76.4592 3.18921H46.7295V26.1622H76.4592V3.18921Z",
  fill: "url(#pattern0)"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M47.5371 26.5C54.4407 26.5 60.0371 20.9036 60.0371 14C60.0371 7.09644 54.4407 1.5 47.5371 1.5C40.6336 1.5 35.0371 7.09644 35.0371 14C35.0371 20.9036 40.6336 26.5 47.5371 26.5Z",
  fill: "#F8FFCD",
  stroke: "#00B87C"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M61.7297 3.18921H32V26.1622H61.7297V3.18921Z",
  fill: "url(#pattern1)"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M29.5928 26C36.4963 26 42.0928 20.4036 42.0928 13.5C42.0928 6.59644 36.4963 1 29.5928 1C22.6892 1 17.0928 6.59644 17.0928 13.5C17.0928 20.4036 22.6892 26 29.5928 26Z",
  fill: "#F7E0FF",
  stroke: "#00B87C"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M44.4592 2.68921H14.7295V25.6622H44.4592V2.68921Z",
  fill: "url(#pattern2)"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.5371 26C22.4407 26 28.0371 20.4036 28.0371 13.5C28.0371 6.59644 22.4407 1 15.5371 1C8.63355 1 3.03711 6.59644 3.03711 13.5C3.03711 20.4036 8.63355 26 15.5371 26Z",
  fill: "#F8FFCD",
  stroke: "#00B87C"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M29.7297 2.68921H0V25.6622H29.7297V2.68921Z",
  fill: "url(#pattern3)"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  "xlink:href": "#image0",
  transform: "translate(0.212159) scale(0.000965909 0.00125)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pattern", {
  id: "pattern1",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  "xlink:href": "#image1",
  transform: "translate(0.228097) scale(0.000965909 0.00125)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pattern", {
  id: "pattern2",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  "xlink:href": "#image0",
  transform: "translate(0.212159) scale(0.000965909 0.00125)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pattern", {
  id: "pattern3",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  "xlink:href": "#image1",
  transform: "translate(0.228097) scale(0.000965909 0.00125)"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("image", {
  id: "image0",
  width: "596",
  height: "800",
  "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAAMgCAYAAADlXPxKAAAgAElEQVR4XuydB3RVVdbH/5CQhEAICS20QEIPHekdQUFFBXsZexnb6Ojo6DfO6Dij46jjNMfedRwbggqIIgqCSC+hhx56EiBACklI4Fv78oIhJHn3vXtu/++13nqB3LPP3r9zk+x37j571wKFBEiABEigIoFmAFIANAbQsMIrodK/5XsV/6+WQoyFAPYDyAm8y9fB/n1c4fxURQIkECIBlb8AQpyal5MACZCALQQaBQKmtgDkJcFTxfe6tlhlfNKDFYKuzQDWV3htMq6eGkiABGoiwICK9wcJkIAXCXQA0LVSoFQeNMV50eEgPpVWCK7WVQq25HsUEiABgwQYUBkEyOG+JiCPfJoEXk0rfC3/3wCA/OGW94qv8v+L1kHuKIDcal6HAMiORHXfL9Kh3yuXtAbQL/DqG3iP94pzFvghu1cVd7NWAVhhwbycggQ8RYABlaeWk84oIiABUCsA8oe64rt8Lfk1EkRJAFVH0XxmqKkcjO0GsANAZuBV/vVhMyY3Uaewl+CpPHCSr2VNKGoJyP0zH8BPgfdlAA6onYLaSMBbBBhQeWs96U1oBJIB9AHQO/AuuTQSRElA5ReRgKpykFUx8NprIwjZzascPLWx0R6/T50eCK6WAJAAa7XfgdB/EqhIgAEV7we/EJCcmorBk3wtycmUmgkcq7SjJcHWTgC7KrwfUQBRAqWeFV69ALRToJcqzCOwB8CCQHAlARZ3scxjTc0uIMCAygWLRBPDIpAGYBiAMQBGB463h6WIg4ISkIBKgqwsAHLcXx4Xyav8a3kXia30ktN08n8SSEn5AYq7CUjwvRTAHADfA5gNoMzdLtF6EtBPgAGVfla80tkEJIAaFHhJACUnuigkQAL2EZDdzPLASt5lV5NCAp4lwIDKs0vreceSAIwEMCKwEyVH5CkkQALOJCC7V7JjVR5gLXammbSKBMInwIAqfHYcaT2BgRWCKAmmYqw3gTOSAAkoICAJ7RUDLBV5eArMogoSCJ8AA6rw2XGk+QTklNcFgV0oCaA6mz8lZyABErCYgJRjKN+5mgFgu8XzczoSUEKAAZUSjFSimIA8xrsk8JLaTxQSIAF/ECgA8Gng9ZU/XKaXXiHAgMorK+l+P+TYfHkQNdT97tADEiABgwSk3lV5cMVdK4MwOdx8AgyozGfMGWomUB5Eybtbm9JyjUmABMwjwF0r89hSs0ICDKgUwqQq3QSaA/hF4NVD9yheSAIk4HcC3LXy+x3gYP8ZUDl4cTxomrR4KQ+kpBcehQRIgATCISC7Vv8F8BIAaeZMIQHbCTCgsn0JfGHA+YFA6mpfeEsnSYAErCJQHAiqJLDabNWknIcEqiLAgIr3hZkEbg4EUqPMnIS6SYAEfE8gt0JgJT0GKSRgOQEGVJYj98WENwG4A0B/X3hLJ0mABJxCQHpKPgvgP04xiHb4hwADKv+stRWeXhsIpFj2wAranIMESKA6At8CeA6AvFNIwBICDKgswez5SS4DcCeAsz3vKR0kARJwEwHZqZIdK9m5opCAqQQYUJmK1/PKLwoEUuM87ykdJAEScCuBbQAeC5wKdKsPtNsFBBhQuWCRHGhiTwAPA+CpPQcuDk0iARKoksCrAP4AIId8SMAMAgyozKDqXZ1RgUDqtwDqe9dNekYCJOBRAmsCu1VTPOof3bKRAAMqG+G7bOpLA8FUP5fZTXNJgARIoDKBvwd2qwqJhgRUEWBApYqkd/WkAZAdqRu86yI9IwES8CGBRYHdqpk+9J0um0CAAZUJUD2kUvKkJJhK9JBPdIUESIAEKhL4E4DHiYQEjBJgQGWUoDfHjwz8gpF3CgmQAAl4ncD3gd2q+V53lP6ZR4ABlXls3ar5j/y05talo90kQAIGCEhfQCmvIHWrKCQQMgEGVCEj8+wA7kp5dmnpGAmQQAgEpgYS1tNDGMNLSQAMqHgTCAHJH5CdKQoJkAAJkACwH8DvALxOGCSglwADKr2kvHkdd6W8ua70igRIQA0BCagksJIAi0ICNRJgQOXfG4S5Uv5de3pOAiSgn4A8+pOg6iv9Q3ilHwkwoPLfqicDeB6ANDSmkAAJkAAJ6CPwBFMj9IHy61UMqPy18ucFgqku/nKb3pIACZCAEgKySyW7VUxYV4LTW0oYUHlrPWvy5iEeB/bPYtNTEiAB0wgwYd00tO5WzIDK3eunx/pGgV0pto7RQ4vXkAAJkIA+AkxY18fJN1cxoPL2Ug8PBFN9ve0mvSMBEiABWwgwYd0W7M6clAGVM9dFhVV3BYKpGBXKqIMESIAESKBaAkxY583Bwp4evAckgJJTfBJQUUiABEiABKwh8CGAXwPItmY6zuI0AtyhctqKGLNHHu1JMCWP+igkQAIkQALWElgeCKrmWTstZ3MCAQZUTlgFNTZI0rkEU5KETiEBEiABErCHQEEgqHrDnuk5q10EGFDZRV7tvNIdXcoiUEiABEiABJxB4G/8veyMhbDKCgZUVpE2Zx4p0Cm7UlKwk0ICJEACJOAsAlMDu1VbnWUWrTGDAAMqM6hao1Nax0gwJa1kKCRAAiRAAs4ksDEQVM1wpnm0ShUBBlSqSFqr53H2lLIWOGcjARIgAYME7gfwT4M6ONzBBBhQOXhxqjCNjY3dtV60lgRIgAQqEnglsFtVTCzeI8CAyj1rysbG7lkrWkoCJEAC1RGYDeA+AKuJyFsEGFC5Yz3Z2Ngd60QrSYAESEAPgZ2B4svT9FzMa9xBgAGVs9dJqp7/G8BtzjaT1pEACZAACYRB4FcA/hPGOA5xIAEGVA5clIBJXQG8AGCUc02kZSRAAiRAAgYJsF6VQYBOGc6AyikrcbodFwd2plgSwZnrQ6tIgARIQCWBSQAuV6mQuqwnwIDKeubBZnwgUF8q2HX8PgmQAAmQgHcILAEwAsBR77jkL08YUDlnvSMCj/judI5JtIQESIAESMBCAtkARgNYY+GcnEoRAQZUikAaVNMp8IjvXIN6OJwESIAESMD9BCYC+Nz9bvjLAwZU9q/3+YGdqVT7TaEFJEACJEACDiEg5XIkYZ3iEgIMqOxdqHsB/MteEzg7CZAACZCAQwlIZXWmgTh0cSqbxYDKvoWSxsaSgE4hARIgARIggeoIzAJwDvE4nwADKnvW6CMAV9ozNWclARIgARJwGYGVAHq7zGbfmcuAytolbwxgCoCh1k7L2UiABEiABFxOQNrVsDahgxeRAZV1i9MTwGQATD63jjlnIgESIAEvESgAUN9LDnnJFwZU1qymnOSTYCramuk4CwmQAAmQgIcJJALI9bB/rnSNAZX5yyaNjV8zfxrOQAIkQAIk4CMC7QFs8ZG/jneVAZW5S/RHAI+bOwW1kwAJkAAJ+JTAAACLfeq749xmQGXeksiulOxOUUiABEiABEjALALnAfjaLOXUq58AAyr9rEK5cjoAyZuikAAJkAAJkIDZBH4B4AOzJ6H+mgkwoFJ/hywC0F+9WmokARIgARIggWoJSOeNF8jHPgIMqNSy3wBAGh1TSIAESIAESMBqApK3+4TVk3K+kwQYUKm7E/YCSFKnjppIgARIgARIIGQCTwP4XcijOMAwAQZUhhFqCgoB1FWjilpIgARIgARIwBAB6RX7oCENHBwyAQZUISM7bUAcgCPGVHA0CZAACZAACSgnIPlUkldFsYgAA6rwQbcCIL2VKCRAAiRAAiTgRAKvArjDiYZ50SYGVOGtalcAa8IbylEkQAIkQAIkYBmBtwHcbNlsPp6IAVXoiz8YwPzQh3EECZAACZAACdhCQGpUSa0qiokEGFCFBlfqS0mdKQoJkAAJkAAJuInAJACXu8lgt9nKgEr/ikl9KakzRSEBEiABEiABNxL4EsDFbjTcDTYzoNK3SlJfSupMUUiABEiABEjAzQSk75/0/6MoJsCAKjhQqS8ldaYoJEACJEACJOAFAt8DGO0FR5zkAwOq4KtxIvglvIIESIAESIAEXEVgOoDxrrLY4cYyoKp5gaRopxTvpJAACZAACZCA1wi8B+AGrzlllz8MqKonL0U7pXgnhQRIgARIgAS8SuCfAO73qnNW+sWAqmraUrRTindSSIAESIAESMDrBP4A4EmvO2m2fwyoziQsRTuleCeFBEiABEiABPxC4G4AL/nFWTP8ZEB1OtUPAVxlBmjqJAESIAESIAGHE7gawEcOt9Gx5jGg+nlp/gjgcceuFA0jARIgARIgAfMJnAvgW/On8d4MDKhOrqnsSsnuFIUESIAESIAE/E6gL4BlfocQqv8MqICxAKRyLIUESIAESIAESOAkgRQA2wlDPwG/B1QDASzQj4tXkgAJkAAJkIBvCMQDkHqMFB0E/BxQdQGwFECsDk68hARIgARIgAT8SMDPcUJI6+1XUC0ATAPQOyRavJgESIAESIAE/EVgG4BUf7kcnrd+DKjqAZgC4JzwkHEUCZAACZAACfiKwFQAF/nK4zCc9WNA9SmAy8JgxSEkQAIkQAIk4FcCTwP4nV+d1+O33wKq5wA8qAcMryEBEiABEiABEjiNwC8AfEAmVRPwU0B1B4CXeSOQAAmQAAmQAAmETWAcgG/CHu3hgX4JqKTy63QAkR5eS7pGAiRAAiRAAlYQYOHPKij7IaBqHwimOlpxl3EOEiABEiABEvA4gf0AJKjK9LifIbnn9YBK/PsKgGxRUkiABEiABEiABNQQmA3gQgAFatS5X4vXA6r/ALjb/ctED0iABEiABEjAcQQ+DvTCdZxhdhjk5YDqAQDP2wGVc5IACZAACZCATwi8COAen/hao5teDagmBIp3co1JgARIgARIgATMJfAEgD+aO4XztXsxoOoeyJtq5Xz8tJAESIAESIAEPEFACmZ/5glPwnTCiwHVDCahh3k3cBgJkAAJkAAJhEdATvyNBZAR3nD3j/JaQPUUS+O7/6akB/4i0L51Q2zeechfTtNbEvAmAan3ON6brgX3yksB1SV+324Mvty8ggScQ2DsoLYY3rslYmPqoLDoGOau2I1vFmx3joG0hARIIBwCzwB4JJyBbh/jlYCqLYCZADq4fUFoPwn4gcAlozpgWO+WZ7g6b8VuTJ69yQ8I6CMJeJmAL3v+eSWg+gjAlV6+O+kbCXiFwC0Xd0O3do2rdWfp+ix8MGO9V9ylHyTgRwJZgXyqdD8574WA6iEAz/pp0egrCbiVwPihqRjdPzmo+e9NX4cVGdlBr+MFJEACjiXwXSCoKnOshYoNc3tANRrAtwDc7ofiZaU6EnAegX5pSbhmXGfdhj38wjyUHPPN72LdXHghCbiIwL8A/NpF9hoy1c2BSMNAMCUNGikkQAIOJpCc1AD3X9MnJAvl5N+Ln64MaQwvJgEScByBWwG86TirTDDIzQHVqwBuN4EJVZIACSgkEB0VgQd/0ReNG9YNWevXC7bz5F/I1DiABBxF4HDg0d8iR1llgjFuDaiuA/CeCTyokgRIQDGBWyd0R9fURmFrlV0q1qkKGx8HkoATCMwPBFUFTjDGLBvcGFAlAfgBQEezoFAvCZCAGgIXDm+Hs/u2NqSMj/4M4eNgEnAKgf8A+JVTjDHDDjcGVC+ws7UZtwJ1koBaAv27JuHqsfqT0Guaffr8bZi1SDpbUEiABFxMQJ4u/dfF9tdoutsCqosAfOHVxaBfJOAVApKE/stLeiA2JlKJSyWlZfjPxyuxMytPiT4qIQESsIXATgByOt+T1XvdFFBJRqs86utny23ASUmABHQRiK4TgV9e2gMpLeJ1Xa/3olWbcvD21LV6L+d1JEACziQwCcDlzjTNmFVuCqieBPCoMXc5mgRIwGwCV5zTCYO6Nzdlmk9mbcSCVXtM0U2lJEAClhGQgtx/s2w2iyZyS0A1AsAci5hwGhIggTAJjOjTChNGtg9zdPBhuUeK8MInKyHvFBIgAdcSKAEwBsA813pQheFuCaikGrrAp5AACTiUQKc2idqjPrN/qcgOlexUUUiABFxNQIIp+bsuwZUnxOzffSog/RbAMyoUUQcJkIA5BBrGRWtJ6EmN6pkzQSWtkkslOVUUEiABVxOQx37y+M8T4vSAqlcgEb2BJ2jTCRLwKIEbx3dFz45NLPNOTvvJqT85/UchARJwNQFJUJdEddeL0wOqDwBc43rKdIAEPExg3OC2GDuwreUeSl0qqU9FIQEScDUBKaEgpRSkpIKrxckBlUStn7iaLo0nAY8T6N2pKa6/IM02L1/4eAW27pZWYRQSIAEXE5Bin1L009Xi1IBKqgFK75/+rqZL40nAwwSaN66n5U3F14+2zcsN2w/i1cmrbJufE5MACSgjIG1ppD2Na8WpAdUjAJ52LVUaTgIeJ1C7Vi3tRF/H5ATbPf18zmb8sHyX7XbQABIgAUME9gMYCiDDkBYbBzsxoOoU2J0Kvz29jUA5NQn4gcDEUe0xvHcrR7hacPQY5NFf1sFCR9hDI0iABMIm8BaAW8IebfNAJwZUrwO41WYunJ4ESKAaAoN7tMDlYzo6is/S9Vn4YMZ6R9lEY0iABMIicDGAL8MaafMgpwVU5wOYbjMTTk8CJFANgdSW8dqjvqjICMcxkoBKAisKCZCAqwlI/rQ8+nOdOC2gmg1gpOso0mAS8AGBejF1tGCqdbM4R3orj/zk0Z88AqSQAAm4msDDAJ51mwdOCqjuBfAvtwGkvSTgFwLXjOuMfmlJjnZXktMlSZ1CAiTgagKuTFB3SkDVEsACAK1dfQvQeBLwKIHR/ZIxfliqK7yTMgpSToFCAiTgagKuS1B3SkAlJRKkVAKFBEjAYQS6pjbCrRO6O8yq6s2RQp/y6I9CAiTgegKuSlB3QkAlZZYXAajv+qWnAyTgMQJNEuri9ok90LhhXVd5NnNRJmawLY2r1ozGkkAVBFyVoO6EgOolAHfyViIBEnAWgciI2rhtYndHFO8Mhwwf/YVDjWNIwHEEXJOgbndANTCQO+W4FaRBJOB3Alee2wkDuzV3LYYd+/Lw0qSVKC4pc60PNJwESACuSVC3O6CShojX8oYhARJwFoFzB7bBeYNTnGVUGNbMXb4LU3jqLwxyHEICjiLgigR1OwOqsQC+dtSS0RgSIAGtNIKUSPCKvDttLVZuzPGKO/SDBPxKwPEJ6nYGVFMBjPfrnUG/ScCJBNq1aojbJ3ZHVB3nVUIPl1f2wUK8NCkdh/OLw1XBcSRAAvYTmANglP1mVG+BXQHVFQA+djIY2kYCfiPQKD5GK4+Q1Kie51xfuGYvPp7p2ib2nlsPOkQCYRK4C8DLYY41fZhdAdVcAMNM944TkAAJ6CJQq1Yt3DahO7qkJOq63o0XffjNBixeu8+NptNmEiCBkwQ2ARgE4IATgdgRUN0G4DUnwqBNJOBXApeP6YjBPVp42n155Pfip+nIyS30tJ90jgQ8TuApAL93oo92BFTSYkbKJVBIgAQcQGB0/2SMH+qOtjJGca3cmI13p60zqobjSYAE7CMgn4gGA0i3z4SqZ7Y6oLoKwIdOg0B7SMCvBPp0bobrzu/iK/enzN6MuSt2+cpnOksCHiPwLoAbneaT1QGVlEmQcgkUEiABmwmktIjXKqHXjY602RJrpy8qKcVLn6ZjZ1aetRNzNhIgAZUELgDwlUqFRnVZGVCd5zTnjcLjeBJwK4GGcdFaEnqLJv5sobl+20G8NmWVW5ePdpMACQCzAJzjJBBWBlRSJkHKJVBIgARsJnDLxd3QrV1jm62wd/qv5m/Dt4sy7TWCs5MACRghcDuA140oUDnWqoBKEsikazSFBEjAZgKXjOqAYb1b2myF/dOfAPDSpyuxeech+42hBSRAAuEQWB9IUHfED7FVAZWUSZByCRQSIAEbCYzq2xoXDW9nowXOmnrr7sNaUFV2XMIrCgmQgAsJPAHgj06w24qAqiuAFQDqOMFh2kACfiXQq2MT3DBefhwpFQl8t2QHps3bSigkQALuJHAksEu11m7zrQiongPwoN2Ocn4S8DOB5KQG2om++nX5uaaq++CNz1dj7VZHFl/2821L30lAL4FXANyp92KzrjM7oGoV2J3yd/arWatHvSSgg0BcbJQWTLVuFqfjan9esicnHy9/tgr5hSX+BECvScDdBIoA9AawwU43zA6oHgbwVzsd5Nwk4HcCN13YFT06NPE7hqD+S58/6fdHIQEScCWBZwA8YqflZgdUkjvVy04HOTcJ+JkAT/SFtvqsoh4aL15NAg4ikBXYpdprl01mBlSXA/jELsc4Lwn4nYCfevSpWuvS0uN4+bN0yOk/CgmQgOsI/A7A03ZZbWZA9RmAS+xyjPOSgJ8J9EtLwjXjOvsZQdi+b997BK9MSkfxsbKwdXAgCZCALQQ2BnappIGy5WJWQNUHwDLLveGEJEAC6JicgFsndEedyNqkESaB+em7Mem7TWGO5jASIAEbCdwF4GU75jcroGKpBDtWk3P6nkCzxFgtmGrcsK7vWRgF8PG3GVi42rZ0DKPmczwJ+JXAYgAD7HDejICqIYDVAKRkAoUESMAiAjHRkVrD49SW8RbN6O1pCouO4eVJq7ArO8/bjtI7EvAegWsB/M9qt8wIqO6wa7vNanicjwScROD6C9LQu1NTJ5nkels27sjV8qnYmMb1S0kH/EXgWwDnWu2yGQHVHAAjrHaE85GAnwlcPKIdRp7V2s8ITPN99tKd+HLuFtP0UzEJkIApBMYDmG6K5mqUqg6oJCL8xkoHOBcJ+J2ABFISUFHMI/D+V+uwfEO2eRNQMwmQgGoCkwBI+SbLRHVA9RaAmyyznhORgM8J9OncFNedn+ZzCua7fyivWKtPlX3QltPY5jvIGUjAmwSGAphvlWsqAyrpbSE1ICQpnUICJGAygXatGuLWCd0QExVp8kxULwTWbNmPN79YQxgkQALuIfAGgNusMldlQCU7U7JDRSEBEjCZgJRFkBN9TRNjTZ6J6isS+GbBdny9YDuhkAAJuIPAUQDdAGy1wlyVARUro1uxYpzD9wSiIiO0nakOyQm+Z2EHANmlkt0qCgmQgCsIWNaORlVA1RZABoAoV+ClkSTgYgLXntcFfbs0c7EH7jY9O7cQr0xahdy8Inc7QutJwB8E0gH0ssJVVQHV3QD+Y4XBnIME/Exg/LBUjO6X7GcEjvB9RUY23pu+zhG20AgSIIGgBC4DIE/RTBVVAdUMAONMtZTKScDnBIb3boWJo9r7nIJz3J86byu+X7LDOQbREhIggeoIfArgCrPxqAio5Mz2WrMNpX4S8DOBnh2b4MbxXf2MwJG+vzp5FTZsP+hI22gUCZDAaQR6BNrimYZFRUD1EIBnTbOQiknA5wRSWsRrSeixMXV8TsJ57mcdLMSrnzGfynkrQ4tI4AwCTwH4vZlcVARUPwAYbqaR1E0CfiUg5RFuvqgbmjeu51cEjvc7fVMO3pnKTXrHLxQN9DuBzQC6AzDtNInRgKovgCV+XyX6TwJmEIiJjsStF3eDFPCkOJvAzEWZmDF/m7ONpHUkQAI3AHjPLAxGA6o/AnjcLOOolwT8TOCmC7uiRwdpQEBxAwH2+3PDKtFGnxP4CsAFZjEwGlBJj5zBZhlHvSTgVwJXnNMJg7o396v7rvQ7r7BEy6fanZPvSvtpNAn4hIDELAvM8NVIQNUTwEozjKJOEvAzgfFDUzG6P2tNufEe2LzzEF6ZvAplZcfdaD5tJgE/EPgXgF+b4aiRgIqn+8xYEer0NYFRfVvjouHtfM3A7c7PT9+NSd9tcrsbtJ8EvEpgbyA5/YBqB40EVN8CGKPaIOojAb8S6N81CVeP7exX9z3l92ffb8KPK3d7yic6QwIeIiDdXV5S7U+4AVUHABtVG0N9JOBXAl1TG+HWCXKil+IFAmXHT0CKfm7akesFd+gDCXiNwCwA56h2KtyAir37VK8E9fmWgBTuvPeq3r7136uO78nJ14KqIwUlXnWRf\r\n                        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\r\n                        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\r\n                        xgF59QA6q/AnjYLmPdNq+KQoCquovLL5Pf3zLQbQhpr0kEJLFVElxVSa1atfD3+0eoUmeaHqOP0OXx0d2XywEi60TWSR5XZnukGKd15M6cSQ4J3XFpD8gJ7OpExaPhirqltmCD+lXvjLVsUl/LyUuMj9HybaWOVrC82/978UcUKUgDsXMdTJz7OQC/NVF/japDDaiul7qAdhnrtnlV5FssWbcP//taTSG35389ArVrh7rkbqNOe/UQkEdf8ghMpahqAKvSpsq6jBb4tHInTnbUPp21UVlPOVVc4+pFoXF8XcRER2i19KIDL/k6onYtFJWUaSUHio/9/J5feAx5hSWO2F2LjYnEHZf2ROtmVbfjev+rdVi+Qe3Phl72MdGRePrumpvZ//WdxZ6pdK+XSwjXvQjgnhCuV3ppqH9dpaX8EqUWeFiZfJKVT7RGRBqXSqsQFfLQdX21XAIKCXw0MwOL1uxVCuLvD4xEqL9QlBqgQ9m0eVvx3RJjRU2NlkPRYSZmLcqEFCO1U2RXu22LeMguihQmbhRfV2uHJc2wjciRghItuDqSX6L1EZTTzPJ+4LC8ipTVf6rJRulG8asreld58vmFj1fY1iS6X1oSrhlXcwqQ0Q8FRtbOBWOlALm0nLFFQv39J0fWbMmet4WOwUlla1mOkxuR0rLjeOhfc42oODX2+gvS0LtTUyW6qMTdBCZ/vwnzVu5W6oQbdqhUFEaUE2PS6sQM2bEvDx/N3KCsj1woNsrpRenmID0ZU1rGo37dOqEMV3Ztbl4R9u0vxJ79+di3vwD7DhRiV3aeMv3lisQ/aQkjQWJFUdl2JlSj9eTdqmpJFqptLrleMvYH2GVrqAGV2MmefjpX67YJ3ZGW2kjn1dVfJom0KjrCO709SE2gyj+9HjxcpH2irfhv+bRbk0jehPzSbNKwrparIFv+UvivXt062ifUejH2/OEwfGMYUKAqN6/cBHmULI+UnS4qaruFU9soGBd5RDb9x21akGtVYU55PCdNhft0bobu7Rsb3nkK5qOR7wsT+R0oDYslwJJCpvK1nHorOx5+sVZpQv/rq/ucVoD5wX/NRVmZ9e16pN+q9F0NJip2WYPN4eLvy6fE4BBNcjCcgOp/0gvVJHs8pfbmi7ppv6iMiqqTfj07NMGNF3Y1ao7p46WJa+bePK1o4a6sk+9miiSCtkk6+clcAmB51OF1+Wbhdq0gpCqRKvxSjd8N8vuX5xvK5VFdxFSKNcojWKktZbbI4YF2reLRp1NT9OzYVPtw4WY5fvwEcg4d1QKsrECglXWwUEvgl919PSIlP+QAkSSHS/8+6eNntQzv0woTdTawl5IZU2ZLBSNKNQTCiWuUwAxn4t8A+JuS2T2uRFofSEsOozJj/jat9oxRaZYYi0dudF6tIPnkuW7rAWzaeUhri1JUYryQqRFWTRNj0S21kRZctWtlLAfOiB1mjpUCl3KaSZVERUbgmXuHqVJnqp5XJ6/Chu0Hw55DdjefumtI2OPLB0pNqUnfb8TSdVmGdQVTIDu0A7o1R7+0ZobaYQWbx0nflwD1UH4xpDOA7EzmHimGPE7MKziZHC8vSZwXkQT1e67ohezcQjz/XzU5q3pYyIc5CaRC+eCtuk6WHjtddo088rOlWFc4AdVIALNdBtgWc1VVJ1dRkLAcgFMSh+UX3PL1WVrvMbN3oIwsvpy66dI2ET07NoHs8HlFpKbRpO82KnMnJioST99T8+kkZZMZVPTV/G1aA2Ej8ujNA87IvQlFn1TjlpOW8nNgpkh3hP5dk8LuaWembU7RLYFXYdExNKgXhS27DlvSfFh+r8jjPXnJzlgoInl2//ifdUFfKLY55Fo55Sen/SyXcAIqOWt6xHJLXTjh1WM7a7/MjIrkCjz7nprDlSqqtxvxR44j/7hyN7btOWxEjS1jJYlV/kBJpWzZxXKzqCzHIRwkD+1JBbs2VjCVQrnyGN2IGDngIcU5v16g7nFrZT/kRN6g7i203z2SJ0jRT0ACbQm4zRLZkRo3qK2hvwuyq/YIi3vWtETvAbjBrDWsSW84AZXoY2K6jtW6YkxHDFLUpkJV9/Przk9Dn87GH0PqcP/UJZI0/sOyXZi/ao9nCtLJKa8x/ZO1U1FuFNkZfHeauvYacqT+97fYdrgmpCVQ0fxWKl9LBexQ5HB+sRbIyQ6DGdIhOUHb8ZBH1eH+YjfDLjfp/GDGelP6I0ogdc3YzobL6JSzlObNVuTcuWntKtgqhRu72GF7uD93TEzXsVqXnt0BQ3u11HFl8Ev+/dEKJbs6o/q2xkWKGnUGs1p+4GctztRaZnhVpM6YnM6RWj1ukvXbDuC1KauVmdy2eQPtCLpb5LFXftJqIYUrklsnOTd6ZdWmHHz4TYby/EA5DCAfkOTnuqbq33rt9Pt1UvNPav+pFL2n90KZ02geYChzufRa+aSrdiF1gAg3oGJiug64E0a0x4iz1Jzg/OKHLZizbKeOWWu+xIrWGZL4+c2CTOWFIw07b6KCvmnNMH5oqmsSflV3rZcdO6nP5BZ5/fPV2kGIcEWKWz57b/BTjfJ4Rk5kqS6iKsf9ZfdbHj/bVS8qXHZOHvfIf+ZBDguokuG9W2HiqPaq1J3S8/mczfhh+S7lej2kcBSAOVb7E25AxcR0HSt14bBUnN0vWceVwS+RT7hvK+iArqe1QXBrqr6iPJCS/Bw5zuw3kT+yo/sla69Ig9WkzWYnwYQEFapkUPfmuOKcTqrUma5Hcpgkl8mI/Pb6fmjeuPqecHKU/80v1iipISd21q5VC11SErVAKi0lEVICgaKOgDyS/eNrC9QpBGBWd4oFq/bgk1nqDpUoddoZyh4E8LzVpoT7E8nEdB0rdf6QFEgRQBUi7Roef1VNfRSjJ5Sq8kd1XSMVzOzSIbsHchS6h4NPBarOoTKj2KWZ6ydyQs8OAAAgAElEQVQNh6VBtBGp6dCJ/MGbPGczSkv11UKqyQ4pTDuwW3MM6tHcNTugRrjaNXbjjlxIWxeV8pe7h4Z8ik/P/Ft3H4a0yKFUS+BDANdYzSfcgErsZGJ6kNUaN7gtxg5sq2xNVbVEUFUfSxzbk5OP979arxXWo5xOQAKqK87p6MhK7IvX7sOH36hpui1ey2MNebzhFpFaRI8Z/IAypGdLXDa6wxkuC1fha1S6pDTCgG5JnirXYZSJmePnp+/GpO82KZtCmkj/6ZeDlemrqKig6Bh+/9J8U3R7RKls31m+ZW4koGJiepA774KhqdpJMFUigcvyDcaLAMojqfHDUg2bNeOnbZi50Fg9H8NGOFyB/FK9dlwXdGqT4ChLpXTFZ9+r++NhpIyAXWDk8Y485glXkpPicP81Z502fNn6LPx3xvpwVWo7UBJESW6UfE2xjsDk2Zswb4W6/pbyePb2iT1Mc0Aquktld0q1BCxPTDcSUDExPcidLMeq5Xi1KlH1R7BjcgLuvKxn2GZJNeF3p63TdqcowQnID9m4wSmQXopOke+X7ID081MlcuLNbVXlJb9pzZb9hhBUbgg9ff42zAqxaGhUnQh0TW2k1TiTd4o9BF75LB0ZmbnKJpcP0/Kh2ix58dOVWmcJSrUELE9MNxJQMTE9yJ2s+jHI7ux8/O2/S/+fvauAruLa2t8kwV2Cu7sGLSU30JZSd/f21SX3hnr7V16dcm/Kq7u7u1ECheLu7u4WQkgy/9pDaIFGZu6cM3NmZu+1WLSLc7Z850L2PWfvb9v++2NndMYfU9fgO4EjS6wEQ0zGRFT496/yZYwOJyrOJaZjugbftz/P+G/j//fnCW9Tt+LvsWtpvATxgFHxuttCc/yo7k2U0NMG3cZ5SWicE411siN0Q0U3VYfFbG1WlYpl0allLXRulYw2TaojMdH9z4QdHPyw99HXJhqjaUSJKGLn4vyhf4fp32OWYhFwvDDdTkLFhemlfJLPG9wGx3VtIPTzfufIsUIKXR+4tq+lIcC5B/Pxwc8LQd2GsoUGttJsrUZ1qhg/rBrWqQwijoxXaFYgPe3soNlexq8c4/fNO/Yb0+qdFIrl5vO6gpJaN0UUDQfFQDcsT9/mjTl+R2JO8/yIz8eOUA0V1VIdKU+/M6XImsLmDaoZg4mpNooGcbOog8D+A3m474VxQh2iZ/4bz43/JaA0Z2Yt3uLImJzS/FD4z98GcLWT/tlJqMhPLkwv4bQuPKmt0Z0jUl78fBaWrLZ/LX3V6R1NF7tu25VjdETJLDwnHqMurWsbz0Y1q5YXCVmJunLz8rF+yz6s3bTHmClIt4Ciif2OdYAIGG85vysqV3TvRuez3xfjr9liCFe9Rup5+Dz27j+IB1+yV9hL413oJuJIoSfx5z+Zicb1qqBFg2po3rCa8cWASDhZ1ERAFC3NsdEN6dfMGDUjQ+g2jW7VWIpFgOa19XYSH7sJFReml3Bal5zcDr062J/ld6QJEYNdSd8JfZri1OOal/pZozqp5z+dCfoGJ1LoVoO4dCiRoqcw+n+VhMaDrNywCyvW7cKK9bttFS8XFRfduN12YTfXCo8//HkhiC9MhPTpVB8XneR4Q40I1/Ho6xOxw8aAYuKhIj4qFm8j8OUfS/DnTHEF6UeiIfPpzy7jv7dPrVTvqfXc0REWdhMqLkwv4UxlzM0TNTKkXbOauOGckjtQ6Mbmxc9mIjtHXDJFCRSxindVmKOpqCOlH7qrNu4G8b8sX7vLuM2yKzRgOf3iHlJ4akrz7e3v5mGWoOdbGmVEo0+8KCJwIMZ0FerivIi/Kj4Pf2+q1CabYZenSBlPRS8HVLfHUiwCdGsgrli0FKDtJlRcmF4CwFae1cz+hRD11k/F3P+96bhizYpMpui5I6VDPfRsVxdUH+UHoZEiqzbsLrzB2oWVG3bHNbKiSb2qxvOf0zd0omaBEfP+5UPbGwN5vSijJq/G9+PsdTt6scPRi2cly2eiHiAKAplCZQwPXtdXuAkRjRXCnVJL4akAfnTKJbsJFReml3BSNNuMbmREy1NvT8am7faLqf/vP31Ro8q/65XouYtaiO0881UqXwZ9OtdHn471QDcxQRCqbaNvi3TzY2USvJnbQtH4ZX403UgI7QoR19KNY+3q8TcN2PXBzn5qk6fPuh0RTY9ixxfeax2BGYs2490f5lvfaHGHjCHJi1Ztx8tf2GussBiG15bfBWC4U07bTajITy5ML+a06EmNfliKlk9+XYSJczfYVnvNGZ2M+qUjhX7IUuE7dfXFI1RUTqSEXVvXDnQr+Iat+zBn2VbMXbrVKHgvbbJhUcXN8eBvdo+o2gtZn3GzcdhdR8/Z979or7uL/g7R3yUWbyJABLfE8Sdb6N9Gus0UKSI+vyL9UVCXo51+IhKqdwBcoSCQrrtE5JlEoilaKJmipMquENHk0P7/FKYvW7sTr345B9T5ZkXKlU1ESvu6GNCtIaiDjeVoBIiygQgk5y7bBmrVL05kfIMtytbBvALcNXKskGOS9RkX4pxJJY+/OcnWAGM7vG4mXeRlEhGIfjBNaGcvJU7EQUgdw4c7h+n3hsmVhSdUBMsTb03Clh37JSLkadU07VrO/J8iYBGRUF0P4BVPQy7JeVm1FfTcR89+doX4cK4/u7Ohhv5CEmmolZspqv/p36U+erSry0W5Jg+Daq/mL99mJFjzV2xHzhHdk0RQShxVrRpXN6ktvmVEf0FcSSJk2GUpBk+Yl4Wee+jZx47ceXkKGiR7Gwc78Xt1Lz3NP/Ia/cwVJyf1aYqhJjqoRVkUSYEiyieF9FBBeunt7IIcFpFQdQAwT5A/vlJDHVxN69M4IfFCJHR2apzIo8PDO+naeMT7U7HdRPs43UZRcTndRlHLOEv8CBQU6Fi6difmLTuUYBH+VHt25xUpUukUKKF77es58Tt+xM7Hbj5OyeHPVoIbPXUNvrXJ/l8UwacVH3itOwjIqJ9y+tZWBEGtO+g7YpWGHTo2FFNEQkWo0DuG+LctR/CWZyRyaU+D8VuGvPrVHBCFgl15+Pp+oKHL9NxXkhDLMxUf06+ySWpxRtnFQJX9xPlFRe17sw8aTwayRNRMSPocPH279xjSj8WV5qHRXDQ70q1NHVx5Gn23ZPESAl9nLcWY6WuFuUwjhJ6+dYCj9aNUn3n3yLGgp3yWIhGgQmH7PyxNgCsqofoWwOkm7AVqicxngN8mrQKRfNoV4oMqjo+I6qF6tqtjUB5Ur+JYkm83JN5fCgKixs5Q9+a9VzlKRCzlbA/k5uOe5/+0pfvwba8tJbzZcQREdbsedpye6285X2zhuRlQ3vtxPqYvtPdsbcaOR9cQ4aKYK/lSABCVUN0N4CmPgi3NbfphI4sygFr0qRtPtNSpUREdW9ZCj3Z1jFl6LP5DQASZJaHStmlN3HhuyeSwXkGvuPl7VvyXeSNtxQ9eaw4B6sR95l0xtYSHLZqdQGHOQ/Orpi3YhPd/WmB+Q7BWDgHwqxMhi0qo0gD84YTDXrJx/zV9pPHz5OUVgAYl25WEBA1dWtU2uhHbNa9ZJC+VXRu8Xy0ERrw/DWs377HtFM2ppHmVfpBPf1uECXPsUZGck9Yax3c/elCyH7Dxawz01EdPfiLlP2d1doXkdve+XDz0ilxyUpE4OayLBiQTfYJ0EZVQMcFnEUdVHHGmqFOlrjxqzbUrw28fiKQkHtxqF0ev7L//xfHIzjlo292T+zcDEXv6QSbP24iPflloK5TubevgilO5jsoWiA5uFj22pVyZRDxyY3/Q726IqLpaN3yXbPM+AE9KtmGoF5VQkS4qQhjghNNesfHoDf2NTjpZIoqQ7sZzu6JtU+4pkHVOKuklmoZ7X7BHZHk4HplDX53GbMuObDzxlj0qEpo6QF+iWNRHYM++XPz3jYlCC7ndfgLPmrYGVB/J8i8EHgHwsBO4iEyoiN59mBNOe8WG7Jby6Qs3GR16dsWtd3+7fvN+6whQJyENghUhTreHi/C5JB0PvDQe+/bbu7m74+IeaCaJKkV2/EHSL6PmaEi/Zji5n3s3tvRaQa8WLP5IqC4E8DEf5j8IPHXr8SDeJlmybVcOHntjom31xJVFnFks/keAOoGoI0iE3Hd1HyTX8OYMv6Lif+ObuQYfmB05/fgWGNSriR0VvNcBBOh5l555RYpM3kGzflKjEjUssRyFgCdvqFoCEFvh5/FPhRO1SVSISAWJduWRG/qjqsTnSbv+8X4xCBCBJRFZipDhdwxEUqJ/au9GTVmN7/9cbguaI6cP2FLEm6UhQIS6j70xCTv25AizQXyD1OXptlBjBTVYsHg/oaII5gLoyId5CIER4VQkaCJfVf+N7FvfzcPsJVtsQ37laR3RrU2ybT2sQG0EXvp8FhYL+AZbu3oFUBern2T5ul343yczbIVEBckPXtcXlSqUsaWHN8tDQAazuCplE8Sp9vS7U7DDxNQLeQgrp9mTN1SEIg9KLvwslUlKwDO3D5T+yRJViDiweyOp7NzSgWADphC4/8VxoFFDdoWSb0rC/SQFuo6M2BjbIV19ekd0ac1fTmwDKUnBd2OX4Q9Bt7SHXZQ1tzUeCOiWlW5bWf5GwLMJ1W0ARvJBwpjFRmNdZMuK9bsw8mN736rJRxpwS4NuWfyLgKiaO0Lo1AEtcEJv/9UKiWDOHtijEc4OyRsd5N9PqDORieJhO+wtzTS964pezjhvwsq6LXvxrKDGExPmvLDEswkVvQHYr5L2whGV4iNNnqfRM05IOJolxMw9V/VG3ZoVhehiJeohQCOGiCVdhFx/dhe0b15ThCqldHw9ZinGTLM3261hcmUMc+jvvlLgecAZEXMbjw1zUEpjnD6QSojVkbe/n4dZi+2XgqgTkS1P7gHwtC0NJjfLKPCheSj+mEdhEsSiltmZ6UTfMIgvaPvuHNSsWt5QTwlahXJJRXr0/KczSx1ubCaU8wa3xnFdmenZDFZeXPPD+BX4fdIqIa7L5lgT4mQcSuiHEP0wsisy53ja9S3I+z8ftRjjZ60XCoGK9CGiPsdCgXJP2fUAXnPCvIyEKgog7ITzKtugGgqqpTArlDyNnb4Wc5ZuNRKpooSSq86taoOStU4taYD2IfnprxX4daL9H5Sk+5ozOpl1mdd5DIFXvpwNKsi1K34eBLxr7wE8/OoEuxDhnEGtcXw3/nJiG0iBCojMk2Y27hMwJeCwWyoPCKdnP/pyzoLzAXzuBA4yEqpTAPzghPMq2+jbuT4uPNHcnLNfJqzEzxNWWgqHkqveHeuhV8d62LpzP6h7y65Qh9ID1/ZB5Yry2N3t+sj740fgwZf/wt5s+xQb9NRHT35+lf++PrHYLzVmY/Zj0b7Z2FVdN3bGWnw1Wiyzj8r1ciJoQFQ9S4t+DXZq1rCMhKocAOK/D/TXMyL3I5K/koS+PXz080Lb3yJS2tfF1AWbLH7Gil5+2dD26Nm+rhBdrEQdBHbuOYBHXrN/80IRUTE6FaX7VWj6AE0hsCP0peT/rusL6vZlUQMBat6hJh6RonItId22UgH+HgFfokRi5oKu7gBmOmFXRkJFftNk5yudCEBVG6UxJlMy9cKnM7H/gP0WdpEY0K0XzWhj8RcCxABOTOAixO+cZeNmrgPNybQrKv+wtRub1/YvWrUDL39h/xb/yLi9MGHix/Er8JugukmvnfkR/tI8IPs1MSYAkJVQXQ7gXRP2fbuEnvvo2a8oUTWZIl+rVylnEDb6iQHbtx8yC4HRkzI9LYsQ+nwQsadfRdS8w/5dGuD8E9r4FSZPxfXJb4swcc4GoT6fldoKqT0bCdUpWhnV49ItVbbAujHRPjqgryqAPQ7YgayEijIJmuFwqEUtgFISuZ+orjxZsP7nrM7o0KKWLPWs1wUERHHvVCyfhMdvHuBCBM6apMJ0ejKxI8RFd+/VvUG1iSzuIUDP3VSMnpMr7jWgYvkyuOuKFINvUHWRQWSqesxH+LcTQA2n/JWVUJH/3wE4zalAVLNzy/ndjG68ooQ6+d78Vszzi4y4U3s0wllMTCgDWld0iupcI+e7tk7GVRa6V10JWIDRj39dhElz7d9oXH5KB/RoV0eAR6wiXgRETZM40r6Xbh+37Mg2bqkOHMyPF0Iv7/sawNlOBSAzoUoHEHMqENXslMZDI/IJRnTs9WpVwt1XqsP8Kzq+oOn7a/Z6fPb7YiFhnze4DY7r2kCILpWVzFy8Ge98P9+2i5RMUVLF4h4CsQ+nY/XG3UIdKOkLs1BDgpR9lbXUoOUJoBCFU6ZTcctMqIjQaI5Tgahmh8bOlHYdTO/bdFu1bvNeo02bCtSpfkMFuf2i7mjeoJoKrrAPNhF4/es5mLd8m00th7bfd3VvJNfwP5v+vv0H8cBL421jRs999OxX2r8Ftg2xgiIRoM89ff5FSusmNXDzeV1FqpSua8PWfRjxwTTk5xdIt6WYgb4AJjnlk8yEimL4C4D8gXZOoWXBDg1GttMyTSMS5izb6tq3iiH9muHkftQcweJlBGjg733PjxNy3U+JFCVUQRFRbfZUmE5PRCzOI/DO9/MwU/AIlgtOaIN+HjzPz0ctwfhZ65w/BPcsUv0UFQM7lkXKTqgeBfCge3i6Y5kSKUqoRIiM2VNm/GpSrwrCl/Q0s5TXKIyAyHq9vp3q48KTzJHVKgyJadd+mbgSP/9lvzPS70SopgF1eOGqDbtBw65FCnVB331FL5QvZgyYSFuida3dvMeopQqQfAvgTCfjlZ1QpQIQM7nXSVRs2qLrfXryEyWihh9b9Yef/awipt56kd9KLz25PVI6BIf0dfm6XfjfJzOEHCrVJFJtIotzCMiY2xfq2Rhnpqo1CNkKosSvRjxrARG6zHnMyVhlJ1QUyyIAgSJjoUHGVJQuStxKqE7o0xSnHtdcVBisxwUEqF1847Z9QiybqQsUYkghJfe/OF4Ih89pA1pgcO8mCkXmb1doHNfw96YiV3BnW+TSnmhct\r\n                        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\r\n                        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\r\n                        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\r\n                        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"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("image", {
  id: "image1",
  width: "563",
  height: "800",
  "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjMAAAMgCAYAAADWZ+NDAAAgAElEQVR4XuydB3hWRfbG3/QQaoCEhBp6770JAioqCiJW7Oiqq6Kgrn/dXXXXrhR7710s2FFWJaA0QXrvvXcCBALk/5wvXyCQ8t1+5977nufJEzQzZ875zSW839yZM1GgkQAJkID/CcQCKAegfIGvgv9d1J+TAOSEv44W+HOk/7cdwI4ivg77HzMzJAF3CES5MyxHJQESIAHLCVQHUBtAnfBXwT+nWz6afof7ixE5WwGsArAy/H2PftfsQQLBJkAxE+z5Z/Yk4DUC9QE0K0a0xHstmWLi3VVA2BQUOfLntT7JkWmQgKUEKGYsxUlnJEACFhKoBqD9aV8VLPTvRVfyuktEzXIA80/78mI+jJkELCFAMWMJRjohARIwSUBEyunCRcQMTTuB08WN/Pc67d3ZkgS8S4Bixrtzx8hJwKsE4sLCpUMBASOvj2jWE9hbYPVmBoA/wqs61o9EjyTgIgGKGRfhc2gSCAgBESrdAHQOi5dWAclb1TRlw7GImvyvmaoGyrhIQCsBihmtpNiOBEhAK4G2ALqHBUxXAGlaO7KdKwSyw8JmMoDfw3/mMXJXpoKDGiVAMWOUHPuRAAkIAXlllC9cOgHoCKAi0XieQP4rqYkA5IvHxT0/pf5OgGLG3/PL7EjAagKVAMhqi4gW+RIBU9rqQehPOQJ/AZgQFjbTwvVylAuSAQWXAMVMcOeemZOAFgKpAM4Ii5Z8ASOrMbRgExBBIys28n06gM3BxsHs3SZAMeP2DHB8ElCPQGMAvQH0CX8vo16IjEgxArLfJl/YiMjZplh8DMfnBChmfD7BTI8ENBKQ00b54kX+TCMBowSyAPwK4Jfw98VGHbEfCWglQDGjlRTbkYC/CMhqS8HVF1mNoZGAHQTkCHi+uJE/00jAcgIUM5YjpUMSUJZArQKrLyJkZD8MjQScJCCrNAVXbWQVh0YCpglQzJhGSAckoDQBqfkiwiV/FSZa6WgZXJAIyL6a8QB+DH9JtWIaCRgiQDFjCBs7kYDSBNoBOC/8JSeQaCSgOgERNvmi5gcAB1UPmPGpRYBiRq35YDQkYJRA67B4OTdcB8aoH/YjAbcJbCwgbETgHHE7II6vPgGKGfXniBGSQHEEWgAQ8SKrMFILhkYCfiOwNixsZLVGhE2u3xJkPtYQoJixhiO9kIBTBJoUeIV0plODchwSUIDACgA/h/fZyF4buVOKRgIhAhQzfBBIQH0CDQsIGKkFQyOBoBOQV1EiaP4X/r4z6ECCnj/FTNCfAOavKoHaAC4Ii5hzVA2ScZGAAgTkEkwRNvniZp0CMTEEhwlQzDgMnMORQAkE5Nj0RQAGhr8SSYsESEAXgZywqBkH4CveGaWLnacbU8x4evoYvE8IyFHqfAEjr5RoJEAC5gnIis2XYVEjm4dpPiZAMePjyWVqShOoXEDA8DWS0lPF4HxAYHYBYcO7onwwoaenQDHjw0llSkoTEOGSvwojgoZGAiTgLAF5/ZS/YsMTUc6yt200ihnb0NIxCZwgIK\r\n                        +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\r\n                        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\r\n                        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\r\n                        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\r\n                        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\r\n                        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"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "percent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "70",
  height: "70",
  viewBox: "0 0 70 70",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM6.03216 35C6.03216 50.9985 19.0015 63.9678 35 63.9678C50.9985 63.9678 63.9678 50.9985 63.9678 35C63.9678 19.0015 50.9985 6.03216 35 6.03216C19.0015 6.03216 6.03216 19.0015 6.03216 35Z",
  fill: "#F6F6F6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M66.9839 35C68.6497 35 70.0135 36.3529 69.8701 38.0124C69.4714 42.6285 68.159 47.13 65.9983 51.2512C63.3698 56.265 59.5644 60.5663 54.9084 63.7864C50.2524 67.0064 44.8849 69.049 39.2661 69.739C34.6475 70.3062 29.9725 69.9456 25.5127 68.6896C23.9093 68.2381 23.1248 66.4846 23.7127 64.926V64.926C24.3005 63.3675 26.0382 62.597 27.6494 63.0197C31.1887 63.9482 34.8811 64.2001 38.5309 63.7519C43.1813 63.1808 47.6237 61.4902 51.4773 58.8251C55.3308 56.16 58.4804 52.6 60.6559 48.4504C62.3633 45.1936 63.4307 41.6499 63.811 38.0107C63.9841 36.354 65.3182 35 66.9839 35V35Z",
  fill: "#00B87C"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22.93 33.1625C23.005 32.6625 23.145 32.2225 23.35 31.8425C23.555 31.4625 23.8125 31.145 24.1225 30.89C24.4325 30.63 24.7875 30.435 25.1875 30.305C25.5925 30.175 26.0275 30.11 26.4925 30.11C26.9575 30.11 27.385 30.1775 27.775 30.3125C28.165 30.4425 28.4975 30.63 28.7725 30.875C29.0525 31.115 29.27 31.405 29.425 31.745C29.58 32.085 29.6575 32.46 29.6575 32.87C29.6575 33.215 29.615 33.52 29.53 33.785C29.445 34.05 29.3225 34.2825 29.1625 34.4825C29.0075 34.6825 28.8175 34.8525 28.5925 34.9925C28.3675 35.1275 28.115 35.24 27.835 35.33C28.52 35.52 29.035 35.83 29.38 36.26C29.725 36.685 29.8975 37.225 29.8975 37.88C29.8975 38.385 29.8025 38.84 29.6125 39.245C29.4225 39.645 29.1625 39.985 28.8325 40.265C28.5025 40.54 28.1175 40.7525 27.6775 40.9025C27.2425 41.0475 26.7775 41.12 26.2825 41.12C25.7175 41.12 25.2325 41.0525 24.8275 40.9175C24.4225 40.7775 24.0775 40.585 23.7925 40.34C23.5075 40.09 23.27 39.7925 23.08 39.4475C22.895 39.0975 22.7375 38.715 22.6075 38.3L23.245 38.03C23.41 37.96 23.57 37.94 23.725 37.97C23.88 38 23.9925 38.0875 24.0625 38.2325C24.1375 38.3825 24.2225 38.5525 24.3175 38.7425C24.4175 38.9275 24.55 39.105 24.715 39.275C24.88 39.44 25.085 39.58 25.33 39.695C25.58 39.81 25.8925 39.8675 26.2675 39.8675C26.6275 39.8675 26.9425 39.81 27.2125 39.695C27.4825 39.575 27.7075 39.4225 27.8875 39.2375C28.0675 39.0475 28.2025 38.8375 28.2925 38.6075C28.3825 38.3775 28.4275 38.15 28.4275 37.925C28.4275 37.645 28.3925 37.3875 28.3225 37.1525C28.2525 36.9175 28.1175 36.7175 27.9175 36.5525C27.7225 36.3825 27.45 36.25 27.1 36.155C26.75 36.06 26.295 36.0125 25.735 36.0125V34.9475C26.195 34.9425 26.5825 34.895 26.8975 34.805C27.2175 34.715 27.475 34.59 27.67 34.43C27.865 34.27 28.005 34.08 28.09 33.86C28.18 33.64 28.225 33.395 28.225 33.125C28.225 32.83 28.18 32.5725 28.09 32.3525C28 32.1325 27.8725 31.95 27.7075 31.805C27.5475 31.655 27.355 31.545 27.13 31.475C26.91 31.4 26.67 31.3625 26.41 31.3625C26.15 31.3625 25.91 31.4 25.69 31.475C25.47 31.55 25.275 31.655 25.105 31.79C24.935 31.925 24.7925 32.085 24.6775 32.27C24.5625 32.455 24.48 32.655 24.43 32.87C24.36 33.06 24.27 33.1875 24.16 33.2525C24.055 33.3175 23.9025 33.3325 23.7025 33.2975L22.93 33.1625ZM35.0512 39.9575C35.3912 39.9575 35.6937 39.91 35.9587 39.815C36.2237 39.72 36.4487 39.5875 36.6337 39.4175C36.8187 39.2425 36.9587 39.035 37.0537 38.795C37.1487 38.555 37.1962 38.2925 37.1962 38.0075C37.1962 37.6575 37.1387 37.3575 37.0237 37.1075C36.9087 36.8525 36.7537 36.645 36.5587 36.485C36.3637 36.32 36.1362 36.2 35.8762 36.125C35.6162 36.045 35.3412 36.005 35.0512 36.005C34.7562 36.005 34.4787 36.045 34.2187 36.125C33.9587 36.2 33.7312 36.32 33.5362 36.485C33.3412 36.645 33.1862 36.8525 33.0712 37.1075C32.9612 37.3575 32.9062 37.6575 32.9062 38.0075C32.9062 38.2925 32.9537 38.555 33.0487 38.795C33.1437 39.035 33.2837 39.2425 33.4687 39.4175C33.6537 39.5875 33.8787 39.72 34.1437 39.815C34.4087 39.91 34.7112 39.9575 35.0512 39.9575ZM35.0512 31.235C34.7412 31.235 34.4687 31.2825 34.2337 31.3775C34.0037 31.4675 33.8112 31.5925 33.6562 31.7525C33.5012 31.9125 33.3837 32.0975 33.3037 32.3075C33.2287 32.5175 33.1912 32.7425 33.1912 32.9825C33.1912 33.2175 33.2237 33.4475 33.2887 33.6725C33.3587 33.8925 33.4662 34.09 33.6112 34.265C33.7612 34.435 33.9537 34.5725 34.1887 34.6775C34.4237 34.7825 34.7112 34.835 35.0512 34.835C35.3862 34.835 35.6712 34.7825 35.9062 34.6775C36.1462 34.5725 36.3387 34.435 36.4837 34.265C36.6337 34.09 36.7412 33.8925 36.8062 33.6725C36.8762 33.4475 36.9112 33.2175 36.9112 32.9825C36.9112 32.7425 36.8712 32.5175 36.7912 32.3075C36.7162 32.0975 36.6012 31.9125 36.4462 31.7525C36.2912 31.5925 36.0962 31.4675 35.8612 31.3775C35.6312 31.2825 35.3612 31.235 35.0512 31.235ZM36.6637 35.3825C37.3337 35.5825 37.8412 35.905 38.1862 36.35C38.5362 36.795 38.7112 37.3575 38.7112 38.0375C38.7112 38.5075 38.6212 38.9325 38.4412 39.3125C38.2662 39.6925 38.0162 40.0175 37.6912 40.2875C37.3712 40.5525 36.9862 40.7575 36.5362 40.9025C36.0862 41.0475 35.5912 41.12 35.0512 41.12C34.5112 41.12 34.0162 41.0475 33.5662 40.9025C33.1162 40.7575 32.7287 40.5525 32.4037 40.2875C32.0837 40.0175 31.8337 39.6925 31.6537 39.3125C31.4787 38.9325 31.3912 38.5075 31.3912 38.0375C31.3912 37.3575 31.5637 36.795 31.9087 36.35C32.2587 35.905 32.7687 35.5825 33.4387 35.3825C32.8837 35.1725 32.4662 34.86 32.1862 34.445C31.9062 34.025 31.7662 33.5275 31.7662 32.9525C31.7662 32.5525 31.8437 32.18 31.9987 31.835C32.1587 31.485 32.3812 31.1825 32.6662 30.9275C32.9562 30.6725 33.3037 30.4725 33.7087 30.3275C34.1137 30.1825 34.5612 30.11 35.0512 30.11C35.5412 30.11 35.9887 30.1825 36.3937 30.3275C36.7987 30.4725 37.1437 30.6725 37.4287 30.9275C37.7187 31.1825 37.9412 31.485 38.0962 31.835C38.2562 32.18 38.3362 32.5525 38.3362 32.9525C38.3362 33.5275 38.1962 34.025 37.9162 34.445C37.6362 34.86 37.2187 35.1725 36.6637 35.3825ZM44.8623 32.8325C44.8623 33.2525 44.7948 33.6275 44.6598 33.9575C44.5298 34.2875 44.3548 34.5675 44.1348 34.7975C43.9148 35.0225 43.6573 35.1975 43.3623 35.3225C43.0723 35.4425 42.7673 35.5025 42.4473 35.5025C42.1023 35.5025 41.7823 35.4425 41.4873 35.3225C41.1973 35.1975 40.9448 35.0225 40.7298 34.7975C40.5148 34.5675 40.3448 34.2875 40.2198 33.9575C40.0998 33.6275 40.0398 33.2525 40.0398 32.8325C40.0398 32.4025 40.0998 32.02 40.2198 31.685C40.3448 31.35 40.5148 31.0675 40.7298 30.8375C40.9448 30.6025 41.1973 30.425 41.4873 30.305C41.7823 30.18 42.1023 30.1175 42.4473 30.1175C42.7923 30.1175 43.1098 30.18 43.3998 30.305C43.6948 30.425 43.9498 30.6025 44.1648 30.8375C44.3848 31.0675 44.5548 31.35 44.6748 31.685C44.7998 32.02 44.8623 32.4025 44.8623 32.8325ZM43.7223 32.8325C43.7223 32.5125 43.6873 32.2425 43.6173 32.0225C43.5523 31.7975 43.4623 31.6175 43.3473 31.4825C43.2323 31.3425 43.0973 31.2425 42.9423 31.1825C42.7873 31.1175 42.6223 31.085 42.4473 31.085C42.2723 31.085 42.1073 31.1175 41.9523 31.1825C41.7973 31.2425 41.6623 31.3425 41.5473 31.4825C41.4373 31.6175 41.3498 31.7975 41.2848 32.0225C41.2198 32.2425 41.1873 32.5125 41.1873 32.8325C41.1873 33.1425 41.2198 33.4075 41.2848 33.6275C41.3498 33.8425 41.4373 34.0175 41.5473 34.1525C41.6623 34.2875 41.7973 34.385 41.9523 34.445C42.1073 34.505 42.2723 34.535 42.4473 34.535C42.6223 34.535 42.7873 34.505 42.9423 34.445C43.0973 34.385 43.2323 34.2875 43.3473 34.1525C43.4623 34.0175 43.5523 33.8425 43.6173 33.6275C43.6873 33.4075 43.7223 33.1425 43.7223 32.8325ZM48.6123 30.47C48.6673 30.405 48.7298 30.35 48.7998 30.305C48.8748 30.255 48.9773 30.23 49.1073 30.23H50.1648L42.2598 40.7675C42.2048 40.8375 42.1398 40.895 42.0648 40.94C41.9898 40.98 41.8998 41 41.7948 41H40.7073L48.6123 30.47ZM50.8548 38.4575C50.8548 38.8775 50.7873 39.2525 50.6523 39.5825C50.5223 39.9125 50.3473 40.1925 50.1273 40.4225C49.9073 40.6475 49.6498 \r\n                        40.8225 49.3548 40.9475C49.0648 41.0675 48.7598 41.1275 48.4398 41.1275C48.0948 41.1275 47.7748 41.0675 47.4798 40.9475C47.1898 40.8225 46.9373 40.6475 46.7223 40.4225C46.5073 40.1925 46.3373 39.9125 46.2123 39.5825C46.0923 39.2525 46.0323 38.8775 46.0323 38.4575C46.0323 38.0275 46.0923 37.645 46.2123 37.31C46.3373 36.975 46.5073 36.6925 46.7223 36.4625C46.9373 36.2275 47.1898 36.05 47.4798 35.93C47.7748 35.81 48.0948 35.75 48.4398 35.75C48.7848 35.75 49.1023 35.81 49.3923 35.93C49.6873 36.05 49.9423 36.2275 50.1573 36.4625C50.3773 36.6925 50.5473 36.975 50.6673 37.31C50.7923 37.645 50.8548 38.0275 50.8548 38.4575ZM49.7148 38.4575C49.7148 38.1375 49.6798 37.8675 49.6098 37.6475C49.5448 37.4275 49.4548 37.25 49.3398 37.115C49.2248 36.975 49.0898 36.875 48.9348 36.815C48.7798 36.75 48.6148 36.7175 48.4398 36.7175C48.2598 36.7175 48.0923 36.75 47.9373 36.815C47.7873 36.875 47.6548 36.975 47.5398 37.115C47.4298 37.25 47.3423 37.4275 47.2773 37.6475C47.2123 37.8675 47.1798 38.1375 47.1798 38.4575C47.1798 38.7725 47.2123 39.0375 47.2773 39.2525C47.3423 39.4675 47.4298 39.6425 47.5398 39.7775C47.6548 39.9125 47.7873 40.01 47.9373 40.07C48.0923 40.13 48.2598 40.16 48.4398 40.16C48.6148 40.16 48.7798 40.13 48.9348 40.07C49.0898 40.01 49.2248 39.9125 49.3398 39.7775C49.4548 39.6425 49.5448 39.4675 49.6098 39.2525C49.6798 39.0375 49.7148 38.7725 49.7148 38.4575Z",
  fill: "black"
})])])], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex justify-between my-2\" data-v-1e0da615><div class=\"flex items-center text-gray-400  text-sm\" data-v-1e0da615><i class=\"pi pi-calendar\" data-v-1e0da615></i><span class=\"px-1\" data-v-1e0da615>Jan 03, 2020</span></div><div class=\"flex items-center text-gray-400  text-sm\" data-v-1e0da615><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1e0da615><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.39199 1.66656H13.617C16.442 1.66656 18.3336 3.6499 18.3336 6.5999V13.4091C18.3336 16.3499 16.442 18.3332 13.617 18.3332H6.39199C3.56699 18.3332 1.66699 16.3499 1.66699 13.4091V6.5999C1.66699 3.6499 3.56699 1.66656 6.39199 1.66656ZM9.52531 12.4916L13.4836 8.53325C13.767 8.2499 13.767 7.79157 13.4836 7.4999C13.2003 7.21657 12.7336 7.21657 12.4503 7.4999L9.00864 10.9416L7.55032 9.48325C7.26699 9.19992 6.80033 9.19992 6.51699 9.48325C6.23366 9.76658 6.23366 10.2249 6.51699 10.5166L8.50031 12.4916C8.64198 12.6332 8.82531 12.6999 9.00864 12.6999C9.20031 12.6999 9.38364 12.6332 9.52531 12.4916Z\" fill=\"#999999\" data-v-1e0da615></path></svg><span class=\"px-1\" data-v-1e0da615>2 tasks</span></div></div>", 1);

var _hoisted_7 = [_hoisted_4, _hoisted_5, _hoisted_6];

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CardMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CardMenu");

  var _directive_click_away = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("click-away");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "menu_btn px-6 py-3 absolute top-0 right-0",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleMenu && $options.toggleMenu.apply($options, arguments);
    })
  }, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CardMenu, {
    links: $data.links,
    onToggleMenu: $options.toggleMenu
  }, null, 8
  /* PROPS */
  , ["links", "onToggleMenu"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isModalVisible]])], 512
  /* NEED_PATCH */
  ), [[_directive_click_away, $options.ClickAway]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.alert();
    })
  }, _hoisted_7)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=template&id=b239f876&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=template&id=b239f876&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b239f876");

var _hoisted_1 = {
  "class": "textarea-emoji-picker relative mx-auto shadow-inner"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  style: {
    "width": "20px",
    "height": "20px"
  },
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "#888888",
  d: "M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
})], -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = ["value"];

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<picker\r\n       v-show=\"showEmojiPicker\"\r\n      title=\"Pick your emoji...\"\r\n      emoji=\"point_up\"\r\n      @click=\"addEmoji\"\r\n    /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["emoji-trigger", {
      'triggered': $data.showEmojiPicker
    }]),
    onMousedown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.toggleEmojiPicker && $options.toggleEmojiPicker.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_3, 34
  /* CLASS, HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    ref: "textarea",
    "class": "textarea pl-2 py-2 rounded w-full shadow-lg outline-none shadow-inner pr-7 border",
    value: _ctx.value,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('input', $event.target.value);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_4)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=template&id=f8dfcc6e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=template&id=f8dfcc6e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full flex px-6"
};
var _hoisted_2 = {
  id: "Details",
  "class": "flex-grow px-2"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"header py-4 flex justify-between items-center border-b-2\"><div><h2 class=\"text-xl font-bold text-green-500\"><i class=\"pi pi-calendar px-2\"></i>Todo 01</h2></div><div class=\"flex flex-row items-center\"><img src=\"/img/three.svg\"><span><i class=\"pi text-green-500 px-4 pi-user-plus\"></i></span></div></div><div class=\"sub-header flex py-3 items-center border-b-2\"><div class=\"button px-4 py-2 mr-2 bg-green-500 font-bold cursor-pointer rounded text-white\">+ Add a new Task</div><div class=\"amt_completed px-4 py-2 flex items-center\"><svg width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.9999 1.82458H4.99988C4.17145 1.82458 3.49988 2.49616 3.49988 3.32459V15.3246C3.49988 16.153 4.17145 16.8246 4.99988 16.8246H13.9999C14.8283 16.8246 15.4999 16.153 15.4999 15.3246V6.32459L10.9999 1.82458Z\" stroke=\"#242424\" stroke-width=\"1.22693\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M10.9999 1.82458V6.32459H15.4999\" stroke=\"#242424\" stroke-width=\"1.22693\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M12.4999 10.0747H6.49988\" stroke=\"#242424\" stroke-width=\"1.22693\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M12.4999 13.0747H6.49988\" stroke=\"#242424\" stroke-width=\"1.22693\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M7.99988 7.07458H7.24988H6.49988\" stroke=\"#242424\" stroke-width=\"1.22693\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><!-- 07060961923 --><span class=\"font-bold \">3 completed</span></div></div><div class=\"description py-2 \"><span>Our todo plugin is a collection which means more than one todo can be made. Each todo can contain multiple tasks containing which includes: the title, the description, list of check able task. Note each todo is a room, when you create a todo you’ve automatically created a channel with the same name (visible in the side bar) and everyone assigned to it will be in that channel. At the point of creating the todo you can decide to make it private or public </span></div>", 3);

var _hoisted_6 = {
  "class": "progress_container flex flex-col"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "progress_text self-end text-sm font-medium "
}, "100% Completed", -1
/* HOISTED */
);

var _hoisted_8 = ["value"];
var _hoisted_9 = {
  "class": "tasks_container py-4"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "task_head font-bold my-2"
}, "Pending", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "task_content flex-grow pl-2"
};
var _hoisted_12 = {
  "class": "task_title pb-3 font-medium"
};
var _hoisted_13 = {
  "class": "task_number"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" in the main todo, every intern must complete a task succesfully to go to stage 6");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"task_details flex flex-row justify-between\"><div class=\"task_comment-amt flex items-center\"><img src=\"/img/three.svg\"><span class=\"pl-2 font-bold text-sm text-green-500\">5 comments</span><span class=\"pl-2 text-gray-500 text-sm\">Last Comment 12 hours ago</span></div><div class=\"task_tag flex flex-row items-center\"><div class=\"text-gray-500 pr-1\"><i class=\"pi pi-tag\"></i><span class=\"px-2 capitalize font-bold text-sm\">General</span></div><div class=\"text-gray-500 pr-1\"><i class=\"pi pi-tag\"></i><span class=\"px-2 capitalize font-bold text-sm\">HNG</span></div><div class=\"text-blue-500 pr-1\"><i class=\"pi pi-calendar\"></i><span class=\"px-2 font-bold text-sm\">Tomorrow</span></div><div></div></div></div>", 1);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "Comment",
  "class": "w-1/4 flex-shrink-0 border"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Checkbox");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("progress", {
    id: "progress",
    "class": "w-full mx-auto",
    value: $options.percent,
    max: "100"
  }, " 32% ", 8
  /* PROPS */
  , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.alltasks, function (i, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index++,
      "class": "pl-4 m-2 task_box flex py-2 hover:shadow rounded hover:border"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Checkbox, {
      modelValue: $data.checked,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.checked = $event;
      }),
      id: 'city' + index++,
      name: "city",
      value: 'Chicago' + index++
    }, null, 8
    /* PROPS */
    , ["modelValue", "id", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, "Task 0" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index++) + " -", 1
    /* TEXT */
    ), _hoisted_14]), _hoisted_15])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"flex flex-row justify-between items-center\"> \r\n      {{this.$route.params.id}}\r\n      <div @click=\"close\" class=\"font-bold text-green-500\">X</div>\r\n      </div>\r\n      <p class=\"text-green-500 font-bold \">\r\n        This is the todo details section,\r\n        \r\n      </p>\r\n      <p class=\"text-lg font-bold text-wrap text-red-500\">Still under construction</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>\r\n        <div>\r\n          <p>Task Title</p>\r\n        <span>Created On: 12/03348n/39424</span>\r\n        <p>oihsoiv hwt0pu;n4wy0iohjgwklef</p>\r\n        </div>\r\n        <div>\r\n          <p>Task Title</p>\r\n          <div>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"flex\">\r\n          <div>\r\n            <p>Due Date</p>\r\n            <span>p320409</span>\r\n          </div>\r\n          <div>\r\n            <p>Worked </p>\r\n            <span>loiwheot</span>\r\n          </div>\r\n        </div>\r\n      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <TextArea /> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Didier.vue?vue&type=template&id=5aae6580":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Didier.vue?vue&type=template&id=5aae6580 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-2"
};
var _hoisted_2 = {
  id: "header"
};
var _hoisted_3 = {
  id: "logo ",
  "class": "flex items-center flex-row"
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-bold text-lg"
}, "Zuri", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex flex-col md:flex-row flex-start  justify-start md:items-center md:justify-between"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_8 = {
  "class": "sm:grid p-2 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 "
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TaskForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TaskForm");

  var _component_shareModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("shareModal");

  var _component_AddTaskBtn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddTaskBtn");

  var _component_SearchInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchInput");

  var _component_TodoNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TodoNav");

  var _component_NewCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NewCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-8 m-4",
    src: './img/zuri-logo.svg'
  }, null, 8
  /* PROPS */
  , _hoisted_4), _hoisted_5])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.isModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TaskForm, {
        key: 0,
        onToggleModal: $options.toggleModal
      }, null, 8
      /* PROPS */
      , ["onToggleModal"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.isShareModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_shareModal, {
        key: 0,
        onToggleShareModal: $options.toggleShareModal
      }, null, 8
      /* PROPS */
      , ["onToggleShareModal"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddTaskBtn, {
    onClick: $options.toggleModal
  }, null, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchInput, {
    onSearchTodo: $options.searchTodo
  }, null, 8
  /* PROPS */
  , ["onSearchTodo"]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TodoNav, {
    onShowLabel: _cache[0] || (_cache[0] = function ($event) {
      return $data.showEditModal = true;
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <TodoCard /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(8, function (i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NewCard, {
      key: i++
    });
  }), 64
  /* STABLE_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".percent[data-v-1e0da615] {\n  transform: translateY(-15px);\n}\n.taskcard[data-v-1e0da615] {\n  background: #ffffff;\n  box-sizing: border-box;\n  border-radius: 0.6em;\n  max-width: 30em;\n  box-shadow: 0px 0px 15px #e7e7e7de;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "progress[value] {\n  /* Reset the default appearance */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  border-radius: 0.6em;\n  height: 5px;\n}\nprogress[value]::-webkit-progress-bar {\n  border-radius: 2px;\n  background-color: #E2ECF8;\n}\nprogress[value]::-webkit-progress-value {\n  background-color: #00B87C;\n  border-radius: 2px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".emoji-mart[data-v-b239f876] {\n  position: absolute;\n  top: 33px;\n  right: 10px;\n}\n.emoji-trigger[data-v-b239f876] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  height: 20px;\n}\n.emoji-trigger path[data-v-b239f876] {\n  transition: 0.1s all;\n}\n.emoji-trigger:hover path[data-v-b239f876] {\n  fill: #000000;\n}\n.emoji-trigger.triggered path[data-v-b239f876] {\n  fill: darken(#FEC84A, 15%);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/primevue/checkbox/checkbox.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/primevue/checkbox/checkbox.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/primevue/utils/utils.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var script = {
    name: 'Checkbox',
    inheritAttrs: false,
    emits: ['click', 'update:modelValue', 'change', 'input'],
    props: {
        value: null,
        modelValue: null,
        binary: Boolean,
        class: null,
        style: null,
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        }
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                }
                else {
                    if (this.checked)
                        newModelValue = this.modelValue.filter(val => !primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.equals(val, this.value));
                    else
                        newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$emit('input', newModelValue);
                this.$refs.input.focus();
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    },
    computed: {
        checked() {
            return this.binary ? this.modelValue === this.trueValue : primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return ['p-checkbox p-component', this.class, {'p-checkbox-checked': this.checked, 'p-checkbox-disabled': this.$attrs.disabled, 'p-checkbox-focused': this.focused}];
        }
    }
};

const _hoisted_1 = { class: "p-hidden-accessible" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("div", {
    class: $options.containerClass,
    onClick: _cache[3] || (_cache[3] = $event => ($options.onClick($event))),
    style: $props.style
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({
        ref: "input",
        type: "checkbox",
        checked: $options.checked,
        value: $props.value
      }, _ctx.$attrs, {
        onFocus: _cache[1] || (_cache[1] = (...args) => ($options.onFocus && $options.onFocus(...args))),
        onBlur: _cache[2] || (_cache[2] = (...args) => ($options.onBlur && $options.onBlur(...args)))
      }), null, 16, ["checked", "value"])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", {
      ref: "box",
      class: ['p-checkbox-box', {'p-highlight': $options.checked, 'p-disabled': _ctx.$attrs.disabled, 'p-focus': $data.focused}],
      role: "checkbox",
      "aria-checked": $options.checked
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
        class: ['p-checkbox-icon', {'pi pi-check': $options.checked}]
      }, null, 2)
    ], 10, ["aria-checked"])
  ], 6))
}

script.render = render;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);


/***/ }),

/***/ "./node_modules/primevue/utils/utils.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/primevue/utils/utils.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectedOverlayScrollHandler": () => (/* binding */ ConnectedOverlayScrollHandler),
/* harmony export */   "DomHandler": () => (/* binding */ DomHandler),
/* harmony export */   "EventBus": () => (/* binding */ primebus),
/* harmony export */   "ObjectUtils": () => (/* binding */ ObjectUtils),
/* harmony export */   "UniqueComponentId": () => (/* binding */ UniqueComponentId),
/* harmony export */   "ZIndexUtils": () => (/* binding */ ZIndexUtils)
/* harmony export */ });
class DomHandler {

    static innerWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    }

    static width(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    }

    static getWindowScrollTop() {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }

    static getWindowScrollLeft() {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }

    static getOuterWidth(el, margin) {
        if (el) {
            let width = el.offsetWidth;

            if (margin) {
                let style = getComputedStyle(el);
                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }
        else {
            return 0;
        }
    }

    static getOuterHeight(el, margin) {
        if (el) {
            let height = el.offsetHeight;

            if (margin) {
                let style = getComputedStyle(el);
                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }
        else {
            return 0;
        }
    }

    static getClientHeight(el, margin) {
        if (el) {
            let height = el.clientHeight;

            if (margin) {
                let style = getComputedStyle(el);
                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        } else {
            return 0;
        }
    }

    static getViewport() {
        let win = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return {width: w, height: h};
    }

    static getOffset(el) {
        var rect = el.getBoundingClientRect();

        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    }

    static index(element) {
        let children = element.parentNode.childNodes;
        let num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] === element) return num;
            if (children[i].nodeType === 1) num++;
        }
        return -1;
    }

    static addMultipleClasses(element, className) {
        if (element.classList) {
            let styles = className.split(' ');
            for (let i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }

        }
        else {
            let styles = className.split(' ');
            for (let i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    }

    static addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    static removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    static hasClass(element, className) {
        if (element) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }

        return false;
    }

    static find(element, selector) {
        return element.querySelectorAll(selector);
    }

    static findSingle(element, selector) {
        return element.querySelector(selector);
    }

    static getHeight(el) {
        let height = el.offsetHeight;
        let style = getComputedStyle(el);

        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

        return height;
    }

    static getWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

        return width;
    }

    static absolutePosition(element, target) {
        let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        let elementOuterHeight = elementDimensions.height;
        let elementOuterWidth = elementDimensions.width;
        let targetOuterHeight = target.offsetHeight;
        let targetOuterWidth = target.offsetWidth;
        let targetOffset = target.getBoundingClientRect();
        let windowScrollTop = this.getWindowScrollTop();
        let windowScrollLeft = this.getWindowScrollLeft();
        let viewport = this.getViewport();
        let top, left;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            element.style.transformOrigin = 'bottom';

            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
            element.style.transformOrigin = 'top';
        }

        if (targetOffset.left + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;

        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }

    static relativePosition(element, target) {
        let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const targetHeight = target.offsetHeight;
        const targetOffset = target.getBoundingClientRect();
        const viewport = this.getViewport();
        let top, left;

        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            element.style.transformOrigin = 'bottom';
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
            element.style.transformOrigin = 'top';
        }

        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }

        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }

    static getParents(element, parents = []) {
        return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }

    static getScrollableParents(element) {
        let scrollableParents = [];

        if (element) {
            let parents = this.getParents(element);
            const overflowRegex = /(auto|scroll)/;
            const overflowCheck = (node) => {
                let styleDeclaration = window['getComputedStyle'](node, null);
                return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
            };

            for (let parent of parents) {
                let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
                if (scrollSelectors) {
                    let selectors = scrollSelectors.split(',');
                    for (let selector of selectors) {
                        let el = this.findSingle(parent, selector);
                        if (el && overflowCheck(el)) {
                            scrollableParents.push(el);
                        }
                    }
                }

                if (parent.nodeType !== 9 && overflowCheck(parent)) {
                    scrollableParents.push(parent);
                }
            }
        }

        return scrollableParents;
    }

    static getHiddenElementOuterHeight(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return elementHeight;
    }

    static getHiddenElementOuterWidth(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return elementWidth;
    }

    static getHiddenElementDimensions(element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return dimensions;
    }

    static fadeIn(element, duration) {
        element.style.opacity = 0;

        var last = +new Date();
        var opacity = 0;
        var tick = function () {
            opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();

            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };

        tick();
    }

    static fadeOut(element, ms) {
        var opacity = 1,
            interval = 50,
            duration = ms,
            gap = interval / duration;

        let fading = setInterval(() => {
            opacity -= gap;

            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }

            element.style.opacity = opacity;
        }, interval);
    }

    static getUserAgent() {
        return navigator.userAgent;
    }

    static appendChild(element, target) {
        if(this.isElement(target))
            target.appendChild(element);
        else if(target.el && target.elElement)
            target.elElement.appendChild(element);
        else
            throw new Error('Cannot append ' + target + ' to ' + element);
    }

    static scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);

        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    }

    static clearSelection() {
        if(window.getSelection) {
            if(window.getSelection().empty) {
                window.getSelection().empty();
            } else if(window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if(document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            } catch(error) {
                //ignore IE bug
            }
        }
    }

    static calculateScrollbarWidth() {
        if(this.calculatedScrollbarWidth != null)
            return this.calculatedScrollbarWidth;

        let scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);

        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);

        this.calculatedScrollbarWidth = scrollbarWidth;

        return scrollbarWidth;
    }

    static getBrowser() {
        if(!this.browser) {
            let matched = this.resolveUserAgent();
            this.browser = {};

            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }

            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            } else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }

        return this.browser;
    }

    static resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ ]([\w.]+)/.exec(ua) ||
            /(webkit)[ ]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            (ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
            [];

        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    }

    static isVisible(element) {
        return element.offsetParent != null;
    }

    static invokeElementMethod(element, methodName, args) {
        (element)[methodName].apply(element, args);
    }

    static getFocusableElements(element) {
        let focusableElements = DomHandler.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`
            );

        let visibleFocusableElements = [];
        for (let focusableElement of focusableElements) {
            if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
                visibleFocusableElements.push(focusableElement);
        }

        return visibleFocusableElements;
    }

    static isClickable(element) {
        const targetNode = element.nodeName;
        const parentNode = element.parentElement && element.parentElement.nodeName;

        return (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
                parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
                this.hasClass(element, 'p-button') || this.hasClass(element.parentElement, 'p-button') ||
                this.hasClass(element.parentElement, 'p-checkbox') || this.hasClass(element.parentElement, 'p-radiobutton')
        );
    }

    static applyStyle(element, style) {
        if (typeof style === 'string') {
            element.style.cssText = this.style;
        }
        else {
            for (let prop in this.style) {
                element.style[prop] = style[prop];
            }
        }
    }

    static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }

    static isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    }

    static isTouchDevice() {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
}

class ConnectedOverlayScrollHandler {

    constructor(element, listener = () => {}) {
        this.element = element;
        this.listener = listener;
    }

    bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);
        for (let i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].addEventListener('scroll', this.listener);
        }
    }

    unbindScrollListener() {
        if (this.scrollableParents) {
            for (let i = 0; i < this.scrollableParents.length; i++) {
                this.scrollableParents[i].removeEventListener('scroll', this.listener);
            }
        }
    }

    destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
    }
}

class ObjectUtils {

    static equals(obj1, obj2, field) {
        if (field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.deepEquals(obj1, obj2);
    }

    static deepEquals(a, b) {
        if (a === b) return true;

        if (a && b && typeof a == 'object' && typeof b == 'object') {
            var arrA = Array.isArray(a)
                , arrB = Array.isArray(b)
                , i
                , length
                , key;

            if (arrA && arrB) {
                length = a.length;
                if (length != b.length) return false;
                for (i = length; i-- !== 0;)
                    if (!this.deepEquals(a[i], b[i])) return false;
                return true;
            }

            if (arrA != arrB) return false;

            var dateA = a instanceof Date
                , dateB = b instanceof Date;
            if (dateA != dateB) return false;
            if (dateA && dateB) return a.getTime() == b.getTime();

            var regexpA = a instanceof RegExp
                , regexpB = b instanceof RegExp;
            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return a.toString() == b.toString();

            var keys = Object.keys(a);
            length = keys.length;

            if (length !== Object.keys(b).length)
                return false;

            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.deepEquals(a[key], b[key])) return false;
            }

            return true;
        }

        return a !== a && b !== b;
    }

    static resolveFieldData(data, field) {
        if (data && Object.keys(data).length && field) {
            if (this.isFunction(field)) {
                return field(data);
            }
            else if(field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for(var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }

    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    static filter(value, fields, filterValue) {
        var filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    }

    static reorderArray(value, from, to) {
        let target;
        if (value && (from !== to)) {
            if (to >= value.length) {
                target = to - value.length;
                while ((target--) + 1) {
                    value.push(undefined);
                }
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }

    static findIndexInList(value, list) {
        let index = -1;

        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === value) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    static contains(value, list) {
        if (value != null && list && list.length) {
            for (let val of list) {
                if (this.equals(value, val))
                    return true;
            }
        }

        return false;
    }

    static insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;
            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }

            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    }

    static removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                    .replace(/[\xC0-\xC5]/g, "A")
                    .replace(/[\xC6]/g, "AE")
                    .replace(/[\xC7]/g, "C")
                    .replace(/[\xC8-\xCB]/g, "E")
                    .replace(/[\xCC-\xCF]/g, "I")
                    .replace(/[\xD0]/g, "D")
                    .replace(/[\xD1]/g, "N")
                    .replace(/[\xD2-\xD6\xD8]/g, "O")
                    .replace(/[\xD9-\xDC]/g, "U")
                    .replace(/[\xDD]/g, "Y")
                    .replace(/[\xDE]/g, "P")
                    .replace(/[\xE0-\xE5]/g, "a")
                    .replace(/[\xE6]/g, "ae")
                    .replace(/[\xE7]/g, "c")
                    .replace(/[\xE8-\xEB]/g, "e")
                    .replace(/[\xEC-\xEF]/g, "i")
                    .replace(/[\xF1]/g, "n")
                    .replace(/[\xF2-\xF6\xF8]/g, "o")
                    .replace(/[\xF9-\xFC]/g, "u")
                    .replace(/[\xFE]/g, "p")
                    .replace(/[\xFD\xFF]/g, "y");
        }

        return str;
    }
}

function handler() {
    let zIndexes = [];

    const generateZIndex = (key, baseZIndex) => {
        let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
        let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });
        return newZIndex;
    };

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter(obj => obj.value !== zIndex);
    };

    const getCurrentZIndex = () => {
        return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
    };

    const getZIndex = (el) => {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0
    };

    return {
        get: getZIndex,
        set: (key, el, baseZIndex) => {
            if (el) {
                el.style.zIndex = String(generateZIndex(key, baseZIndex));
            }
        },
        clear: (el) => {
            if (el) {
                revertZIndex(getZIndex(el));
                el.style.zIndex = '';
            }
        },
        getCurrent: () => getCurrentZIndex()
    };
}

var ZIndexUtils = handler();

var lastId = 0;

function UniqueComponentId (prefix = 'pv_id_') {
    lastId++;
    return `${prefix}${lastId}`;
}

function primebus() {
	const allHandlers = new Map();

	return {
		on(type, handler) {
			let handlers = allHandlers.get(type);
            if (!handlers)
                handlers = [handler];
            else
                handlers.push(handler);

            allHandlers.set(type, handlers);
		},

		off(type, handler) {
			let handlers = allHandlers.get(type);
			if (handlers) {
				handlers.splice(handlers.indexOf(handler) >>> 0, 1);
			}
		},

		emit(type, evt) {
            let handlers = allHandlers.get(type);
            if (handlers) {
                handlers.slice().map((handler) => { handler(evt);});
            }
		}
	};
}




/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_style_index_0_id_1e0da615_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_style_index_0_id_1e0da615_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_style_index_0_id_1e0da615_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_style_index_0_id_f8dfcc6e_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_style_index_0_id_f8dfcc6e_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_style_index_0_id_f8dfcc6e_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_style_index_0_id_b239f876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_style_index_0_id_b239f876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_style_index_0_id_b239f876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CommentBox.vue":
/*!************************************************!*\
  !*** ./resources/js/components/CommentBox.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentBox_vue_vue_type_template_id_e9a844d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentBox.vue?vue&type=template&id=e9a844d2 */ "./resources/js/components/CommentBox.vue?vue&type=template&id=e9a844d2");
/* harmony import */ var _CommentBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentBox.vue?vue&type=script&lang=js */ "./resources/js/components/CommentBox.vue?vue&type=script&lang=js");



_CommentBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _CommentBox_vue_vue_type_template_id_e9a844d2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CommentBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/components/CommentBox.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CommentBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/components/Newcard.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Newcard.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Newcard_vue_vue_type_template_id_1e0da615_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Newcard.vue?vue&type=template&id=1e0da615&scoped=true */ "./resources/js/components/Newcard.vue?vue&type=template&id=1e0da615&scoped=true");
/* harmony import */ var _Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Newcard.vue?vue&type=script&lang=js */ "./resources/js/components/Newcard.vue?vue&type=script&lang=js");
/* harmony import */ var _Newcard_vue_vue_type_style_index_0_id_1e0da615_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true */ "./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true");




;
_Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Newcard_vue_vue_type_template_id_1e0da615_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-1e0da615"
/* hot reload */
if (false) {}

_Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/components/Newcard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/components/TextArea.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/TextArea.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextArea_vue_vue_type_template_id_b239f876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea.vue?vue&type=template&id=b239f876&scoped=true */ "./resources/js/components/TextArea.vue?vue&type=template&id=b239f876&scoped=true");
/* harmony import */ var _TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextArea.vue?vue&type=script&lang=js */ "./resources/js/components/TextArea.vue?vue&type=script&lang=js");
/* harmony import */ var _TextArea_vue_vue_type_style_index_0_id_b239f876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css */ "./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css");




;
_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _TextArea_vue_vue_type_template_id_b239f876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-b239f876"
/* hot reload */
if (false) {}

_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/components/TextArea.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/pages/Details.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Details.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Details_vue_vue_type_template_id_f8dfcc6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=f8dfcc6e */ "./resources/js/pages/Details.vue?vue&type=template&id=f8dfcc6e");
/* harmony import */ var _Details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js */ "./resources/js/pages/Details.vue?vue&type=script&lang=js");
/* harmony import */ var _Details_vue_vue_type_style_index_0_id_f8dfcc6e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss */ "./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss");




;
_Details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Details_vue_vue_type_template_id_f8dfcc6e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/pages/Details.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/pages/Didier.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Didier.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Didier_vue_vue_type_template_id_5aae6580__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Didier.vue?vue&type=template&id=5aae6580 */ "./resources/js/pages/Didier.vue?vue&type=template&id=5aae6580");
/* harmony import */ var _Didier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Didier.vue?vue&type=script&lang=js */ "./resources/js/pages/Didier.vue?vue&type=script&lang=js");



_Didier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Didier_vue_vue_type_template_id_5aae6580__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Didier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/pages/Didier.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Didier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/components/CommentBox.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/CommentBox.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CommentBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CommentBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CommentBox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CommentBox.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Newcard.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Newcard.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Newcard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/TextArea.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/TextArea.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextArea.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Details.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Details.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Didier.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Didier.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Didier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Didier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Didier.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Didier.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CommentBox.vue?vue&type=template&id=e9a844d2":
/*!******************************************************************************!*\
  !*** ./resources/js/components/CommentBox.vue?vue&type=template&id=e9a844d2 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CommentBox_vue_vue_type_template_id_e9a844d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CommentBox_vue_vue_type_template_id_e9a844d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CommentBox.vue?vue&type=template&id=e9a844d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CommentBox.vue?vue&type=template&id=e9a844d2");


/***/ }),

/***/ "./resources/js/components/Newcard.vue?vue&type=template&id=1e0da615&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Newcard.vue?vue&type=template&id=1e0da615&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_template_id_1e0da615_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_template_id_1e0da615_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Newcard.vue?vue&type=template&id=1e0da615&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=template&id=1e0da615&scoped=true");


/***/ }),

/***/ "./resources/js/components/TextArea.vue?vue&type=template&id=b239f876&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/TextArea.vue?vue&type=template&id=b239f876&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_template_id_b239f876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_template_id_b239f876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextArea.vue?vue&type=template&id=b239f876&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=template&id=b239f876&scoped=true");


/***/ }),

/***/ "./resources/js/pages/Details.vue?vue&type=template&id=f8dfcc6e":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Details.vue?vue&type=template&id=f8dfcc6e ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_template_id_f8dfcc6e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_template_id_f8dfcc6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Details.vue?vue&type=template&id=f8dfcc6e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=template&id=f8dfcc6e");


/***/ }),

/***/ "./resources/js/pages/Didier.vue?vue&type=template&id=5aae6580":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Didier.vue?vue&type=template&id=5aae6580 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Didier_vue_vue_type_template_id_5aae6580__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Didier_vue_vue_type_template_id_5aae6580__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Didier.vue?vue&type=template&id=5aae6580 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Didier.vue?vue&type=template&id=5aae6580");


/***/ }),

/***/ "./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Newcard_vue_vue_type_style_index_0_id_1e0da615_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Newcard.vue?vue&type=style&index=0&id=1e0da615&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Details_vue_vue_type_style_index_0_id_f8dfcc6e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Details.vue?vue&type=style&index=0&id=f8dfcc6e&lang=scss");


/***/ }),

/***/ "./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_style_index_0_id_b239f876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TextArea.vue?vue&type=style&index=0&id=b239f876&scoped=true&lang=css");


/***/ })

}]);