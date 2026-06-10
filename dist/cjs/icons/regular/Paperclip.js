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
var Paperclip_exports = {};
__export(Paperclip_exports, {
  default: () => Paperclip_default
});
module.exports = __toCommonJS(Paperclip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperclipRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 128V336C352 438.39 264.113 520.638 159.817 511.271C68.139 503.038 0 422.095 0 330.048L0 216C0 202.745 10.745 192 24 192H24C37.255 192 48 202.745 48 216L48 330.93C48 397.159 101.677 459.585 167.775 463.741C242.062 468.411 304 409.301 304 336V132.216C304 90.089 273.322 52.106 231.364 48.332C183.957 44.067 144 81.459 144 128V336C144 355.416 161.395 370.857 181.415 367.552C197.149 364.955 208 350.133 208 334.186L208 152C208 138.745 218.745 128 232 128H232C245.255 128 256 138.745 256 152V331.788C256 373.915 225.322 411.896 183.364 415.668C135.957 419.931 96 382.541 96 336L96 133.069C96 66.841 149.677 4.415 215.775 0.259C290.062 -4.411 352 54.697 352 128Z" })
  }
));
PaperclipRegular.displayName = "PaperclipRegular";
var Paperclip_default = PaperclipRegular;
