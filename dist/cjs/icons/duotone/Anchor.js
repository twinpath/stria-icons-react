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
var Anchor_exports = {};
__export(Anchor_exports, {
  default: () => Anchor_default
});
module.exports = __toCommonJS(Anchor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnchorDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.995 176H340.943C366.864 158.809 383.995 129.434 383.995 96C383.995 42.98 341.016 0 287.997 0S192 42.98 192 96C192 129.434 209.13 158.809 235.052 176H208C199.164 176 192 183.164 192 192V224C192 232.836 199.164 240 208 240H367.995C376.833 240 383.995 232.836 383.995 224V192C383.995 183.164 376.833 176 367.995 176ZM287.997 128C270.353 128 255.998 113.645 255.998 96S270.353 64 287.997 64C305.641 64 319.997 78.355 319.997 96S305.641 128 287.997 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.994 352H525.104C509.798 442.66 430.949 512 336 512H240.002C145.054 512 66.204 442.66 50.898 352H16.008C1.767 352 -5.339 334.756 4.696 324.688L68.695 260.688C74.944 254.438 85.069 254.438 91.319 260.688L155.317 324.688C165.338 334.744 158.264 352 144.005 352H116.551C130.863 407.049 180.539 448 240.002 448H256.002V240H320V448H336C395.463 448 445.14 407.049 459.452 352H431.997C417.755 352 410.65 334.756 420.685 324.688L484.683 260.688C490.933 254.438 501.058 254.438 507.308 260.688L571.306 324.688C581.327 334.744 574.253 352 559.994 352Z" })
    ]
  }
));
AnchorDuotone.displayName = "AnchorDuotone";
var Anchor_default = AnchorDuotone;
