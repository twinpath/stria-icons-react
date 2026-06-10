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
var HeartHalf_exports = {};
__export(HeartHalf_exports, {
  default: () => HeartHalf_default
});
module.exports = __toCommonJS(HeartHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartHalfThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.767 102.471C255.765 98.32 254.149 94.333 251.261 91.35L236.319 75.922C208.631 47.34 170.781 32 133.289 32C103.149 32 73.231 41.922 49.041 62.859C-13.103 116.652 -16.197 212.516 39.822 270.484L232.975 470.195C233.038 470.261 233.101 470.326 233.165 470.39C241.452 478.82 255.958 472.123 255.953 460.302C255.922 388.863 255.791 145.341 255.767 102.471ZM51.326 259.367C27.397 234.602 14.569 200.297 16.127 165.238C17.705 129.875 33.111 97.812 59.514 74.961C79.887 57.32 105.402 48 133.289 48C167.422 48 200.783 62.234 224.826 87.055C232.992 95.484 237.217 99.846 240 102.719V454.443L51.326 259.367Z" })
  }
));
HeartHalfThin.displayName = "HeartHalfThin";
var HeartHalf_default = HeartHalfThin;
