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
const FaceSadTearLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M335.955 232C349.293 232 360 221.312 360 208S349.293 184 335.955 184C322.707 184 312 194.688 312 208S322.707 232 335.955 232ZM175.955 232C189.293 232 200 221.312 200 208S189.293 184 175.955 184C162.707 184 152 194.688 152 208S162.707 232 175.955 232ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM184.016 256H184C178.578 256 173.531 258.734 170.578 263.281C154.688 287.75 128 332.266 128 355.375C128 388.797 153.125 416 184 416S240 388.797 240 355.375C240 332.484 213.328 287.859 197.438 263.297C194.484 258.75 189.438 256 184.016 256ZM184 384C170.766 384 160 371.156 160 355.375C160 350 166.734 331.672 183.984 302.375C201.25 331.781 208 350.062 208 355.375C208 370.891 197.016 384 184 384ZM290.328 320H272C263.156 320 256 327.156 256 336S263.156 352 272 352H290.328C318.078 352 343.547 362.047 355.203 377.594C358.344 381.797 363.141 384 368.016 384C371.359 384 374.719 382.953 377.594 380.797C384.672 375.5 386.109 365.469 380.797 358.406C363.047 334.719 328.375 320 290.328 320Z" })
  }
));
FaceSadTearLight.displayName = "FaceSadTearLight";
var FaceSadTear_default = FaceSadTearLight;
