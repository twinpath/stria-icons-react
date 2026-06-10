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
var CircleHeart_exports = {};
__export(CircleHeart_exports, {
  default: () => CircleHeart_default
});
module.exports = __toCommonJS(CircleHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleHeartDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM379.5 280.25L268.875 394.5C261.75 401.875 250.25 401.875 243 394.5L132.5 280.25C100.375 247.125 102.25 192.125 138.25 161.5C169.5 134.75 216.125 139.625 244.75 169.25L256.125 180.75L267.375 169.25C296.125 139.625 342.75 134.75 373.999 161.5C409.75 192.125 411.75 247.125 379.5 280.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.752 280.25L269.127 394.5C262.002 401.875 250.502 401.875 243.252 394.5L132.752 280.25C100.627 247.125 102.502 192.125 138.502 161.5C169.752 134.75 216.377 139.625 245.002 169.25L256.377 180.75L267.627 169.25C296.377 139.625 343.002 134.75 374.251 161.5C410.002 192.125 412.002 247.125 379.752 280.25Z" })
    ]
  }
));
CircleHeartDuotone.displayName = "CircleHeartDuotone";
var CircleHeart_default = CircleHeartDuotone;
