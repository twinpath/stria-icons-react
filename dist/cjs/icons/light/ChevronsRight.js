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
var ChevronsRight_exports = {};
__export(ChevronsRight_exports, {
  default: () => ChevronsRight_default
});
module.exports = __toCommonJS(ChevronsRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M212.233 58.86L394.202 256.001L212.233 453.142C209.389 456.22 207.983 460.11 207.983 464.001C207.983 468.314 209.702 472.61 213.139 475.751C219.639 481.751 229.733 481.345 235.733 474.86L427.733 266.86C433.42 260.704 433.42 251.298 427.733 245.142L235.733 37.142C229.733 30.657 219.639 30.251 213.139 36.251C206.608 42.22 206.233 52.36 212.233 58.86ZM235.758 266.86C241.446 260.704 241.446 251.298 235.758 245.142L43.758 37.142C37.758 30.657 27.665 30.251 21.165 36.251C14.633 42.22 14.258 52.36 20.258 58.86L202.227 256.001L20.258 453.142C17.415 456.22 16.008 460.11 16.008 464.001C16.008 468.314 17.727 472.61 21.165 475.751C27.665 481.751 37.758 481.345 43.758 474.86L235.758 266.86Z" })
  }
));
ChevronsRightLight.displayName = "ChevronsRightLight";
var ChevronsRight_default = ChevronsRightLight;
