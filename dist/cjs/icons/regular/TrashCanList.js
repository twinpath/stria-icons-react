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
var TrashCanList_exports = {};
__export(TrashCanList_exports, {
  default: () => TrashCanList_default
});
module.exports = __toCommonJS(TrashCanList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanListRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 416C264.844 416 272 408.844 272 400V192C272 183.156 264.844 176 256 176S240 183.156 240 192V400C240 408.844 247.156 416 256 416ZM160 416C168.844 416 176 408.844 176 400V192C176 183.156 168.844 176 160 176S144 183.156 144 192V400C144 408.844 151.156 416 160 416ZM400 80H333.625L299.625 23.25C290.984 8.826 275.406 0 258.592 0H157.408C140.596 0 125.016 8.826 116.375 23.25L82.375 80H16C7.125 80 0 87.125 0 96V112C0 120.875 7.125 128 16 128H32V448C32 483.346 60.654 512 96 512H320C355.348 512 384 483.346 384 448V128H400C408.875 128 416 120.875 416 112V96C416 87.125 408.875 80 400 80ZM155.875 50.875C156.875 49.125 158.875 48 161 48H255C257.125 48 259.125 49.125 260.125 50.875L277.625 80H138.375L155.875 50.875ZM336 448C336 456.836 328.838 464 320 464H96C87.164 464 80 456.836 80 448V128H336V448ZM616 136H472C458.801 136 448 146.799 448 160C448 173.199 458.801 184 472 184H616C629.201 184 640 173.199 640 160C640 146.799 629.201 136 616 136ZM584 264H472C458.801 264 448 274.799 448 288C448 301.199 458.801 312 472 312H584C597.201 312 608 301.199 608 288C608 274.799 597.201 264 584 264ZM520 392H472C458.801 392 448 402.799 448 416C448 429.199 458.801 440 472 440H520C533.201 440 544 429.199 544 416C544 402.799 533.201 392 520 392Z" })
  }
));
TrashCanListRegular.displayName = "TrashCanListRegular";
var TrashCanList_default = TrashCanListRegular;
