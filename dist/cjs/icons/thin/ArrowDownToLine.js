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
const ArrowDownToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.344 381.656C189.469 384.781 194.531 384.781 197.656 381.656L349.656 229.656C351.219 228.094 352 226.062 352 224S351.219 219.906 349.656 218.344C346.531 215.219 341.469 215.219 338.344 218.344L200 356.688V40C200 35.594 196.422 32 192 32S184 35.594 184 40V356.688L45.656 218.344C42.531 215.219 37.469 215.219 34.344 218.344S31.219 226.531 34.344 229.656L186.344 381.656ZM8 480H376C380.418 480 384 476.418 384 472S380.418 464 376 464H8C3.582 464 0 467.582 0 472S3.582 480 8 480Z" })
  }
));
ArrowDownToLineThin.displayName = "ArrowDownToLineThin";
var ArrowDownToLine_default = ArrowDownToLineThin;
