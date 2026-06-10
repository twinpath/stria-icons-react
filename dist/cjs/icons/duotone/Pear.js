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
var Pear_exports = {};
__export(Pear_exports, {
  default: () => Pear_default
});
module.exports = __toCommonJS(Pear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PearDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.65 166.232C479.65 139.546 471.767 112.822 456.1 89.838L424.969 120.969C420.282 125.656 414.141 128.001 408 128.001C395.209 128.001 384 117.701 384 104C384 97.859 386.344 91.719 391.031 87.031L422.416 55.646C399.928 39.92 373.751 32.365 347.463 32.365C310.987 32.365 274.296 46.91 246.944 74.352C171.349 150.195 0 137.546 0 319.536C0 425.857 86.581 511.999 192.246 511.999C372.101 511.999 365.448 336.097 440.713 260.58C466.741 234.468 479.65 200.381 479.65 166.232ZM192 448C183.156 448 176 440.844 176 432S183.156 416 192 416C244.938 416 288 372.938 288 320C288 311.156 295.156 304 304 304S320 311.156 320 320C320 390.578 262.594 448 192 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M407.999 128.002C395.183 128.002 384 117.674 384 104C384 97.859 386.344 91.719 391.031 87.031L471.031 7.031C475.719 2.344 481.859 0 488 0C500.79 0 512 10.298 512 24C512 30.141 509.656 36.281 504.969 40.969L424.969 120.969C420.281 125.657 414.14 128.002 407.999 128.002Z" })
    ]
  }
));
PearDuotone.displayName = "PearDuotone";
var Pear_default = PearDuotone;
