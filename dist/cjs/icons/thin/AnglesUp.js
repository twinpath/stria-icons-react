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
var AnglesUp_exports = {};
__export(AnglesUp_exports, {
  default: () => AnglesUp_default
});
module.exports = __toCommonJS(AnglesUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M45.533 221.787L192.002 83.078L338.467 221.783C341.623 224.815 346.686 224.721 349.779 221.533C352.842 218.346 352.717 213.268 349.529 210.221L197.533 66.219C195.971 64.734 194.002 64 192.002 64S188.033 64.734 186.471 66.219L34.471 210.225C31.283 213.272 31.158 218.35 34.221 221.537C37.252 224.725 42.314 224.818 45.533 221.787ZM197.533 258.225C195.971 256.74 194.002 256.006 192.002 256.006S188.033 256.74 186.471 258.225L34.471 402.229C31.283 405.276 31.158 410.354 34.221 413.541C37.252 416.729 42.314 416.822 45.533 413.791L192.002 275.084L338.467 413.789C341.623 416.82 346.686 416.727 349.779 413.539C352.842 410.352 352.717 405.274 349.529 402.227L197.533 258.225Z" })
  }
));
AnglesUpThin.displayName = "AnglesUpThin";
var AnglesUp_default = AnglesUpThin;
