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
var NotEqual_exports = {};
__export(NotEqual_exports, {
  default: () => NotEqual_default
});
module.exports = __toCommonJS(NotEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotEqualRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 336C432 349.25 421.25 360 408 360H184.828L124.094 453.125C119.5 460.156 111.812 464 103.969 464C99.469 464 94.937 462.75 90.875 460.094C79.781 452.875 76.656 438 83.906 426.875L127.52 360H40C26.75 360 16 349.25 16 336S26.75 312 40 312H158.824L231.869 200H40C26.75 200 16 189.25 16 176S26.75 152 40 152H263.172L323.906 58.875C331.125 47.813 345.999 44.625 357.125 51.906C368.219 59.125 371.344 74 364.094 85.125L320.48 152H408C421.25 152 432 162.75 432 176S421.25 200 408 200H289.176L216.131 312H408C421.25 312 432 322.75 432 336Z" })
  }
));
NotEqualRegular.displayName = "NotEqualRegular";
var NotEqual_default = NotEqualRegular;
