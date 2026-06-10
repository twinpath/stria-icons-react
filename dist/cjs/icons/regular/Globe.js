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
var Globe_exports = {};
__export(Globe_exports, {
  default: () => Globe_default
});
module.exports = __toCommonJS(Globe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlobeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM422.021 160H373.279C366.889 132.594 357.889 107.824 346.803 86.898C378.156 103.803 404.168 129.246 422.021 160ZM336 256C336 272.984 334.705 288.818 332.824 304H179.176C177.295 288.818 176 272.984 176 256S177.295 223.182 179.176 208H332.824C334.705 223.182 336 239.016 336 256ZM256 448C234.215 448 205.129 411.58 188.717 352H323.283C306.871 411.58 277.785 448 256 448ZM188.717 160C205.129 100.42 234.215 64 256 64S306.871 100.42 323.283 160H188.717ZM165.197 86.898C154.111 107.824 145.111 132.594 138.721 160H89.979C107.832 129.246 133.844 103.803 165.197 86.898ZM70.318 208H130.57C128.891 223.512 128 239.561 128 256S128.891 288.488 130.57 304H70.318C66.34 288.627 64 272.6 64 256S66.34 223.373 70.318 208ZM89.979 352H138.721C145.111 379.406 154.111 404.176 165.197 425.102C133.844 408.197 107.832 382.754 89.979 352ZM346.803 425.102C357.889 404.176 366.889 379.406 373.279 352H422.021C404.168 382.754 378.156 408.197 346.803 425.102ZM441.682 304H381.43C383.109 288.488 384 272.439 384 256S383.109 223.512 381.43 208H441.682C445.66 223.373 448 239.4 448 256S445.66 288.627 441.682 304Z" })
  }
));
GlobeRegular.displayName = "GlobeRegular";
var Globe_default = GlobeRegular;
