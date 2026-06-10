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
const BookArrowRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 416C64 433.672 78.328 448 96 448H416V384H96C78.328 384 64 398.326 64 416ZM632.969 191.031L552.969 111.031C543.594 101.656 528.406 101.656 519.031 111.031S509.656 135.594 519.031 144.969L558.062 184H280C266.75 184 256 194.75 256 208S266.75 232 280 232H558.062L519.031 271.031C514.344 275.719 512 281.844 512 288S514.344 300.281 519.031 304.969C528.406 314.344 543.594 314.344 552.969 304.969L632.969 224.969C642.344 215.594 642.344 200.406 632.969 191.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 416C64 433.672 78.328 448 96 448H424C437.254 448 448 458.742 448 472V488C448 501.254 437.254 512 424 512H96C42.98 512 0 469.02 0 416V96C0 42.98 42.98 0 96 0H416C433.672 0 448 14.328 448 32V184H280C266.75 184 256 194.75 256 208S266.75 232 280 232H448V360C448 373.254 437.254 384 424 384H96C78.328 384 64 398.328 64 416Z" })
    ]
  }
));
BookArrowRightDuotone.displayName = "BookArrowRightDuotone";
var BookArrowRight_default = BookArrowRightDuotone;
