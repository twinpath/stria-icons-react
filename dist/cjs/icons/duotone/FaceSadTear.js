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
const FaceSadTearDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM336.043 176C353.723 176 368.012 190.25 368.012 208S353.723 240 336.043 240C318.242 240 303.953 225.75 303.953 208S318.242 176 336.043 176ZM159.973 416C133.453 416 112.02 395 112.02 369C112.02 349 140.477 308.625 153.555 291.25C156.824 286.875 163.242 286.875 166.391 291.25C179.469 308.625 208.047 349 208.047 369C208.047 395 186.492 416 159.973 416ZM175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240ZM346.215 394.25C323.812 367.375 290.875 352 256 352C234.809 352 234.809 320 256 320C300.441 320 342.34 339.625 370.676 373.75C384.48 390.25 359.535 410.25 346.215 394.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.023 176C318.223 176 303.934 190.25 303.934 208S318.223 240 336.023 240C353.703 240 367.992 225.75 367.992 208S353.703 176 336.023 176ZM153.535 291.25C140.457 308.625 112 349 112 369C112 395 133.434 416 159.953 416S208.027 395 208.027 369C208.027 349 179.449 308.625 166.371 291.25C163.223 286.875 156.805 286.875 153.535 291.25ZM175.937 176C158.258 176 143.969 190.25 143.969 208S158.258 240 175.937 240C193.738 240 208.027 225.75 208.027 208S193.738 176 175.937 176Z" })
    ]
  }
));
FaceSadTearDuotone.displayName = "FaceSadTearDuotone";
var FaceSadTear_default = FaceSadTearDuotone;
