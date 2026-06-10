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
var DollyEmpty_exports = {};
__export(DollyEmpty_exports, {
  default: () => DollyEmpty_default
});
module.exports = __toCommonJS(DollyEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollyEmptyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.637 304.043C570.246 291.543 556.527 284.98 544.043 289.355L335.727 362.551C318.494 336.896 289.229 320 256 320C253.977 320 252.086 320.473 250.094 320.596L150.812 16.547C147.594 6.672 138.391 0 128 0H24C10.75 0 0 10.75 0 24S10.75 48 24 48H110.594L204.395 335.271C177.76 352.332 160 382.021 160 416C160 469.02 202.98 512 256 512S352 469.02 352 416C352 413.256 351.418 410.674 351.191 407.988L559.949 334.637C572.465 330.246 579.027 316.543 574.637 304.043ZM256 464C229.533 464 208 442.467 208 416S229.533 368 256 368S304 389.533 304 416S282.467 464 256 464Z" })
  }
));
DollyEmptyRegular.displayName = "DollyEmptyRegular";
var DollyEmpty_default = DollyEmptyRegular;
