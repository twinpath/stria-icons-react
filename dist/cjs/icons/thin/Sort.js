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
var Sort_exports = {};
__export(Sort_exports, {
  default: () => Sort_default
});
module.exports = __toCommonJS(Sort_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SortThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27.658 224H292.342C316.945 224 329.229 194.225 311.881 176.877L179.553 40.107C174.146 34.701 167.08 32 160.027 32C152.973 32 145.934 34.701 140.582 40.107L8.119 176.877C-9.229 194.225 3.055 224 27.658 224ZM19.611 188.008L151.953 51.363C154.1 49.193 156.969 48 160.027 48C163.117 48 166.033 49.215 168.055 51.232L300.566 188.189C305.498 193.121 303.951 198.672 303.057 200.83C302.164 202.986 299.332 208 292.342 208H27.658C20.668 208 17.836 202.986 16.943 200.83C16.049 198.672 14.502 193.121 19.611 188.008ZM292.342 288H27.658C3.055 288 -9.229 317.773 8.119 335.121L140.582 471.891C145.934 477.297 152.973 480 160.027 480C167.08 480 174.146 477.297 179.553 471.891L311.881 335.121C329.229 317.773 316.945 288 292.342 288ZM300.383 323.996L168.238 460.578C166.031 462.785 163.115 464 160.027 464C156.969 464 154.102 462.805 152.076 460.76L19.434 323.807C14.502 318.877 16.049 313.326 16.943 311.17C17.836 309.014 20.668 304 27.658 304H292.342C299.332 304 302.164 309.014 303.057 311.17C303.951 313.326 305.498 318.877 300.383 323.996Z" })
  }
));
SortThin.displayName = "SortThin";
var Sort_default = SortThin;
