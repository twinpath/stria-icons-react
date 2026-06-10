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
var PowerOff_exports = {};
__export(PowerOff_exports, {
  default: () => PowerOff_default
});
module.exports = __toCommonJS(PowerOff_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PowerOffThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.75 67.719C376 65.438 371.062 66.469 368.719 70.219C366.344 73.953 367.469 78.891 371.187 81.25C434.312 121.125 472 189.453 472 264C472 383.109 375.094 480 256 480S40 383.109 40 264C40 189.438 77.688 121.125 140.781 81.25C144.5 78.891 145.625 73.953 143.25 70.219C140.938 66.469 136 65.438 132.219 67.719C64.469 110.547 24 183.922 24 264C24 391.922 128.062 496 256 496S488 391.922 488 264C488 183.922 447.531 110.547 379.75 67.719ZM255.986 264C260.408 264 263.986 260.406 263.986 256V16C263.986 11.594 260.408 8 255.986 8S247.986 11.594 247.986 16V256C247.986 260.406 251.564 264 255.986 264Z" })
  }
));
PowerOffThin.displayName = "PowerOffThin";
var PowerOff_default = PowerOffThin;
