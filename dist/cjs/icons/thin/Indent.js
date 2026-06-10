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
var Indent_exports = {};
__export(Indent_exports, {
  default: () => Indent_default
});
module.exports = __toCommonJS(Indent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndentThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 72H440C444.406 72 448 68.406 448 64S444.406 56 440 56H8C3.594 56 0 59.594 0 64S3.594 72 8 72ZM440 312H200C195.594 312 192 315.594 192 320S195.594 328 200 328H440C444.406 328 448 324.406 448 320S444.406 312 440 312ZM440 184H200C195.594 184 192 187.594 192 192S195.594 200 200 200H440C444.406 200 448 196.406 448 192S444.406 184 440 184ZM12.5 349.781C15.438 351.25 18.625 352 22 352C27.281 352 32.344 350.062 36.219 346.625L120.219 273.281C125.156 268.969 128 262.656 128 256S125.156 243.031 120.219 238.719L36.25 165.406C29.75 159.687 20.469 158.406 12.5 162.219C4.906 165.969 0 174 0 182.656V329.344C0 338 4.906 346.031 12.5 349.781ZM16 182.656C16 180.031 17.406 177.625 19.5 176.594C22.406 175.305 24.508 176.398 25.719 177.437L109.719 250.781C111.156 252.031 112 253.969 112 256S111.156 259.969 109.719 261.219L25.656 334.625C23.25 336.781 21.156 336.187 19.625 335.469C17.406 334.375 16 331.969 16 329.344V182.656ZM440 440H8C3.594 440 0 443.594 0 448S3.594 456 8 456H440C444.406 456 448 452.406 448 448S444.406 440 440 440Z" })
  }
));
IndentThin.displayName = "IndentThin";
var Indent_default = IndentThin;
