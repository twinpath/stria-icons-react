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
var TrashList_exports = {};
__export(TrashList_exports, {
  default: () => TrashList_default
});
module.exports = __toCommonJS(TrashList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashListRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M392 80H333.625L299.625 23.25C290.875 8.875 275.25 0 258.375 0H157.625C140.75 0 125.125 8.875 116.375 23.25L82.375 80H24C10.746 80 0 90.744 0 104C0 117.254 10.746 128 24 128H32L53.25 467C54.75 492.25 75.75 512 101.125 512H314.875C340.25 512 361.25 492.25 362.75 467L384 128H392C405.256 128 416 117.254 416 104C416 90.744 405.256 80 392 80ZM157.625 48H258.375L277.625 80H138.375L157.625 48ZM314.875 464H101.125L80.125 128H335.875L314.875 464ZM616 136H472C458.801 136 448 146.799 448 160C448 173.199 458.801 184 472 184H616C629.201 184 640 173.199 640 160C640 146.799 629.201 136 616 136ZM584 264H472C458.801 264 448 274.799 448 288C448 301.199 458.801 312 472 312H584C597.201 312 608 301.199 608 288C608 274.799 597.201 264 584 264ZM520 392H472C458.801 392 448 402.799 448 416C448 429.199 458.801 440 472 440H520C533.201 440 544 429.199 544 416C544 402.799 533.201 392 520 392Z" })
  }
));
TrashListRegular.displayName = "TrashListRegular";
var TrashList_default = TrashListRegular;
