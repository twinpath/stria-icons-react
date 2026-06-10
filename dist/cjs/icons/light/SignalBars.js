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
var SignalBars_exports = {};
__export(SignalBars_exports, {
  default: () => SignalBars_default
});
module.exports = __toCommonJS(SignalBars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalBarsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 0H544C526.328 0 512 14.328 512 32V480C512 497.672 526.328 512 544 512H576C593.674 512 608 497.672 608 480V32C608 14.328 593.674 0 576 0ZM576 480H544V32H576V480ZM416 128H384C366.328 128 352 142.328 352 160V480C352 497.672 366.328 512 384 512H416C433.674 512 448 497.672 448 480V160C448 142.328 433.674 128 416 128ZM416 480H384V160H416V480ZM256 256H224C206.328 256 192 270.328 192 288V480C192 497.672 206.328 512 224 512H256C273.674 512 288 497.672 288 480V288C288 270.328 273.674 256 256 256ZM256 480H224V288H256V480ZM96 384H64C46.328 384 32 398.328 32 416V480C32 497.672 46.328 512 64 512H96C113.674 512 128 497.672 128 480V416C128 398.328 113.674 384 96 384ZM96 480H64V416H96V480Z" })
  }
));
SignalBarsLight.displayName = "SignalBarsLight";
var SignalBars_default = SignalBarsLight;
