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
var FaceLaughBeam_exports = {};
__export(FaceLaughBeam_exports, {
  default: () => FaceLaughBeam_default
});
module.exports = __toCommonJS(FaceLaughBeam_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughBeamRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.473 210.875C152.223 197.25 163.727 189.25 175.957 189.25C188.309 189.25 199.812 197.25 207.441 210.875L217.008 227.875C221.125 235.25 232.629 231.875 231.902 223.375C228.633 181.25 199.691 152 175.957 152C152.102 152 123.16 181.25 119.891 223.375C119.285 231.875 130.789 235.25 135.027 227.875L144.473 210.875ZM370.434 288H141.566C133.453 288 127.156 295 128.125 303C135.633 362.25 186.977 408 249.219 408H262.781C325.023 408 376.367 362.25 383.875 303C384.844 295 378.547 288 370.434 288ZM336.043 152C312.188 152 283.246 181.25 279.977 223.375C279.25 232 290.754 235.25 294.871 227.875L304.438 210.875C312.066 197.25 323.57 189.25 335.922 189.25C348.152 189.25 359.656 197.25 367.406 210.875L376.852 227.875C380.969 235.25 392.473 231.875 391.746 223.375C388.719 181.25 359.777 152 336.043 152ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceLaughBeamRegular.displayName = "FaceLaughBeamRegular";
var FaceLaughBeam_default = FaceLaughBeamRegular;
