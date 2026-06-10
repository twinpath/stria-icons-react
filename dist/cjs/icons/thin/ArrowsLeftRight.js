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
var ArrowsLeftRight_exports = {};
__export(ArrowsLeftRight_exports, {
  default: () => ArrowsLeftRight_default
});
module.exports = __toCommonJS(ArrowsLeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsLeftRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.656 261.777L413.656 365.606C410.531 368.798 405.469 368.798 402.344 365.606C399.219 362.414 399.219 357.244 402.344 354.052L484.687 264.171H27.312L109.656 354.052C112.781 357.244 112.781 362.414 109.656 365.606C108.094 367.202 106.062 368 104 368S99.906 367.202 98.344 365.606L2.344 261.777C-0.781 258.585 -0.781 253.415 2.344 250.223L98.344 146.394C101.469 143.202 106.531 143.202 109.656 146.394S112.781 154.756 109.656 157.948L27.312 247.829H484.687L402.344 157.948C399.219 154.756 399.219 149.586 402.344 146.394C403.906 144.798 405.937 144 408 144S412.094 144.798 413.656 146.394L509.656 250.223C512.781 253.415 512.781 258.585 509.656 261.777Z" })
  }
));
ArrowsLeftRightThin.displayName = "ArrowsLeftRightThin";
var ArrowsLeftRight_default = ArrowsLeftRightThin;
