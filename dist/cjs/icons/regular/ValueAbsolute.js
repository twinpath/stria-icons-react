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
var ValueAbsolute_exports = {};
__export(ValueAbsolute_exports, {
  default: () => ValueAbsolute_default
});
module.exports = __toCommonJS(ValueAbsolute_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ValueAbsoluteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 32C10.75 32 0 42.75 0 56V456C0 469.25 10.75 480 24 480S48 469.25 48 456V56C48 42.75 37.25 32 24 32ZM368.969 143.031C359.594 133.656 344.406 133.656 335.031 143.031L256 222.062L176.969 143.031C167.594 133.656 152.406 133.656 143.031 143.031S133.656 167.594 143.031 176.969L222.062 256L143.031 335.031C133.656 344.406 133.656 359.594 143.031 368.969C147.719 373.656 153.844 376 160 376S172.281 373.656 176.969 368.969L256 289.938L335.031 368.969C339.719 373.656 345.844 376 352 376S364.281 373.656 368.969 368.969C378.344 359.594 378.344 344.406 368.969 335.031L289.938 256L368.969 176.969C378.344 167.594 378.344 152.406 368.969 143.031ZM488 32C474.75 32 464 42.75 464 56V456C464 469.25 474.75 480 488 480S512 469.25 512 456V56C512 42.75 501.25 32 488 32Z" })
  }
));
ValueAbsoluteRegular.displayName = "ValueAbsoluteRegular";
var ValueAbsolute_default = ValueAbsoluteRegular;
