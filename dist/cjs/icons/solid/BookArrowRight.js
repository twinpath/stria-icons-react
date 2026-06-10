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
var BookArrowRight_exports = {};
__export(BookArrowRight_exports, {
  default: () => BookArrowRight_default
});
module.exports = __toCommonJS(BookArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 208C224 194.744 234.746 184 248 184H448V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.273 452.936 432 449.615V382.385C441.273 379.064 448 370.416 448 360V232H248C234.746 232 224 221.254 224 208ZM384 448H96C78.328 448 64 433.672 64 416C64 398.326 78.328 384 96 384H384V448ZM632.969 191.031L552.969 111.031C543.594 101.656 528.406 101.656 519.031 111.031S509.656 135.594 519.031 144.969L558.062 184H448V232H558.062L519.031 271.031C514.344 275.719 512 281.844 512 288S514.344 300.281 519.031 304.969C528.406 314.344 543.594 314.344 552.969 304.969L632.969 224.969C642.344 215.594 642.344 200.406 632.969 191.031Z" })
  }
));
BookArrowRightSolid.displayName = "BookArrowRightSolid";
var BookArrowRight_default = BookArrowRightSolid;
