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
var FaceSadTear_exports = {};
__export(FaceSadTear_exports, {
  default: () => FaceSadTear_default
});
module.exports = __toCommonJS(FaceSadTear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSadTearThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 224C344.844 224 352 216.852 352 208S344.844 192 336 192S320 199.148 320 208S327.156 224 336 224ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM176 224C184.844 224 192 216.852 192 208S184.844 192 176 192S160 199.148 160 208S167.156 224 176 224ZM175.998 287.969C173.592 287.969 171.17 289.062 169.535 291.25C156.457 308.625 128 349 128 369C128 395 149.434 416 175.953 416S224.027 395 224.027 369C224.027 349 195.449 308.625 182.371 291.25C180.797 289.062 178.406 287.969 175.998 287.969ZM175.953 400C158.334 400 144 386.094 144 369C144 361.408 154.043 339.945 175.955 309.514C197.938 340.021 208.027 361.477 208.027 369C208.027 386.094 193.639 400 175.953 400ZM264.795 320.018C260.062 319.713 256 323.314 256 328.027V328.029C256 332.355 259.459 335.76 263.805 336.041C303.928 338.637 340.65 361.113 360.918 395.986C362.434 398.559 365.146 400 367.922 400C369.311 400 370.697 399.654 371.959 398.918C375.84 396.707 377.133 391.801 374.924 387.961C351.922 348.406 310.281 322.943 264.795 320.018Z" })
  }
));
FaceSadTearThin.displayName = "FaceSadTearThin";
var FaceSadTear_default = FaceSadTearThin;
