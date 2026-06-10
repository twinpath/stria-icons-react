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
var Mask_exports = {};
__export(Mask_exports, {
  default: () => Mask_default
});
module.exports = __toCommonJS(Mask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MaskThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64C39.52 64 0 182.098 0 273.457C0 379.492 78.799 448 176 448C203.328 448 227.207 441.484 242.107 411.207L262.033 370.711C268.299 358.574 278.1 352.445 288 352.074C297.9 352.445 307.701 358.574 313.967 370.711L333.893 411.207C348.795 441.484 372.674 448 400 448C497.201 448 576 379.492 576 273.457C576 182.098 536.48 64 288 64ZM400 432C372.27 432 358.244 424.449 348.248 404.145L328.184 363.371C319.68 346.895 304.881 336.695 287.4 336.086C271.119 336.695 256.322 346.895 247.678 363.648L227.752 404.141C217.758 424.449 203.732 432 176 432C83.289 432 16 365.324 16 273.457C16 143.281 104.973 80 288 80S560 143.281 560 273.457C560 365.324 492.711 432 400 432ZM160 192C124.654 192 96 220.652 96 256S124.654 320 160 320C195.348 320 224 291.348 224 256S195.348 192 160 192ZM160 304C133.533 304 112 282.469 112 256S133.533 208 160 208S208 229.531 208 256S186.467 304 160 304ZM416 192C380.654 192 352 220.652 352 256S380.654 320 416 320C451.348 320 480 291.348 480 256S451.348 192 416 192ZM416 304C389.533 304 368 282.469 368 256S389.533 208 416 208S464 229.531 464 256S442.467 304 416 304Z" })
  }
));
MaskThin.displayName = "MaskThin";
var Mask_default = MaskThin;
