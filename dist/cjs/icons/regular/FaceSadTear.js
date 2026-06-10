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
const FaceSadTearRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170.387 274.75C159.004 290.125 134.059 325.375 134.059 342.875C134.059 365.625 152.828 384 175.957 384C199.207 384 217.977 365.625 217.977 342.875C217.977 325.375 193.031 290.125 181.648 274.75C178.742 271.125 173.172 271.125 170.387 274.75ZM175.957 240C193.758 240 208.047 225.75 208.047 208S193.758 176 175.957 176C158.277 176 143.988 190.25 143.988 208S158.277 240 175.957 240ZM263.992 304C250.793 304 240.016 314.75 240.016 328S250.793 352 263.992 352C287.848 352 310.25 362.5 325.629 380.75C333.742 390.625 348.758 392.75 359.414 383.875C369.586 375.375 371.039 360.25 362.441 350.125C337.98 320.75 302.137 304 263.992 304ZM336.043 176C318.242 176 303.953 190.25 303.953 208S318.242 240 336.043 240C353.723 240 368.012 225.75 368.012 208S353.723 176 336.043 176ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceSadTearRegular.displayName = "FaceSadTearRegular";
var FaceSadTear_default = FaceSadTearRegular;
