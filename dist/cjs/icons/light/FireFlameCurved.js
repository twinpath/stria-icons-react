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
const FireFlameCurvedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 23.859C216 9.062 204.148 0 191.939 0C184.512 0 176.949 3.354 171.844 10.812C48 191.844 224 200 224 288C224 323.34 195.342 351.99 160.016 351.99C159.73 351.99 159.441 351.988 159.156 351.984C123.969 351.547 96 322.219 96 287.047V201.547C96 187.027 84.154 177.508 71.83 177.508C65.732 177.508 59.518 179.838 54.562 185.047C27.812 213.156 0 261.328 0 320C0 425.875 86.125 512 192 512S384 425.875 384 320C384 149.703 216 127 216 23.859ZM192 480C103.775 480 32 408.225 32 320C32 277.02 49.879 243.578 64 223.873V287.047C64 339.848 106.508 383.332 160.016 383.99C212.941 383.99 256 340.93 256 288C256 243.604 227.24 215.658 201.863 191.004C164.643 154.838 137.047 128.027 186.23 47.416C195.152 93.307 229.389 124.939 262.652 155.674C306.578 196.264 352 238.234 352 320C352 408.225 280.225 480 192 480Z" })
  }
));
FireFlameCurvedLight.displayName = "FireFlameCurvedLight";
var FireFlameCurved_default = FireFlameCurvedLight;
