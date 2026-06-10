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
var Pumpkin_exports = {};
__export(Pumpkin_exports, {
  default: () => Pumpkin_default
});
module.exports = __toCommonJS(Pumpkin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PumpkinDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 319.993C576 384.441 524.761 511.926 424.553 511.926C399.599 511.926 374.639 503.987 355.257 488.125C337.38 503.5 315.253 512 287.999 512C260.747 512 238.62 503.5 220.868 488.125C201.423 503.987 176.432 511.926 151.462 511.926C51.361 511.926 0 385.93 0 319.993C0 255.817 50.899 128.447 150.466 128.447C160.48 128.447 170.519 129.718 180.237 132.236C161.415 149.138 161.624 151.873 154.86 164.111C186.614 140.486 230.493 127.986 287.999 127.986S389.386 140.486 421.14 164.111C414.339 151.805 414.554 149.107 395.761 132.236C405.479 129.718 415.518 128.447 425.532 128.447C524.993 128.447 576 254.478 576 319.993Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.512 106.61V35.732C351.512 29.732 348.136 24.231 342.636 21.481L303.006 1.731C300.722 0.554 298.284 0 295.879 0C289.596 0 283.535 3.778 281.004 10.106L245 100.234C258.126 97.609 272.128 95.984 287.505 95.984C311.757 95.984 332.759 99.984 351.512 106.61Z" })
    ]
  }
));
PumpkinDuotone.displayName = "PumpkinDuotone";
var Pumpkin_default = PumpkinDuotone;
