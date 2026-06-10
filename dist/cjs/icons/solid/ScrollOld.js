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
var ScrollOld_exports = {};
__export(ScrollOld_exports, {
  default: () => ScrollOld_default
});
module.exports = __toCommonJS(ScrollOld_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrollOldSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 352H416L384 384L352 352H288V384C288 436.875 245 480 192 480H464C525.631 480 575.604 430.271 575.998 368.734C576.057 359.637 569.1 352 560 352ZM48 32C21.5 32 0 53.5 0 80V144C0 152.875 7.125 160 16 160H96V80C96 53.5 74.5 32 48 32ZM256 380.625V320H480V288L475.656 283.656C475.512 283.531 475.402 283.527 475.25 283.375L448 256L480 224V192L448 160L480 128C480 128 480.125 125.25 479.75 120.75C476 71.125 434.5 32 384 32H111.625C121.75 45.375 128 61.875 128 80V192L132.344 196.344C132.488 196.469 132.598 196.473 132.75 196.625L160 224L128 256V384C128 422.875 162.625 453.625 202.75 447.125C234.25 442 256 412.5 256 380.625Z" })
  }
));
ScrollOldSolid.displayName = "ScrollOldSolid";
var ScrollOld_default = ScrollOldSolid;
