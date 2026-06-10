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
var FaceMehBlank_exports = {};
__export(FaceMehBlank_exports, {
  default: () => FaceMehBlank_default
});
module.exports = __toCommonJS(FaceMehBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceMehBlankDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240ZM336.043 240C318.242 240 303.953 225.75 303.953 208S318.242 176 336.043 176C353.723 176 368.012 190.25 368.012 208S353.723 240 336.043 240Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.969 240C158.289 240 144 225.75 144 208S158.289 176 175.969 176C193.77 176 208.059 190.25 208.059 208S193.77 240 175.969 240ZM336.055 240C318.254 240 303.965 225.75 303.965 208S318.254 176 336.055 176C353.734 176 368.023 190.25 368.023 208S353.734 240 336.055 240Z" })
    ]
  }
));
FaceMehBlankDuotone.displayName = "FaceMehBlankDuotone";
var FaceMehBlank_default = FaceMehBlankDuotone;
