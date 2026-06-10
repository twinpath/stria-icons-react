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
var ArrowUpFromLine_exports = {};
__export(ArrowUpFromLine_exports, {
  default: () => ArrowUpFromLine_default
});
module.exports = __toCommonJS(ArrowUpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M197.656 34.344C194.531 31.219 189.469 31.219 186.344 34.344L34.344 186.344C32.781 187.906 32 189.938 32 192S32.781 196.094 34.344 197.656C37.469 200.781 42.531 200.781 45.656 197.656L184 59.312V376C184 380.406 187.578 384 192 384S200 380.406 200 376V59.312L338.344 197.656C341.469 200.781 346.531 200.781 349.656 197.656S352.781 189.469 349.656 186.344L197.656 34.344ZM376 464H8C3.582 464 0 467.582 0 472S3.582 480 8 480H376C380.418 480 384 476.418 384 472S380.418 464 376 464Z" })
  }
));
ArrowUpFromLineThin.displayName = "ArrowUpFromLineThin";
var ArrowUpFromLine_default = ArrowUpFromLineThin;
