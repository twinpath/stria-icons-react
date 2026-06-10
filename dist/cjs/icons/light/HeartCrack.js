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
var HeartCrack_exports = {};
__export(HeartCrack_exports, {
  default: () => HeartCrack_default
});
module.exports = __toCommonJS(HeartCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartCrackLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M462.271 62.715C407.771 16.209 326.269 23.961 275.769 76.215L256.017 96.592L236.267 76.215C195.517 34.086 113.265 8.709 49.763 62.715C-13.112 116.219 -16.362 212.477 39.763 270.482L233.267 470.248C239.517 476.75 247.767 480 255.892 480C264.142 480 272.269 476.75 278.519 470.248L472.023 270.482C528.398 212.477 525.148 116.219 462.271 62.715ZM449.271 248.23L256.392 448.121L62.763 248.23C24.388 208.727 16.388 133.221 70.515 87.092C125.265 40.213 189.767 74.215 213.267 98.592L276.109 162.734L169.593 209.344C164.937 211.375 161.531 215.484 160.406 220.438C159.265 225.375 160.547 230.562 163.859 234.406L259.859 346.406C263.015 350.109 267.5 352 272 352C275.687 352 279.39 350.734 282.406 348.141C289.125 342.391 289.906 332.297 284.14 325.594L202.218 230L310.406 182.656C315.25 180.531 318.734 176.156 319.718 170.969C320.703 165.766 319.047 160.422 315.312 156.687L278.322 119.697L298.769 98.592C321.894 74.59 386.896 40.588 441.521 87.092C495.523 133.096 487.648 208.602 449.271 248.23Z" })
  }
));
HeartCrackLight.displayName = "HeartCrackLight";
var HeartCrack_default = HeartCrackLight;
