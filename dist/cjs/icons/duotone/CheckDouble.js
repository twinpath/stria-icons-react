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
var CheckDouble_exports = {};
__export(CheckDouble_exports, {
  default: () => CheckDouble_default
});
module.exports = __toCommonJS(CheckDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckDoubleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 252.281C181.766 252.281 171.531 248.375 163.719 240.563L83.719 160.563C68.094 144.938 68.094 119.625 83.719 104S124.656 88.375 140.281 104L192 155.719L323.719 24C339.344 8.375 364.656 8.375 380.281 24S395.906 64.938 380.281 80.563L220.281 240.563C212.469 248.375 202.234 252.281 192 252.281Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 488C181.766 488 171.531 484.094 163.719 476.281L35.719 348.281C20.094 332.656 20.094 307.344 35.719 291.719S76.656 276.094 92.281 291.719L192 391.438L419.719 163.719C435.344 148.094 460.656 148.094 476.281 163.719S491.906 204.656 476.281 220.281L220.281 476.281C212.469 484.094 202.234 488 192 488Z" })
    ]
  }
));
CheckDoubleDuotone.displayName = "CheckDoubleDuotone";
var CheckDouble_default = CheckDoubleDuotone;
