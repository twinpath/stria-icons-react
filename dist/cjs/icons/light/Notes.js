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
var Notes_exports = {};
__export(Notes_exports, {
  default: () => Notes_default
});
module.exports = __toCommonJS(Notes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 32C376.836 32 384 24.836 384 16S376.836 0 368 0H96C42.98 0 0 42.98 0 96V368C0 376.836 7.164 384 16 384S32 376.836 32 368V96C32 60.656 60.656 32 96 32H368ZM416 96H160C124.654 96 96 124.652 96 160V416C96 451.348 124.654 480 160 480H325.49C342.465 480 358.744 473.258 370.746 461.254L461.256 370.746C473.258 358.742 480 342.465 480 325.492V160C480 124.652 451.348 96 416 96ZM352 434.742V368C352 359.172 359.188 352 368 352H434.746L352 434.742ZM448 320H368C341.531 320 320 341.531 320 368V448H160C142.355 448 128 433.645 128 416V160C128 142.355 142.355 128 160 128H416C433.645 128 448 142.355 448 160V320Z" })
  }
));
NotesLight.displayName = "NotesLight";
var Notes_default = NotesLight;
