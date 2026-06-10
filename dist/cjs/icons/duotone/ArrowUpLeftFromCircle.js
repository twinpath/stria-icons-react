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
var ArrowUpLeftFromCircle_exports = {};
__export(ArrowUpLeftFromCircle_exports, {
  default: () => ArrowUpLeftFromCircle_default
});
module.exports = __toCommonJS(ArrowUpLeftFromCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpLeftFromCircleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 512C164.5 512 64 411.5 64 288C64 270.312 78.312 256 96 256S128 270.312 128 288C128 376.219 199.781 448 288 448S448 376.219 448 288S376.219 128 288 128C270.312 128 256 113.688 256 96S270.312 64 288 64C411.5 64 512 164.5 512 288S411.5 512 288 512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.371 9.367C15.16 3.578 23.156 0 32 0L192 0C209.672 0 223.996 14.324 223.996 31.996C223.996 49.664 209.672 63.992 192.002 63.992H109.25L333.258 290.738C345.756 303.234 345.756 323.5 333.258 336C320.76 348.496 300.498 348.492 288 336L63.992 109.246V192C63.992 209.672 49.666 223.996 31.996 223.996H31.994C14.324 223.996 0 209.672 0 192V31.996C0 23.156 3.578 15.156 9.371 9.367Z" })
    ]
  }
));
ArrowUpLeftFromCircleDuotone.displayName = "ArrowUpLeftFromCircleDuotone";
var ArrowUpLeftFromCircle_default = ArrowUpLeftFromCircleDuotone;
