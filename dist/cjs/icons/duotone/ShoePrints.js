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
var ShoePrints_exports = {};
__export(ShoePrints_exports, {
  default: () => ShoePrints_default
});
module.exports = __toCommonJS(ShoePrints_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShoePrintsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 415.979C0 451.352 28.625 479.975 64 479.975H96V351.982H64C28.625 351.982 0 380.606 0 415.979ZM337.5 287.986C302.5 287.986 261.25 301.11 232.75 319.984C208 336.358 188.25 351.982 128 351.982V479.975L185.5 495.974C211.75 503.224 238.5 509.098 265.875 510.973C298.5 513.348 331.5 511.723 363.375 504.848C472.875 481.225 512 429.228 512 383.98C512 319.984 427.875 287.986 337.5 287.986Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 95.997C128 131.37 156.625 159.994 192 159.994H224V32.001H192C156.625 32.001 128 60.624 128 95.997ZM491.375 7.252C459.5 0.378 426.5 -1.372 393.875 1.003C366.5 2.878 339.75 8.752 313.5 16.002L256 32.001V159.994C316.25 159.994 336 175.618 360.75 191.992C389.25 210.866 430.5 223.99 465.5 223.99C555.875 223.99 640 191.992 640 127.995C640 82.748 600.875 30.751 491.375 7.252Z" })
    ]
  }
));
ShoePrintsDuotone.displayName = "ShoePrintsDuotone";
var ShoePrints_default = ShoePrintsDuotone;
