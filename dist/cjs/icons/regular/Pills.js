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
var Pills_exports = {};
__export(Pills_exports, {
  default: () => Pills_default
});
module.exports = __toCommonJS(Pills_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PillsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M529.125 206.844C466.75 144.48 365.25 144.355 302.75 206.844C240.25 269.334 240.25 370.691 302.75 433.18C365.25 495.543 466.625 495.668 529.125 433.18S591.625 269.209 529.125 206.844ZM321.75 259.709L476.25 414.184C375.75 478.672 257 360.441 321.75 259.709ZM510.25 380.189L355.75 225.715C456.25 161.102 575 279.457 510.25 380.189ZM112 32C50.125 32 0 82.115 0 143.98V367.941C0 429.805 50.125 479.922 112 479.922S224 429.805 224 367.941V143.98C224 82.115 173.875 32 112 32ZM176 255.961H48V143.98C48 59.244 176 59.244 176 143.98V255.961Z" })
  }
));
PillsRegular.displayName = "PillsRegular";
var Pills_default = PillsRegular;
