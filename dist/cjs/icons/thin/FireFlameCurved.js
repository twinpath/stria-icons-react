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
var FireFlameCurved_exports = {};
__export(FireFlameCurved_exports, {
  default: () => FireFlameCurved_default
});
module.exports = __toCommonJS(FireFlameCurved_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameCurvedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.939 16C194.727 16 200 17.643 200 23.859C200 75.999 235.707 108.992 273.51 143.923C319.963 186.847 368 231.233 368 320C368 417.047 289.047 496 192 496S16 417.047 16 320C16 253.914 54.389 208.44 66.154 196.075C67.775 194.372 69.684 193.509 71.83 193.509C74.988 193.509 80 195.69 80 201.547V287.047C80 331.134 115.42 367.442 160.016 367.99C204.119 367.99 240 332.106 240 288C240 250.366 214.945 226.021 190.715 202.479C148.615 161.575 112.258 126.25 185.047 19.852C186.795 17.296 189.115 16 191.939 16M191.939 0C184.512 0 176.949 3.354 171.844 10.812C48 191.844 224 200 224 288C224 323.34 195.342 351.99 160.016 351.99C159.73 351.99 159.441 351.988 159.156 351.984C123.969 351.547 96 322.219 96 287.047V201.547C96 187.027 84.154 177.509 71.83 177.509C65.732 177.509 59.518 179.839 54.562 185.047C27.812 213.156 0 261.328 0 320C0 425.875 86.125 512 192 512S384 425.875 384 320C384 149.703 216 127 216 23.859C216 9.063 204.148 0 191.939 0L191.939 0Z" })
  }
));
FireFlameCurvedThin.displayName = "FireFlameCurvedThin";
var FireFlameCurved_default = FireFlameCurvedThin;
