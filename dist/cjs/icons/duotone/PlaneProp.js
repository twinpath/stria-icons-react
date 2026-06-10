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
var PlaneProp_exports = {};
__export(PlaneProp_exports, {
  default: () => PlaneProp_default
});
module.exports = __toCommonJS(PlaneProp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlanePropDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M305.562 192H347.268L321.803 13.736C320.676 5.854 313.926 0 305.963 0H269.717C261.754 0 255.004 5.854 253.877 13.736L227.453 198.709L270.225 193.957C281.959 192.652 293.756 192 305.562 192ZM49.004 376.15C49.648 380.654 53.506 384 58.055 384H101.625C106.174 384 110.031 380.654 110.676 376.15L121.34 301.5L37 292.129L49.004 376.15ZM270.225 318.043L227.453 313.291L253.877 498.262C255.004 506.145 261.754 512 269.717 512H305.963C313.926 512 320.676 506.145 321.803 498.262L347.268 320H305.562C293.756 320 281.959 319.346 270.225 318.043ZM101.625 128H58.055C53.506 128 49.648 131.346 49.004 135.85L37.002 219.869L121.34 210.5L110.676 135.85C110.031 131.346 106.174 128 101.625 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 128V144C368 152.836 375.164 160 384 160S400 152.836 400 144V112C408.836 112 416 104.836 416 96C416 87.162 408.836 80 400 80V48C400 39.162 392.836 32 384 32S368 39.162 368 48V64H329.143L338.285 128H368ZM224 128H237.715L246.857 64H224C206.326 64 192 78.326 192 96C192 113.672 206.326 128 224 128ZM479.998 192H305.723C293.916 192 282.119 192.652 270.385 193.957L31.805 220.465C13.697 222.477 0 237.781 0 256C0 274.217 13.697 289.521 31.805 291.533L270.385 318.043C282.119 319.346 293.916 320 305.723 320H464.525C494.139 320 523.783 312.461 548.283 295.826C623.055 245.059 528.092 192 479.998 192ZM224 384C206.326 384 192 398.326 192 416C192 433.672 206.326 448 224 448H246.857L237.715 384H224ZM400 400V368C400 359.162 392.836 352 384 352S368 359.162 368 368V384H338.285L329.143 448H368V464C368 472.836 375.164 480 384 480S400 472.836 400 464V432C408.836 432 416 424.836 416 416C416 407.162 408.836 400 400 400Z" })
    ]
  }
));
PlanePropDuotone.displayName = "PlanePropDuotone";
var PlaneProp_default = PlanePropDuotone;
