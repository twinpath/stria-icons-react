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
const BedPulseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 318.314V320.004H97.689C97.119 319.445 96.559 318.885 96 318.314ZM176 320.006C220.125 320.006 256 284.131 256 240.008S220.125 160.01 176 160.01S96 195.885 96 240.008S131.875 320.006 176 320.006ZM256 318.314C255.441 318.885 254.881 319.445 254.311 320.004H256V318.314ZM544 160.01H461.896L450.658 183.887C441.535 203.219 421.83 215.826 400 216.008C378.771 216.008 359.025 203.697 349.703 184.654L337.627 160.01H304C295.164 160.01 288 167.174 288 176.01V352.004H64V80.012C64 71.178 56.836 64.014 48 64.014H16C7.164 64.014 0 71.178 0 80.012V496C0 504.836 7.164 512 16 512H48C56.836 512 64 504.836 64 496V448.002H576V496C576 504.836 583.164 512 592 512H624C632.836 512 640 504.836 640 496V256.008C640 202.99 597.02 160.01 544 160.01ZM624 48.014H508.844L483.969 10.703C481.645 7.223 478.43 4.572 474.811 2.727C473.639 2.125 472.324 2.176 471.072 1.775C468.768 1.035 466.531 0 464.094 0C463.469 0 462.844 0.025 462.219 0.078C453.594 0.719 445.969 5.969 442.281 13.795L399.562 104.59L378.438 61.467C374.41 53.244 366.051 48.029 356.895 48.029L208.002 48.016C199.164 48.014 192 55.178 192 64.016V80.014C192 88.85 199.162 96.012 207.998 96.014L341.906 96.027L378.438 170.572C382.469 178.807 390.844 184.01 400 184.01H400.188C409.406 183.932 417.781 178.572 421.719 170.229L467.625 72.701L476.031 85.324C480.469 91.996 487.969 96.012 496 96.012H624C632.836 96.012 640 88.848 640 80.012V64.014C640 55.178 632.836 48.014 624 48.014Z" })
  }
));
BedPulseSolid.displayName = "BedPulseSolid";
var BedPulse_default = BedPulseSolid;
