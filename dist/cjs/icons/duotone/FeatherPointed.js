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
var FeatherPointed_exports = {};
__export(FeatherPointed_exports, {
  default: () => FeatherPointed_default
});
module.exports = __toCommonJS(FeatherPointed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherPointedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M466.849 241.969L351.73 288.02H446.068C438.357 302.871 429.781 317.301 420.195 331.035L287.73 384.026H373.381C314.041 436.74 229.338 464.324 108.873 436.795L344.699 200.969C354.074 191.594 354.074 176.406 344.699 167.031S320.136 157.656 310.761 167.031L74.834 402.959C-3.229 61.977 362.215 8.434 478.595 0.082C497.461 -1.271 513.002 14.27 511.648 33.137C508.39 78.531 498.191 161.838 466.849 241.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 512C17.844 512 11.719 509.656 7.031 504.969C-2.344 495.594 -2.344 480.406 7.031 471.031L311.031 167.031C320.406 157.656 335.594 157.656 344.969 167.031S354.344 191.594 344.969 200.969L40.969 504.969C36.281 509.656 30.156 512 24 512Z" })
    ]
  }
));
FeatherPointedDuotone.displayName = "FeatherPointedDuotone";
var FeatherPointed_default = FeatherPointedDuotone;
