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
const PumpkinSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.007 106.61V35.732C352.007 29.732 348.632 24.231 343.131 21.481L303.502 1.731C301.217 0.554 298.78 0 296.374 0C290.092 0 284.031 3.778 281.499 10.106L245.495 100.234C258.622 97.609 272.623 95.984 288 95.984C312.253 95.984 333.255 99.984 352.007 106.61ZM576 319.993C576 255.817 525.099 128.447 425.532 128.447C415.519 128.447 405.479 129.718 395.762 132.236C414.585 149.138 414.382 151.885 421.139 164.112C389.386 140.486 345.506 127.985 288 127.985S186.614 140.486 154.861 164.112C161.681 151.771 161.445 149.11 180.238 132.236C170.521 129.718 160.481 128.447 150.468 128.447C51.007 128.447 0 254.478 0 319.993C0 384.44 51.255 511.926 151.463 511.926C176.433 511.926 201.424 503.987 220.868 488.124C238.62 503.5 260.747 512 288 512S337.38 503.5 355.257 488.124C374.64 503.987 399.599 511.926 424.553 511.926C524.655 511.926 576 385.929 576 319.993Z" })
  }
));
PumpkinSolid.displayName = "PumpkinSolid";
var Pumpkin_default = PumpkinSolid;
