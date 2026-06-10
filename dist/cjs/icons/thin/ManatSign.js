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
var ManatSign_exports = {};
__export(ManatSign_exports, {
  default: () => ManatSign_default
});
module.exports = __toCommonJS(ManatSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ManatSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 272V471.531C368 475.938 364.422 479.531 360 479.531S352 475.938 352 471.531V272C352 228.469 334.828 187.75 303.625 157.375C275.402 129.916 238.924 114.99 200 112.977V472C200 476.406 196.422 480 192 480S184 476.406 184 472V112.535C98.514 116.801 32 185.93 32 272V472C32 476.406 28.422 480 24 480S16 476.406 16 472V272C16 177.029 89.564 100.746 184 96.48V40C184 35.594 187.578 32 192 32S200 35.594 200 40V97.012C243.18 99.066 283.539 115.488 314.797 145.906C349.109 179.344 368 224.094 368 272Z" })
  }
));
ManatSignThin.displayName = "ManatSignThin";
var ManatSign_default = ManatSignThin;
