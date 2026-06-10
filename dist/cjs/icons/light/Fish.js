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
var Fish_exports = {};
__export(Fish_exports, {
  default: () => Fish_default
});
module.exports = __toCommonJS(Fish_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FishLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M324.956 64C228.643 64 154.831 132.969 123.018 168.781L52.643 104.031C42.424 94.969 28.268 93.469 16.518 100.094C4.393 106.969 -2.044 120.969 0.674 135.406L26.799 256L0.581 376.969C-2.044 391 4.393 405.031 16.581 411.906C28.268 418.531 42.393 417 52.768 407.844L122.924 343.219C154.799 379.031 228.706 448 324.956 448C460.206 448 575.987 301.656 575.987 256S460.206 64 324.956 64ZM324.956 416C248.831 416 177.862 361.312 136.831 310.156C134.081 306.688 129.987 304.531 125.581 304.188C125.174 304.156 124.768 304.156 124.362 304.156C120.362 304.156 116.487 305.656 113.518 308.375L31.924 383.312L58.799 259.406C59.299 257.156 59.299 254.844 58.799 252.625L31.174 127.781L113.612 203.625C116.893 206.625 121.424 208.25 125.674 207.813C130.081 207.469 134.174 205.313 136.956 201.844C177.893 150.688 248.768 96 324.956 96C447.768 96 543.987 231.156 543.987 256S447.768 416 324.956 416ZM415.987 232C402.737 232 391.987 242.748 391.987 256C391.987 269.248 402.737 280 415.987 280S439.987 269.248 439.987 256C439.987 242.748 429.237 232 415.987 232Z" })
  }
));
FishLight.displayName = "FishLight";
var Fish_default = FishLight;
