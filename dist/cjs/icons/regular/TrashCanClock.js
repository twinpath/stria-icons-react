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
var TrashCanClock_exports = {};
__export(TrashCanClock_exports, {
  default: () => TrashCanClock_default
});
module.exports = __toCommonJS(TrashCanClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanClockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 192V267C297.104 254.045 307.816 242.299 320 232.234V192C320 183.156 312.844 176 304 176S288 183.156 288 192ZM284.6 464H96C87.164 464 80 456.836 80 448V128H368V204.182C383.113 198.271 399.189 194.324 416 192.807V128H432C440.875 128 448 120.875 448 112V96C448 87.125 440.875 80 432 80H349.625L315.625 23.25C306.984 8.826 291.406 0 274.592 0H173.408C156.596 0 141.016 8.826 132.375 23.25L98.375 80H16C7.125 80 0 87.125 0 96V112C0 120.875 7.125 128 16 128H32V448C32 483.346 60.654 512 96 512H331.002C312.645 499.1 296.879 482.814 284.6 464ZM171.875 50.875C172.875 49.125 174.875 48 177 48H271C273.125 48 275.125 49.125 276.125 50.875L293.625 80H154.375L171.875 50.875ZM432 224C352.375 224 288 288.375 288 368S352.375 512 432 512S576 447.625 576 368S511.625 224 432 224ZM480 384H425.75C420.375 384 416 379.625 416 374.25V304C416 295.164 423.164 288 432 288C440.838 288 448 295.164 448 304V352H480C488.838 352 496 359.164 496 368S488.838 384 480 384ZM128 192V400C128 408.844 135.156 416 144 416S160 408.844 160 400V192C160 183.156 152.844 176 144 176S128 183.156 128 192ZM208 192V400C208 408.844 215.156 416 224 416S240 408.844 240 400V192C240 183.156 232.844 176 224 176S208 183.156 208 192Z" })
  }
));
TrashCanClockRegular.displayName = "TrashCanClockRegular";
var TrashCanClock_default = TrashCanClockRegular;
