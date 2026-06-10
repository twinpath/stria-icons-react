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
var Heart_exports = {};
__export(Heart_exports, {
  default: () => Heart_default
});
module.exports = __toCommonJS(Heart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M462.272 62.714C407.771 16.21 326.27 23.961 275.769 76.215L256.018 96.592L236.268 76.215C195.517 34.087 113.266 8.71 49.764 62.714C-13.112 116.219 -16.362 212.477 39.764 270.482L233.268 470.249C239.518 476.75 247.768 480 255.893 480C264.144 480 272.269 476.75 278.519 470.249L472.023 270.482C528.399 212.477 525.149 116.219 462.272 62.714ZM449.272 248.23L256.393 448.122L62.765 248.23C24.389 208.727 16.389 133.22 70.515 87.091C125.266 40.212 189.767 74.215 213.267 98.592L256.018 142.721L298.769 98.592C321.895 74.59 386.896 40.587 441.522 87.091C495.523 133.095 487.648 208.602 449.272 248.23Z" })
  }
));
HeartLight.displayName = "HeartLight";
var Heart_default = HeartLight;
