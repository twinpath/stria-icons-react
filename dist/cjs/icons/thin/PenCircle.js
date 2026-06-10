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
var PenCircle_exports = {};
__export(PenCircle_exports, {
  default: () => PenCircle_default
});
module.exports = __toCommonJS(PenCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenCircleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M361.365 138.545C354.34 131.518 345.123 128 335.908 128C326.697 128 317.488 131.512 310.459 138.543L149.676 299.342C145.377 303.641 142.41 309.029 141.08 314.963C136.869 333.742 128.166 374.586 128.166 374.586C127.082 380.014 131.406 383.996 135.943 383.996C136.441 383.996 136.941 383.949 137.437 383.85C137.437 383.85 178.277 375.143 197.053 370.93C202.986 369.6 208.373 366.633 212.672 362.334L373.455 201.553C387.514 187.496 387.516 164.703 373.459 150.643L361.365 138.545ZM201.359 351.02C199.211 353.168 196.512 354.654 193.551 355.316C181.387 358.047 159.939 362.666 146.459 365.559C149.359 352.016 153.969 330.609 156.693 318.461C157.357 315.502 158.842 312.803 160.99 310.654L286.16 185.473L326.533 225.846L201.359 351.02ZM362.141 190.238L337.846 214.533L297.473 174.16L321.775 149.855C325.549 146.078 330.568 144 335.908 144C341.252 144 346.273 146.08 350.051 149.857L362.145 161.955C369.941 169.754 369.939 182.441 362.141 190.238ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
PenCircleThin.displayName = "PenCircleThin";
var PenCircle_default = PenCircleThin;
