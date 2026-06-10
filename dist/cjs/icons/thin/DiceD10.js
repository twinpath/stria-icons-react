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
var DiceD10_exports = {};
__export(DiceD10_exports, {
  default: () => DiceD10_default
});
module.exports = __toCommonJS(DiceD10_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD10Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 282.542C512 274.975 509.324 267.377 503.877 261.281L279.813 10.625C273.438 3.562 264.719 0 256 0S238.562 3.562 232.187 10.625L8.123 261.281C2.676 267.377 0 274.975 0 282.542C0 291.384 3.654 300.185 10.811 306.5L234.875 504.031C238.738 507.434 243.289 509.346 248 510.568V512H264V510.568C268.711 509.346 273.262 507.434 277.125 504.031L501.189 306.5C508.346 300.185 512 291.384 512 282.542ZM20.053 271.943L240.867 24.918L154.101 249.061L41.807 272.693L43.186 271.311L41.803 272.693L16.791 277.957C17.452 275.768 18.483 273.703 20.053 271.943ZM20.491 293.561L21.053 293.443L20.674 293.824C20.596 293.748 20.569 293.639 20.491 293.561ZM248 493.559C247.148 493.053 246.211 492.693 245.457 492.029L21.397 294.502C21.159 294.293 20.928 294.076 20.706 293.855L21.131 293.426L158.624 264.469L248 316.594V493.559ZM256 302.74L169.929 252.521L256 30.17L342.071 252.521L256 302.74ZM490.607 294.498L266.551 492.025C265.797 492.691 264.859 493.051 264 493.557V316.592L353.376 264.469L491.345 293.527C491.056 293.824 490.919 294.221 490.607 294.498ZM357.899 249.061L271.133 24.922L491.947 271.943C493.517 273.703 494.548 275.768 495.212 277.957L357.899 249.061Z " })
  }
));
DiceD10Thin.displayName = "DiceD10Thin";
var DiceD10_default = DiceD10Thin;
