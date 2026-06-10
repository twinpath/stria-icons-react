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
var Blanket_exports = {};
__export(Blanket_exports, {
  default: () => Blanket_default
});
module.exports = __toCommonJS(Blanket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlanketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 384H88C83.578 384 80 387.578 80 392S83.578 400 88 400H400C426.469 400 448 378.469 448 352V104C448 64.297 415.703 32 376 32H72C32.297 32 0 64.297 0 104C0 104 0 389.799 0 392C0 440.531 39.469 480 88 480H440C444.422 480 448 476.422 448 472S444.422 464 440 464H88C48.297 464 16 431.703 16 392S48.297 320 88 320H400C417.641 320 432 334.359 432 352S417.641 384 400 384ZM400 304H88C58.205 304 31.928 318.957 16 341.674V104C16 73.125 41.125 48 72 48H376C406.875 48 432 73.125 432 104V316.484C423.488 308.809 412.338 304 400 304Z" })
  }
));
BlanketThin.displayName = "BlanketThin";
var Blanket_default = BlanketThin;
