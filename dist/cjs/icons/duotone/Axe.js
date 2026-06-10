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
var Axe_exports = {};
__export(Axe_exports, {
  default: () => Axe_default
});
module.exports = __toCommonJS(Axe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.374 434.737C-3.125 447.235 -3.125 467.495 9.374 479.993L32.008 502.627C44.506 515.125 64.768 515.124 77.264 502.625L331.063 248.817L263.182 180.936L9.374 434.737ZM502.627 77.249C515.125 64.75 515.125 44.489 502.627 31.993L480.008 9.374C467.51 -3.125 447.25 -3.125 434.752 9.374L404.928 39.198L472.803 107.073L502.627 77.249ZM576 160.016V192.016C576 280.235 504.219 352.016 416 352.016H384V416.016H416C539.5 416.016 640 315.532 640 192.016V160.016H576Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352.016V416.016H383.996V301.75L233.371 151.125C220.875 138.629 220.877 118.368 233.373 105.874L329.871 9.391C336.121 3.141 344.309 0.016 352.496 0.016S368.871 3.141 375.121 9.391L525.746 160.016H576V192.016C576 280.235 504.219 352.016 416 352.016H384Z" })
    ]
  }
));
AxeDuotone.displayName = "AxeDuotone";
var Axe_default = AxeDuotone;
