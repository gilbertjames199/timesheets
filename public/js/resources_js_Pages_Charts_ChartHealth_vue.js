"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Charts_ChartHealth_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/ChartHealth.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/ChartHealth.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");


chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BarChart',
  components: {
    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_1__.Bar
  },
  props: {
    total_all: Number,
    smokers: String,
    mothers: String,
    contra: String,
    no_blood_type: String,
    no_philhealth: String,
    percent_disabled: String,
    percent_disease: String,
    pregnant_no_philhealth: String,
    mental: String,
    chartId: {
      type: String,
      "default": 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      "default": 'label'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      chartData: {
        labels: [this.smokers + '% are smokers', this.mothers + '% are teenage mothers', this.contra + '% does not use contraceptives', this.no_blood_type + '% does not know their bloodtypes', this.no_philhealth + '% doesn\'t have Philhealth', this.percent_disabled + '% have disability', this.percent_disease + '% have health-related lifestyle', this.pregnant_no_philhealth + '% are pregnant who doesn\'t have PhilHealth ', this.mental + '% have mental health problems'],
        datasets: [{
          label: ['Health'],
          backgroundColor: ['#3a8778'],
          data: [Math.round(parseFloat(this.smokers.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.mothers.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.contra.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.no_blood_type.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.no_philhealth.replace(/,/g, '')) * this.total_all / 100), Math.round(parseFloat(this.percent_disabled.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.percent_disease.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.pregnant_no_philhealth.replace(/,/g, '')) / 100 * this.total_all), Math.round(parseFloat(this.mental.replace(/,/g, '')) / 100 * this.total_all)]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/ChartHealth.vue?vue&type=template&id=ac59432e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/ChartHealth.vue?vue&type=template&id=ac59432e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "width": "100%",
    "height": "100%"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Bar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Bar, {
    "chart-options": $data.chartOptions,
    "chart-data": $data.chartData,
    "chart-id": $props.chartId,
    "dataset-id-key": $props.datasetIdKey,
    plugins: $props.plugins,
    "css-classes": $props.cssClasses,
    styles: $props.styles,
    width: $props.width,
    height: $props.height
  }, null, 8
  /* PROPS */
  , ["chart-options", "chart-data", "chart-id", "dataset-id-key", "plugins", "css-classes", "styles", "width", "height"])]);
}

/***/ }),

/***/ "./resources/js/Pages/Charts/ChartHealth.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Charts/ChartHealth.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChartHealth_vue_vue_type_template_id_ac59432e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartHealth.vue?vue&type=template&id=ac59432e */ "./resources/js/Pages/Charts/ChartHealth.vue?vue&type=template&id=ac59432e");
/* harmony import */ var _ChartHealth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartHealth.vue?vue&type=script&lang=js */ "./resources/js/Pages/Charts/ChartHealth.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_time_sheets_inertiajs_template_charts_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_time_sheets_inertiajs_template_charts_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ChartHealth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ChartHealth_vue_vue_type_template_id_ac59432e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charts/ChartHealth.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charts/ChartHealth.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Charts/ChartHealth.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChartHealth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChartHealth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChartHealth.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/ChartHealth.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charts/ChartHealth.vue?vue&type=template&id=ac59432e":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Charts/ChartHealth.vue?vue&type=template&id=ac59432e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChartHealth_vue_vue_type_template_id_ac59432e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChartHealth_vue_vue_type_template_id_ac59432e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChartHealth.vue?vue&type=template&id=ac59432e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/ChartHealth.vue?vue&type=template&id=ac59432e");


/***/ })

}]);