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
var Person_exports = {};
__export(Person_exports, {
  default: () => Person_default
});
module.exports = __toCommonJS(Person_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 96C186.501 96 208.001 74.5 208.001 48S186.501 0 160 0S112 21.5 112 48S133.5 96 160 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M315.126 271.047L244.563 158.094C232.782 139.25 212.469 128 190.25 128H129.75C107.531 128 87.218 139.25 75.468 158.094L4.873 271.047C-4.502 286.031 0.061 305.766 15.03 315.141C30.03 324.516 49.78 319.953 59.124 304.953L87.999 258.771V480C87.999 497.672 102.325 512 119.999 512S152 497.672 152 480V336H168V480C168 497.672 182.326 512 200 512S232.001 497.672 232.001 480V258.752L260.876 304.953C266.938 314.672 277.376 320 288.032 320C293.814 320 299.689 318.438 304.97 315.141C319.939 305.766 324.502 286.031 315.126 271.047Z" })
    ]
  }
));
PersonDuotone.displayName = "PersonDuotone";
var Person_default = PersonDuotone;
