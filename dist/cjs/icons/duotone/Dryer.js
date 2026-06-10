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
var Dryer_exports = {};
__export(Dryer_exports, {
  default: () => Dryer_default
});
module.exports = __toCommonJS(Dryer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DryerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.383 192C168.031 192 121.828 233.807 114 288H184.383C188.801 288 192.383 291.582 192.383 296V312C192.383 316.418 188.801 320 184.383 320H114C121.828 374.193 168.031 416 224.383 416C286.215 416 336.383 365.832 336.383 304C336.383 242.166 286.215 192 224.383 192ZM184.383 112C197.633 112 208.383 101.25 208.383 88S197.633 64 184.383 64S160.383 74.75 160.383 88S171.133 112 184.383 112Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.656 0 0 28.652 0 64V464C0 490.4 21.602 512 48 512H400C426.398 512 448 490.4 448 464V64C448 28.652 419.344 0 384 0ZM184 64C197.25 64 208 74.75 208 88S197.25 112 184 112S160 101.25 160 88S170.75 64 184 64ZM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.25 112 88 112S64 101.25 64 88ZM224 448C144.504 448 80 383.498 80 304C80 224.498 144.504 160 224 160C303.5 160 368 224.498 368 304C368 383.498 303.5 448 224 448Z" })
    ]
  }
));
DryerDuotone.displayName = "DryerDuotone";
var Dryer_default = DryerDuotone;
