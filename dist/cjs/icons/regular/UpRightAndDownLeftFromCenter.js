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
var UpRightAndDownLeftFromCenter_exports = {};
__export(UpRightAndDownLeftFromCenter_exports, {
  default: () => UpRightAndDownLeftFromCenter_default
});
module.exports = __toCommonJS(UpRightAndDownLeftFromCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightAndDownLeftFromCenterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M183.027 295.031L101.652 376.406L54.623 329.379C48.496 323.262 40.326 320.027 31.994 320.027C27.877 320.027 23.719 320.82 19.75 322.441C7.781 327.395 0 339.066 0 352V488C0 501.254 10.744 512 24 512H159.998C172.936 512 184.623 504.203 189.561 492.25C194.529 480.281 191.779 466.531 182.623 457.375L135.59 410.344L216.965 328.969C226.34 319.594 226.34 304.406 216.965 295.031S192.402 285.656 183.027 295.031ZM487.996 0H351.998C339.061 0 327.373 7.797 322.436 19.75C317.467 31.719 320.217 45.469 329.373 54.625L376.406 101.656L295.031 183.031C285.656 192.406 285.656 207.594 295.031 216.969S319.594 226.344 328.969 216.969L410.344 135.594L457.373 182.621C463.5 188.738 471.67 191.973 480.002 191.973C484.119 191.973 488.277 191.18 492.246 189.559C504.215 184.605 511.996 172.934 511.996 160V24C511.996 10.746 501.252 0 487.996 0Z" })
  }
));
UpRightAndDownLeftFromCenterRegular.displayName = "UpRightAndDownLeftFromCenterRegular";
var UpRightAndDownLeftFromCenter_default = UpRightAndDownLeftFromCenterRegular;
