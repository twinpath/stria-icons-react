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
var ArrowUpShortWide_exports = {};
__export(ArrowUpShortWide_exports, {
  default: () => ArrowUpShortWide_default
});
module.exports = __toCommonJS(ArrowUpShortWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpShortWideLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 336H496C504.844 336 512 328.844 512 320S504.844 304 496 304H304C295.156 304 288 311.156 288 320S295.156 336 304 336ZM304 208H432C440.844 208 448 200.844 448 192S440.844 176 432 176H304C295.156 176 288 183.156 288 192S295.156 208 304 208ZM304 80H368C376.844 80 384 72.844 384 64S376.844 48 368 48H304C295.156 48 288 55.156 288 64S295.156 80 304 80ZM560 432H304C295.156 432 288 439.156 288 448S295.156 464 304 464H560C568.844 464 576 456.844 576 448S568.844 432 560 432ZM139.312 36.688C133.062 30.438 122.937 30.438 116.688 36.688L20.688 132.688C14.438 138.938 14.438 149.063 20.688 155.312S37.063 161.562 43.312 155.312L112 86.625V464C112 472.844 119.156 480 128 480S144 472.844 144 464V86.625L212.688 155.312C215.812 158.438 219.906 160 224 160S232.188 158.438 235.312 155.312C241.562 149.062 241.562 138.937 235.312 132.688L139.312 36.688Z" })
  }
));
ArrowUpShortWideLight.displayName = "ArrowUpShortWideLight";
var ArrowUpShortWide_default = ArrowUpShortWideLight;
