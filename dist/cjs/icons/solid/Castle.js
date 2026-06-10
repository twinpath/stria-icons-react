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
var Castle_exports = {};
__export(Castle_exports, {
  default: () => Castle_default
});
module.exports = __toCommonJS(Castle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CastleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 176V480C640 497.672 625.674 512 608 512H384V384C384 348.652 355.346 320 320 320S256 348.652 256 384V512H32C14.326 512 0 497.672 0 480V176C0 167.162 7.164 160 16 160H64C72.836 160 80 167.162 80 176V224H128V16C128 7.162 135.164 0 144 0H192C200.836 0 208 7.162 208 16V64H240V16C240 7.162 247.164 0 256 0H288C296.836 0 304 7.162 304 16V64H336V16C336 7.162 343.164 0 352 0H384C392.836 0 400 7.162 400 16V64H432V16C432 7.162 439.164 0 448 0H496C504.836 0 512 7.162 512 16V224H560V176C560 167.162 567.164 160 576 160H624C632.836 160 640 167.162 640 176Z" })
  }
));
CastleSolid.displayName = "CastleSolid";
var Castle_default = CastleSolid;
