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
var FaceFlushed_exports = {};
__export(FaceFlushed_exports, {
  default: () => FaceFlushed_default
});
module.exports = __toCommonJS(FaceFlushed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFlushedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 200C338.68 200 328.023 210.75 328.023 224S338.68 248 352 248S375.977 237.25 375.977 224S365.32 200 352 200ZM160 200C146.68 200 136.023 210.75 136.023 224S146.68 248 160 248C173.32 248 183.977 237.25 183.977 224S173.32 200 160 200ZM256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM88.01 224C88.01 184.25 120.221 152 159.939 152C199.779 152 231.99 184.25 231.99 224S199.779 296 159.939 296C120.221 296 88.01 263.75 88.01 224ZM320.059 400H191.941C170.75 400 170.75 368 191.941 368H320.059C341.25 368 341.25 400 320.059 400ZM352.027 296C312.187 296 279.977 263.75 279.977 224S312.187 152 352.027 152C391.746 152 423.957 184.25 423.957 224S391.746 296 352.027 296Z" })
  }
));
FaceFlushedSolid.displayName = "FaceFlushedSolid";
var FaceFlushed_default = FaceFlushedSolid;
