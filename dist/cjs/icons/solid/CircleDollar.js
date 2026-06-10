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
var CircleDollar_exports = {};
__export(CircleDollar_exports, {
  default: () => CircleDollar_default
});
module.exports = __toCommonJS(CircleDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDollarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM342.766 314.281C337.43 342.689 313.729 361.406 280.047 366.811V384C280.047 397.25 269.297 408 256.047 408S232.047 397.25 232.047 384V365.941C217.934 363.5 203.547 358.984 190.703 354.703L184.516 352.656C171.922 348.516 165.047 334.969 169.172 322.375C173.281 309.766 186.781 302.922 199.453 307.031L205.875 309.156C218 313.203 231.766 317.781 242.953 319.344C270.719 323.297 293.328 317.359 295.578 305.437C297.375 295.828 293.75 290.766 249.797 279.156L241.203 276.875C216.484 270.156 158.578 254.453 169.203 197.719C174.557 169.279 198.316 150.605 232.047 145.223V128C232.047 114.75 242.797 104 256.047 104S280.047 114.75 280.047 128V145.998C289.02 147.564 298.912 149.982 311.281 153.938C323.906 157.969 330.875 171.469 326.844 184.094C322.844 196.734 309.344 203.766 296.688 199.656C285.156 195.984 276.063 193.688 268.875 192.641C241.266 188.734 218.625 194.641 216.391 206.562C215.062 213.625 213.922 219.734 253.766 230.547L262.047 232.75C296.25 241.781 353.5 256.891 342.766 314.281Z" })
  }
));
CircleDollarSolid.displayName = "CircleDollarSolid";
var CircleDollar_default = CircleDollarSolid;
