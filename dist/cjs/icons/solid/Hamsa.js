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
var Hamsa_exports = {};
__export(Hamsa_exports, {
  default: () => Hamsa_default
});
module.exports = __toCommonJS(Hamsa_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HamsaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.382 307.25C504.257 295.5 492.757 288 480.006 288H416.004V80C416.004 58 398.004 40 376.003 40C354.003 40 336.002 58 336.002 80V214C336.002 219.5 331.502 224 326.002 224H306.001C300.501 224 296.001 219.5 296.001 214V40C296.001 18 278.001 0 256 0S215.999 18 215.999 40V214C215.999 219.5 211.499 224 205.999 224H185.998C180.498 224 175.998 219.5 175.998 214V80C175.998 58 157.997 40 135.997 40S95.996 58 95.996 80V288H31.994C19.243 288 7.743 295.5 2.618 307.25C-2.382 318.875 -0.132 332.5 8.618 341.875L111.246 451.875C146.997 490.125 199.748 512 256 512S365.003 490.125 400.754 451.875L503.382 341.875C512.132 332.5 514.382 318.875 509.382 307.25ZM256 416C202.999 416 159.997 352 159.997 352S202.999 288 256 288S352.003 352 352.003 352S309.001 416 256 416ZM256 320C238.375 320 223.999 334.375 223.999 352S238.375 384 256 384S288.001 369.625 288.001 352S273.625 320 256 320Z" })
  }
));
HamsaSolid.displayName = "HamsaSolid";
var Hamsa_default = HamsaSolid;
