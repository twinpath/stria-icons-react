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
var BedPulse_exports = {};
__export(BedPulse_exports, {
  default: () => BedPulse_default
});
module.exports = __toCommonJS(BedPulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedPulseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 160.01C131.875 160.01 96 195.885 96 240.008S131.875 320.006 176 320.006S256 284.131 256 240.008S220.125 160.01 176 160.01ZM544 160.01H461.896L450.658 183.887C441.535 203.219 421.83 215.826 400 216.008C378.771 216.008 359.025 203.697 349.703 184.654L337.627 160.01H304C295.164 160.01 288 167.174 288 176.01V352H640V256.008C640 202.99 597.02 160.01 544 160.01Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 48.014H508.844L483.969 10.703C479.512 4.031 471.918 0 464.094 0C463.469 0 462.844 0.025 462.219 0.078C453.594 0.719 445.969 5.969 442.281 13.795L399.562 104.59L378.438 61.467C374.41 53.244 366.051 48.029 356.895 48.029L208.002 48.016C199.164 48.014 192 55.178 192 64.016V80.014C192 88.85 199.162 96.012 207.998 96.014L341.906 96.027L378.438 170.572C382.469 178.807 390.844 184.01 400 184.01H400.188C409.406 183.932 417.781 178.572 421.719 170.229L467.625 72.701L476.031 85.324C480.469 91.996 487.969 96.012 496 96.012H624C632.836 96.012 640 88.848 640 80.012V64.014C640 55.178 632.836 48.014 624 48.014ZM64 80C64 71.156 56.844 64 48 64H16C7.156 64 0 71.156 0 80V496C0 504.844 7.156 512 16 512H48C56.844 512 64 504.844 64 496V448H576V496C576 504.844 583.156 512 592 512H624C632.844 512 640 504.844 640 496V352H64V80Z" })
    ]
  }
));
BedPulseDuotone.displayName = "BedPulseDuotone";
var BedPulse_default = BedPulseDuotone;
