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
var ArrowUpToLine_exports = {};
__export(ArrowUpToLine_exports, {
  default: () => ArrowUpToLine_default
});
module.exports = __toCommonJS(ArrowUpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M197.656 130.344C194.531 127.219 189.469 127.219 186.344 130.344L34.344 282.344C32.781 283.906 32 285.938 32 288S32.781 292.094 34.344 293.656C37.469 296.781 42.531 296.781 45.656 293.656L184 155.312V472C184 476.406 187.578 480 192 480S200 476.406 200 472V155.312L338.344 293.656C341.469 296.781 346.531 296.781 349.656 293.656S352.781 285.469 349.656 282.344L197.656 130.344ZM376 32H8C3.582 32 0 35.582 0 40S3.582 48 8 48H376C380.418 48 384 44.418 384 40S380.418 32 376 32Z" })
  }
));
ArrowUpToLineThin.displayName = "ArrowUpToLineThin";
var ArrowUpToLine_default = ArrowUpToLineThin;
