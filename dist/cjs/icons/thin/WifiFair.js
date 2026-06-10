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
var WifiFair_exports = {};
__export(WifiFair_exports, {
  default: () => WifiFair_default
});
module.exports = __toCommonJS(WifiFair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiFairThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.113 352C284.77 352 256.113 380.657 256.113 415.999C256.113 451.344 284.77 480 320.113 480S384.113 451.344 384.113 415.999C384.113 380.657 355.457 352 320.113 352ZM320.113 464C293.645 464 272.113 442.467 272.113 415.999C272.113 389.533 293.645 368 320.113 368S368.113 389.533 368.113 415.999C368.113 442.467 346.582 464 320.113 464ZM320.125 192C245.031 192 174.437 221.234 121.344 274.344C118.219 277.467 118.219 282.531 121.344 285.655C124.469 288.78 129.531 288.78 132.656 285.655C182.719 235.577 249.313 208 320.125 208S457.531 235.577 507.594 285.655C509.156 287.218 511.187 287.999 513.25 287.999S517.344 287.218 518.906 285.655C522.031 282.531 522.031 277.467 518.906 274.344C465.813 221.234 395.219 192 320.125 192Z" })
  }
));
WifiFairThin.displayName = "WifiFairThin";
var WifiFair_default = WifiFairThin;
