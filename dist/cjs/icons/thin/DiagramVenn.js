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
var DiagramVenn_exports = {};
__export(DiagramVenn_exports, {
  default: () => DiagramVenn_default
});
module.exports = __toCommonJS(DiagramVenn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramVennThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 32C381.594 32 349.129 39.984 320 53.846C290.871 39.984 258.406 32 224 32C100.289 32 0 132.289 0 256S100.289 480 224 480C258.406 480 290.871 472.016 320 458.154C349.129 472.016 381.594 480 416 480C539.713 480 640 379.711 640 256S539.713 32 416 32ZM398.885 144H241.115C260.691 113.609 287.809 88.496 320 71.662C352.191 88.496 379.309 113.609 398.885 144ZM407.904 352H232.096C218.154 325.469 209.791 295.709 208.566 264H431.434C430.209 295.709 421.846 325.469 407.904 352ZM208.566 248C209.791 216.291 218.154 186.531 232.096 160H407.904C421.846 186.531 430.209 216.291 431.434 248H208.566ZM224 464C109.309 464 16 370.691 16 256S109.309 48 224 48C251.635 48 277.973 53.527 302.117 63.355C236.279 102.365 192 173.926 192 256S236.279 409.635 302.117 448.645C277.973 458.473 251.635 464 224 464ZM241.115 368H398.885C379.309 398.391 352.191 423.504 320 440.338C287.809 423.504 260.691 398.391 241.115 368ZM416 464C388.365 464 362.027 458.473 337.883 448.645C403.719 409.635 448 338.074 448 256S403.719 102.365 337.883 63.355C362.027 53.527 388.365 48 416 48C530.691 48 624 141.309 624 256S530.691 464 416 464Z" })
  }
));
DiagramVennThin.displayName = "DiagramVennThin";
var DiagramVenn_default = DiagramVennThin;
