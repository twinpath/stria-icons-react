var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ChartPieSimple_exports = {};
__export(ChartPieSimple_exports, {
  default: () => ChartPieSimple_default
});
module.exports = __toCommonJS(ChartPieSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartPieSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 256H256V48C256 39.156 248.844 32 240 32C107.656 32 0 139.656 0 272S107.656 512 240 512S480 404.344 480 272C480 263.156 472.844 256 464 256ZM240 480C125.312 480 32 386.688 32 272C32 162.688 116.75 72.812 224 64.594V272C224 280.844 231.156 288 240 288H447.406C439.188 395.25 349.312 480 240 480ZM304 0C295.156 0 288 7.156 288 16V208C288 216.844 295.156 224 304 224H496C504.844 224 512 216.844 512 208C512 93.312 418.688 0 304 0ZM320 192V32.719C404.312 40.344 471.656 107.688 479.281 192H320Z" })
  }
));
ChartPieSimpleLight.displayName = "ChartPieSimpleLight";
var ChartPieSimple_default = ChartPieSimpleLight;
