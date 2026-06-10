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
var MugSaucer_exports = {};
__export(MugSaucer_exports, {
  default: () => MugSaucer_default
});
module.exports = __toCommonJS(MugSaucer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugSaucerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 32H120.043C106.793 32 96.043 42.75 96.043 56V288C96.043 341 139.043 384 192.043 384H384.043C436.898 384 479.762 341.223 480 288.426V224H544C597.02 224 640 181.02 640 128S597.02 32 544 32ZM464 288.354C463.801 332.27 427.934 368 384.043 368H192.043C147.93 368 112.043 332.111 112.043 288V56C112.043 51.588 115.633 48 120.043 48H464V288.354ZM544 208H480V48H544C588.113 48 624 83.889 624 128S588.113 208 544 208ZM568 416C563.594 416 560 419.578 560 424C560 446.062 542.062 464 520 464H56C33.938 464 16 446.062 16 424C16 419.578 12.406 416 8 416S0 419.578 0 424C0 454.875 25.125 480 56 480H520C550.875 480 576 454.875 576 424C576 419.578 572.406 416 568 416Z" })
  }
));
MugSaucerThin.displayName = "MugSaucerThin";
var MugSaucer_default = MugSaucerThin;
