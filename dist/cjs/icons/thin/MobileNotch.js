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
var MobileNotch_exports = {};
__export(MobileNotch_exports, {
  default: () => MobileNotch_default
});
module.exports = __toCommonJS(MobileNotch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MobileNotchThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 440H144C139.594 440 136 443.578 136 448S139.594 456 144 456H240C244.406 456 248 452.422 248 448S244.406 440 240 440ZM304 0H80C53.5 0 32 21.5 32 48V464C32 490.5 53.5 512 80 512H304C330.5 512 352 490.5 352 464V48C352 21.5 330.5 0 304 0ZM144 16H240V40C240 44.406 236.406 48 232 48H152C147.594 48 144 44.406 144 40V16ZM336 464C336 481.645 321.645 496 304 496H80C62.355 496 48 481.645 48 464V48C48 30.355 62.355 16 80 16H128V40C128 53.234 138.766 64 152 64H232C245.234 64 256 53.234 256 40V16H304C321.645 16 336 30.355 336 48V464Z" })
  }
));
MobileNotchThin.displayName = "MobileNotchThin";
var MobileNotch_default = MobileNotchThin;
