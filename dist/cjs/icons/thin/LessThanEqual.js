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
var LessThanEqual_exports = {};
__export(LessThanEqual_exports, {
  default: () => LessThanEqual_default
});
module.exports = __toCommonJS(LessThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LessThanEqualThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 439.998H8C3.594 439.998 0 443.592 0 447.999S3.594 456 8 456H440C444.406 456 448 452.406 448 447.999S444.406 439.998 440 439.998ZM61.031 199.406L381.031 327.422C381.999 327.797 383 327.984 384 327.984C387.188 327.984 390.188 326.078 391.438 322.952C393.062 318.858 391.062 314.201 386.969 312.545L85.531 191.968L386.969 71.39C391.063 69.734 393.063 65.077 391.438 60.983C389.781 56.889 385.062 55.013 381.031 56.514L61.031 184.529C57.999 185.748 56 188.686 56 191.968C56 195.249 57.999 198.187 61.031 199.406Z" })
  }
));
LessThanEqualThin.displayName = "LessThanEqualThin";
var LessThanEqual_default = LessThanEqualThin;
