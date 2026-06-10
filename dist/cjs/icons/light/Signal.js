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
var Signal_exports = {};
__export(Signal_exports, {
  default: () => Signal_default
});
module.exports = __toCommonJS(Signal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 384C23.156 384 16 391.156 16 400V496C16 504.844 23.156 512 32 512S48 504.844 48 496V400C48 391.156 40.844 384 32 384ZM160 288C151.156 288 144 295.156 144 304V496C144 504.844 151.156 512 160 512S176 504.844 176 496V304C176 295.156 168.844 288 160 288ZM288 192C279.156 192 272 199.156 272 208V496C272 504.844 279.156 512 288 512S304 504.844 304 496V208C304 199.156 296.844 192 288 192ZM416 96C407.156 96 400 103.156 400 112V496C400 504.844 407.156 512 416 512S432 504.844 432 496V112C432 103.156 424.844 96 416 96ZM544 0C535.156 0 528 7.156 528 16V496C528 504.844 535.156 512 544 512S560 504.844 560 496V16C560 7.156 552.844 0 544 0Z" })
  }
));
SignalLight.displayName = "SignalLight";
var Signal_default = SignalLight;
