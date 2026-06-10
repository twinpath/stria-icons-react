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
var ArrowUpRightAndArrowDownLeftFromCenter_exports = {};
__export(ArrowUpRightAndArrowDownLeftFromCenter_exports, {
  default: () => ArrowUpRightAndArrowDownLeftFromCenter_default
});
module.exports = __toCommonJS(ArrowUpRightAndArrowDownLeftFromCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpRightAndArrowDownLeftFromCenterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.172 1.852C494.238 0.641 491.125 0 488 0H344C330.75 0 320 10.75 320 24S330.75 48 344 48H430.062L295.031 183.031C285.656 192.406 285.656 207.594 295.031 216.969S319.594 226.344 328.969 216.969L464 81.938V168C464 181.25 474.75 192 488 192S512 181.25 512 168V24C512 20.867 511.359 17.75 510.145 14.82C507.711 8.957 503.035 4.285 497.172 1.852ZM14.828 510.148C17.762 511.359 20.875 512 24 512H168C181.25 512 192 501.25 192 488S181.25 464 168 464H81.938L216.969 328.969C226.344 319.594 226.344 304.406 216.969 295.031S192.406 285.656 183.031 295.031L48 430.062V344C48 330.75 37.25 320 24 320S0 330.75 0 344V488C0 491.133 0.641 494.25 1.855 497.18C4.289 503.043 8.965 507.715 14.828 510.148Z" })
  }
));
ArrowUpRightAndArrowDownLeftFromCenterRegular.displayName = "ArrowUpRightAndArrowDownLeftFromCenterRegular";
var ArrowUpRightAndArrowDownLeftFromCenter_default = ArrowUpRightAndArrowDownLeftFromCenterRegular;
