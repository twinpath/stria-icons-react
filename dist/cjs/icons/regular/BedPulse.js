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
const BedPulseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 95.985H337.75L378.938 171.498C383.141 179.218 391.234 184 400 184H400.719C409.75 183.719 417.859 178.405 421.719 170.216L471.172 65.105L495.031 88.952C499.531 93.453 505.641 95.985 512 95.985H616C629.25 95.985 640 85.233 640 71.981S629.25 47.977 616 47.977H521.938L480.969 7.001C475.453 1.469 467.594 -0.907 459.875 0.312C452.172 1.656 445.609 6.688 442.281 13.752L398.422 106.987L373.062 60.479C368.859 52.79 360.781 47.977 352 47.977H216C202.75 47.977 192 58.728 192 71.981S202.75 95.985 216 95.985ZM168 336C216.5 336 256 296.5 256 248S216.5 160 168 160S80 199.5 80 248S119.5 336 168 336ZM168 208C190 208 208 226 208 248S190 288 168 288C146 288 128 270 128 248S146 208 168 208ZM528 160H488C474.746 160 464 170.744 464 184C464 197.254 474.746 208 488 208H528C563.199 208 592 236.799 592 272V368H336V184C336 170.744 325.254 160 312 160S288 170.744 288 184V368H48V88C48 74.744 37.254 64 24 64S0 74.744 0 88V488C0 501.254 10.746 512 24 512S48 501.254 48 488V416H592V488C592 501.254 602.746 512 616 512S640 501.254 640 488V272C640 210.145 589.855 160 528 160Z" })
  }
));
BedPulseRegular.displayName = "BedPulseRegular";
var BedPulse_default = BedPulseRegular;
