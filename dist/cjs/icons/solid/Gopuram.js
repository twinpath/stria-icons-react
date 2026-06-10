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
var Gopuram_exports = {};
__export(Gopuram_exports, {
  default: () => Gopuram_default
});
module.exports = __toCommonJS(Gopuram_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GopuramSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 352H480V240C480 231.25 472.75 224 464 224H448V144C448 135.25 440.75 128 432 128H416V16C416 7.25 408.75 0 400 0S384 7.25 384 16V32H320V16C320 7.25 312.75 0 304 0S288 7.25 288 16V32H224V16C224 7.25 216.75 0 208 0S192 7.25 192 16V32H128V16C128 7.25 120.75 0 112 0S96 7.25 96 16V128H80C71.25 128 64 135.25 64 144V224H48C39.25 224 32 231.25 32 240V352H16C7.25 352 0 359.25 0 368V496C0 504.75 7.25 512 16 512H96V352H128V224H160V128H192V224H160V352H128V512H208V432C208 423.25 215.25 416 224 416H288C296.75 416 304 423.25 304 432V512H384V352H352V224H320V128H352V224H384V352H416V512H496C504.75 512 512 504.75 512 496V368C512 359.25 504.75 352 496 352ZM232 176C232 167.25 239.25 160 248 160H264C272.75 160 280 167.25 280 176V224H232V176ZM288 352H224V288C224 279.25 231.25 272 240 272H272C280.75 272 288 279.25 288 288V352Z" })
  }
));
GopuramSolid.displayName = "GopuramSolid";
var Gopuram_default = GopuramSolid;
