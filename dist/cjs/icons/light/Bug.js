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
var Bug_exports = {};
__export(Bug_exports, {
  default: () => Bug_default
});
module.exports = __toCommonJS(Bug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BugLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 96C192 60.703 220.703 32 256 32S320 60.703 320 96V128H352V96C352 43.062 308.938 0 256 0S160 43.062 160 96V128H192V96ZM496 272H400V183.699L474 124.5C480.891 118.969 482.016 108.906 476.5 102C470.984 95.125 460.922 93.984 454 99.5L378.375 160H133.625L58 99.5C51.109 94 41.031 95.156 35.5 102C29.984 108.906 31.109 118.969 38 124.5L112 183.699V272H16C7.156 272 0 279.156 0 288S7.156 304 16 304H112V352C112 368.951 115.475 385.068 121.486 399.889L36.688 484.688C30.438 490.938 30.438 501.063 36.688 507.312C39.812 510.438 43.906 512 48 512S56.188 510.438 59.312 507.312L138.059 428.566C161.438 459.604 198.24 480 240 480H272C313.76 480 350.562 459.604 373.941 428.566L452.687 507.312C455.812 510.438 459.906 512 464 512S472.188 510.438 475.312 507.312C481.562 501.062 481.562 490.937 475.312 484.688L390.514 399.889C396.525 385.068 400 368.951 400 352V304H496C504.844 304 512 296.844 512 288S504.844 272 496 272ZM368 352C368 404.938 324.938 448 272 448V240C272 231.156 264.844 224 256 224S240 231.156 240 240V448C187.062 448 144 404.938 144 352V192H368V352Z" })
  }
));
BugLight.displayName = "BugLight";
var Bug_default = BugLight;
