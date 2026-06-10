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
var Mandolin_exports = {};
__export(Mandolin_exports, {
  default: () => Mandolin_default
});
module.exports = __toCommonJS(Mandolin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MandolinSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.262 50.64L461.262 4.646C456.012 -0.603 447.887 -1.478 441.512 2.397L377.512 42.516C370.512 46.89 365.512 53.639 363.512 61.638L349.012 117.755L274.511 192.244C90.386 190.62 46.011 240.987 30.761 256.235C-16.114 303.104 -8.739 406.589 48.261 463.706C105.386 520.822 208.886 528.071 255.761 481.203C271.011 465.955 321.386 421.587 319.761 237.488L394.262 162.999L450.387 148.501C458.262 146.501 465.137 141.377 469.512 134.503L509.512 70.512C513.512 64.138 512.637 56.014 507.262 50.64ZM208.011 351.972C181.511 351.972 160.011 330.475 160.011 303.978C160.011 277.482 181.511 255.985 208.011 255.985S256.011 277.482 256.011 303.978C256.011 330.475 234.511 351.972 208.011 351.972Z" })
  }
));
MandolinSolid.displayName = "MandolinSolid";
var Mandolin_default = MandolinSolid;
