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
var ArrowDownToLine_exports = {};
__export(ArrowDownToLine_exports, {
  default: () => ArrowDownToLine_default
});
module.exports = __toCommonJS(ArrowDownToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M297.375 169.375L224 242.75V64C224 46.312 209.688 32 192 32S160 46.312 160 64V242.75L86.625 169.375C80.375 163.125 72.188 160 64 160S47.625 163.125 41.375 169.375C28.875 181.875 28.875 202.125 41.375 214.625L169.375 342.625C181.875 355.125 202.125 355.125 214.625 342.625L342.625 214.625C355.125 202.125 355.125 181.875 342.625 169.375S309.875 156.875 297.375 169.375ZM352 416H32C14.312 416 0 430.312 0 448S14.312 480 32 480H352C369.688 480 384 465.688 384 448S369.688 416 352 416Z" })
  }
));
ArrowDownToLineSolid.displayName = "ArrowDownToLineSolid";
var ArrowDownToLine_default = ArrowDownToLineSolid;
