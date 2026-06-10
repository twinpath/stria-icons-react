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
var Ruler_exports = {};
__export(Ruler_exports, {
  default: () => Ruler_default
});
module.exports = __toCommonJS(Ruler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 353.941C0 366.225 4.686 378.51 14.059 387.882L124.118 497.941C133.49 507.314 145.775 512 158.059 512S182.627 507.314 192 497.941L497.941 195.078C507.314 185.705 512 173.421 512 161.137C512 148.853 507.314 136.568 497.941 127.196L387.882 14.059C378.51 4.686 366.225 0 353.941 0S329.373 4.686 320 14.059L14.059 320C4.686 329.373 0 341.657 0 353.941ZM74.981 301.255L120.236 346.51C123.362 349.636 127.456 351.2 131.549 351.2C140.67 351.2 147.553 343.739 147.553 335.196C147.553 331.102 145.99 327.009 142.863 323.882L97.608 278.627L142.863 233.373L188.118 278.627C191.245 281.754 195.338 283.317 199.432 283.317C207.973 283.317 215.435 276.43 215.435 267.314C215.435 263.22 213.872 259.127 210.745 256L165.49 210.745L210.745 165.49L256 210.745C259.127 213.872 263.22 215.435 267.314 215.435C276.434 215.435 283.317 207.975 283.317 199.432C283.317 195.338 281.754 191.245 278.627 188.118L233.373 142.863L278.627 97.608L323.882 142.863C327.009 145.99 331.102 147.553 335.196 147.553C344.316 147.553 351.2 140.093 351.2 131.549C351.2 127.456 349.636 123.362 346.51 120.236L301.255 74.981L342.627 36.686C345.747 33.567 349.844 32.008 353.941 32.008S362.136 33.567 365.255 36.686L475.314 149.823C478.433 152.942 479.992 157.04 479.992 161.137C479.992 165.234 478.433 169.331 475.314 172.451L169.373 475.314C166.253 478.433 162.156 479.992 158.059 479.992S149.864 478.433 146.745 475.314L36.686 365.255C33.567 362.136 32.008 358.038 32.008 353.941S33.567 345.747 36.686 342.627L74.981 301.255Z " })
  }
));
RulerLight.displayName = "RulerLight";
var Ruler_default = RulerLight;
