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
var ICursor_exports = {};
__export(ICursor_exports, {
  default: () => ICursor_default
});
module.exports = __toCommonJS(ICursor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ICursorThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 504C256 508.406 252.422 512 248 512H224C180.773 512 143.672 485.461 128 447.844C112.328 485.461 75.227 512 32 512H8C3.578 512 0 508.406 0 504S3.578 496 8 496H32C80.531 496 120 456.531 120 408V264H64C59.578 264 56 260.406 56 256S59.578 248 64 248H120V104C120 55.469 80.531 16 32 16H8C3.578 16 0 12.406 0 8S3.578 0 8 0H32C75.227 0 112.328 26.539 128 64.156C143.672 26.539 180.773 0 224 0H248C252.422 0 256 3.594 256 8S252.422 16 248 16H224C175.469 16 136 55.469 136 104V248H192C196.422 248 200 251.594 200 256S196.422 264 192 264H136V408C136 456.531 175.469 496 224 496H248C252.422 496 256 499.594 256 504Z" })
  }
));
ICursorThin.displayName = "ICursorThin";
var ICursor_default = ICursorThin;
