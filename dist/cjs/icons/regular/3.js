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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon3Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 343.281C320 418.656 258.658 480 183.27 480H104.664C57.853 480 16.448 450.156 1.651 405.75C-3.942 388.969 5.136 370.844 21.901 365.25C38.619 359.75 56.775 368.75 62.368 385.5C68.446 403.75 85.445 416 104.664 416H183.27C223.378 416 256.002 383.375 256.002 343.281C256.002 303.156 223.378 270.531 183.27 270.531H96.008C83.039 270.531 71.352 262.719 66.415 250.719S64.274 224.938 73.477 215.812L194.286 96H32.01C14.339 96 0.011 81.688 0.011 64S14.339 32 32.01 32H272.002C284.97 32 296.657 39.812 301.594 51.812C306.532 63.812 303.735 77.594 294.532 86.719L173.724 206.531H183.27C258.658 206.531 320 267.875 320 343.281Z" })
  }
));
Icon3Regular.displayName = "Icon3Regular";
var __default = Icon3Regular;
