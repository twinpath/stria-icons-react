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
var SquareThisWayUp_exports = {};
__export(SquareThisWayUp_exports, {
  default: () => SquareThisWayUp_default
});
module.exports = __toCommonJS(SquareThisWayUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareThisWayUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM57.5 182.609C54.906 176.906 55.875 170.203 60 165.469L115.938 101.469C122.062 94.531 133.969 94.531 140.031 101.469C140.031 101.469 192.344 161.297 195.75 165.078C198.438 167.938 200.062 171.781 200.062 176C200.062 184.844 192.906 192 184.062 192H160.125V304C160.125 312.75 152.875 320 144.125 320H112.125C103.25 320 96.125 312.75 96.125 304V192H72.062C65.781 192 60.094 188.328 57.5 182.609ZM384 408C384 412.375 380.375 416 376 416H72C67.625 416 64 412.375 64 408V392C64 387.625 67.625 384 72 384H376C380.375 384 384 387.625 384 392V408ZM376 192H352V304C352 312.75 344.75 320 336 320H304C295.25 320 288 312.75 288 304V192H264C257.719 192 252.031 188.328 249.438 182.609C246.844 176.906 247.813 170.203 251.938 165.469L307.875 101.469C313.999 94.531 325.906 94.531 331.969 101.469C331.969 101.469 384.281 161.297 387.688 165.078C390.375 167.938 392 171.781 392 176C392 184.844 384.844 192 376 192Z" })
  }
));
SquareThisWayUpSolid.displayName = "SquareThisWayUpSolid";
var SquareThisWayUp_default = SquareThisWayUpSolid;
