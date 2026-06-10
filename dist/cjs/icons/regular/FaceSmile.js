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
var FaceSmile_exports = {};
__export(FaceSmile_exports, {
  default: () => FaceSmile_default
});
module.exports = __toCommonJS(FaceSmile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSmileRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.957 240C193.758 240 208.047 225.75 208.047 208S193.758 176 175.957 176C158.277 176 143.988 190.25 143.988 208S158.277 240 175.957 240ZM336.043 240C353.723 240 368.012 225.75 368.012 208S353.723 176 336.043 176C318.242 176 303.953 190.25 303.953 208S318.242 240 336.043 240ZM340.039 312.625C319.211 337.625 288.453 352 256 352S192.789 337.75 171.961 312.625C163.484 302.375 148.348 301.125 138.176 309.5C128.004 318 126.672 333.125 135.148 343.25C165.059 379.25 209.258 399.875 256 399.875S346.941 379.25 376.852 343.25C385.449 333.125 383.996 318 373.824 309.5C363.652 301.125 348.516 302.375 340.039 312.625ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceSmileRegular.displayName = "FaceSmileRegular";
var FaceSmile_default = FaceSmileRegular;
