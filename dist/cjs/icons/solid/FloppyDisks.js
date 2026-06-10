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
var FloppyDisks_exports = {};
__export(FloppyDisks_exports, {
  default: () => FloppyDisks_default
});
module.exports = __toCommonJS(FloppyDisks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDisksSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H368C394.51 512 416 490.508 416 464H80C62.326 464 48 449.672 48 432ZM497.938 97.938L414.062 14.062C406.312 6.297 391.094 0 380.125 0H144C117.5 0 96 21.484 96 48V368C96 394.516 117.5 416 144 416H464C490.5 416 512 394.516 512 368V131.875C512 120.906 505.688 105.703 497.938 97.938ZM288 352C252.656 352 224 323.344 224 288S252.656 224 288 224S352 252.656 352 288S323.344 352 288 352ZM384 144C384 152.836 376.836 160 368 160H176C167.164 160 160 152.836 160 144V80C160 71.162 167.164 64 176 64H368C376.836 64 384 71.162 384 80V144Z" })
  }
));
FloppyDisksSolid.displayName = "FloppyDisksSolid";
var FloppyDisks_default = FloppyDisksSolid;
