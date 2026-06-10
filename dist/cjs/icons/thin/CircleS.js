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
var CircleS_exports = {};
__export(CircleS_exports, {
  default: () => CircleS_default
});
module.exports = __toCommonJS(CircleS_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M258.031 248.328C202.781 233.875 169.781 222.328 177 184.109C179.156 172.625 185.875 162.953 196.406 156.125C212.719 145.547 246.906 136.547 316.969 153.406C321.25 154.391 325.594 151.797 326.625 147.5S325 138.875 320.719 137.844C260.062 123.25 215.375 124.891 187.719 142.688C173.406 151.953 164.281 165.234 161.25 181.141C150.75 236.781 205.594 251.141 253.969 263.812C309.219 278.281 342.219 289.812 335 328.047C332.406 341.781 325.406 351.703 313.562 358.406C280.031 377.312 217.844 365.406 170.781 347.984C166.75 346.453 162.031 348.562 160.5 352.703S161.062 361.453 165.219 362.984C182 369.203 226.5 384.047 268.344 384.047C287.594 384.047 306.281 380.906 321.437 372.344C337.406 363.297 347.25 349.406 350.75 331.016C361.25 275.359 306.406 261 258.031 248.328ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
CircleSThin.displayName = "CircleSThin";
var CircleS_default = CircleSThin;
