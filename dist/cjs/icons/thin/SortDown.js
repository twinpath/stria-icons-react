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
var SortDown_exports = {};
__export(SortDown_exports, {
  default: () => SortDown_default
});
module.exports = __toCommonJS(SortDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SortDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M292.342 288H27.658C3.055 288 -9.229 317.773 8.119 335.121L140.582 471.891C145.934 477.297 152.973 480 160.027 480C167.08 480 174.146 477.297 179.553 471.891L311.881 335.121C329.229 317.773 316.945 288 292.342 288ZM300.383 323.996L168.238 460.578C166.031 462.785 163.115 464 160.027 464C156.969 464 154.102 462.805 152.076 460.76L19.434 323.807C14.502 318.877 16.049 313.326 16.943 311.17C17.836 309.014 20.668 304 27.658 304H292.342C299.332 304 302.164 309.014 303.057 311.17C303.951 313.326 305.498 318.877 300.383 323.996Z" })
  }
));
SortDownThin.displayName = "SortDownThin";
var SortDown_default = SortDownThin;
