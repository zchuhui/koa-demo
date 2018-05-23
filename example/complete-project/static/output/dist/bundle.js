/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: The node API for `babel` has been moved to `babel-core`.\n    at Object.<anonymous> (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_babel@6.23.0@babel\\index.js:1:69)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)\n    at Function.Module._load (module.js:491:3)\n    at Module.require (module.js:587:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_loader-runner@2.3.0@loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_loader-runner@2.3.0@loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_loader-runner@2.3.0@loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\NormalModule.js:179:3)\n    at NormalModule.build (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\NormalModule.js:268:15)\n    at Compilation.buildModule (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\Compilation.js:146:10)\n    at moduleFactory.create (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\Compilation.js:433:9)\n    at factory (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\NormalModuleFactory.js:99:14)\n    at D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_tapable@0.2.8@tapable\\lib\\Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_tapable@0.2.8@tapable\\lib\\Tapable.js:272:13)\n    at resolver (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\NormalModuleFactory.js:74:11)\n    at process.nextTick (D:\\works\\my\\koa\\koa-demo\\example\\complete-project\\node_modules\\_webpack@2.7.0@webpack\\lib\\NormalModuleFactory.js:205:8)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);