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
var Innosoft_exports = {};
__export(Innosoft_exports, {
  default: () => Innosoft_default
});
module.exports = __toCommonJS(Innosoft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InnosoftBrands = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M422.559,159.71a27.379,27.379,0,0,0-13.866-23.337,26.42,26.42,0,0,0-26.211.133L73.943,314.647V176.261a11.955,11.955,0,0,1,6.047-10.34L218.066,86.208a12.153,12.153,0,0,1,11.922.025l32.656,18.853L112.581,191.723v56L359.642,105.086,241.129,36.679c-10.992-6.129-22.3-6.255-33.8-.27l-164.6,95.026c-10.634,6.12-16.771,16.39-17.29,29.124l0,191.5c.17,10.135,5.08,18.672,13.474,23.428a27.037,27.037,0,0,0,26.736-.045L374.057,197.376V335.657a11.976,11.976,0,0,1-5.92,10.368L230.025,425.77a12.175,12.175,0,0,1-11.937.062l-32.723-18.9,150.051-86.627v-56L88.367,406.932l118.794,68.583a33.88,33.88,0,0,0,34.25-.327l164.527-94.995c10.746-6.631,16.649-17.118,16.624-29.528Z" })
  }
));
InnosoftBrands.displayName = "InnosoftBrands";
var Innosoft_default = InnosoftBrands;
