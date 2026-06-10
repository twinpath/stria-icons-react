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
var ArrowLeftFromLine_exports = {};
__export(ArrowLeftFromLine_exports, {
  default: () => ArrowLeftFromLine_default
});
module.exports = __toCommonJS(ArrowLeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftFromLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.968 88V424C399.968 437.25 410.725 448 423.984 448S448 437.25 448 424V88C448 74.75 437.243 64 423.984 64S399.968 74.75 399.968 88ZM176.257 366.531L84.282 280H327.92C341.179 280 351.936 269.25 351.936 256S341.179 232 327.92 232H84.282L176.257 145.469C181.292 140.75 183.825 134.375 183.825 128C183.825 122.094 181.667 116.188 177.289 111.562C168.221 101.906 153.023 101.438 143.361 110.531L7.27 238.531C-2.423 247.594 -2.423 264.406 7.27 273.469L143.361 401.469C153.023 410.563 168.221 410.094 177.289 400.438C186.389 390.812 185.951 375.625 176.257 366.531Z" })
  }
));
ArrowLeftFromLineRegular.displayName = "ArrowLeftFromLineRegular";
var ArrowLeftFromLine_default = ArrowLeftFromLineRegular;
