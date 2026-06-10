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
var G_exports = {};
__export(G_exports, {
  default: () => G_default
});
module.exports = __toCommonJS(G_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.943 480C166.569 480 109.196 458.146 65.513 414.47C-21.838 327.087 -21.838 184.897 65.513 97.514C152.878 10.162 295.008 10.162 382.374 97.514C385.5 100.64 385.5 105.705 382.374 108.832S374.184 111.958 371.059 108.832C289.944 27.732 157.942 27.732 76.828 108.832C-4.286 189.962 -4.286 322.022 76.828 403.153C157.942 484.252 289.944 484.252 371.059 403.153C393.082 381.125 410.16 356.119 421.031 330.396C428.734 312.17 432.115 292.413 432.027 272.625V272.625H231.945C227.522 272.625 223.943 269.029 223.943 264.621C223.943 260.213 227.522 256.617 231.945 256.617H439.998C444.417 256.617 448 260.201 448 264.621V264.621C448 300.264 439.034 335.563 420.566 366.046C410.183 383.184 397.34 399.495 382.374 414.47C338.691 458.146 281.317 480 223.943 480Z" })
  }
));
GThin.displayName = "GThin";
var G_default = GThin;
