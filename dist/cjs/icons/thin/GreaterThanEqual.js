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
var GreaterThanEqual_exports = {};
__export(GreaterThanEqual_exports, {
  default: () => GreaterThanEqual_default
});
module.exports = __toCommonJS(GreaterThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GreaterThanEqualThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 439.998H8C3.594 439.998 0 443.592 0 447.999S3.594 456 8 456H440C444.406 456 448 452.406 448 447.999S444.406 439.998 440 439.998ZM56.562 322.952C57.812 326.078 60.812 327.984 64 327.984C65 327.984 65.999 327.797 66.969 327.422L386.969 199.406C389.999 198.187 392 195.249 392 191.968C392 188.686 389.999 185.748 386.969 184.529L66.969 56.514C62.938 55.013 58.219 56.889 56.562 60.983C54.938 65.077 56.938 69.734 61.031 71.39L362.469 191.968L61.031 312.545C56.938 314.201 54.938 318.858 56.562 322.952Z" })
  }
));
GreaterThanEqualThin.displayName = "GreaterThanEqualThin";
var GreaterThanEqual_default = GreaterThanEqualThin;
