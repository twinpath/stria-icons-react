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
var Percent_exports = {};
__export(Percent_exports, {
  default: () => Percent_default
});
module.exports = __toCommonJS(Percent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PercentRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376.969 71.031C367.594 61.656 352.406 61.656 343.031 71.031L7.031 407.031C-2.344 416.406 -2.344 431.594 7.031 440.969C11.719 445.656 17.844 448 24 448S36.281 445.656 40.969 440.969L376.969 104.969C386.344 95.594 386.344 80.406 376.969 71.031ZM64 192C99.348 192 128 163.346 128 128S99.348 64 64 64C28.654 64 0 92.654 0 128S28.654 192 64 192ZM64 112C72.822 112 80 119.178 80 128S72.822 144 64 144S48 136.822 48 128S55.178 112 64 112ZM320 320C284.654 320 256 348.654 256 384S284.654 448 320 448C355.348 448 384 419.346 384 384S355.348 320 320 320ZM320 400C311.178 400 304 392.822 304 384S311.178 368 320 368S336 375.178 336 384S328.822 400 320 400Z" })
  }
));
PercentRegular.displayName = "PercentRegular";
var Percent_default = PercentRegular;
