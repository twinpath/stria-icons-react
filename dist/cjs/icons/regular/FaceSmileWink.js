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
var FaceSmileWink_exports = {};
__export(FaceSmileWink_exports, {
  default: () => FaceSmileWink_default
});
module.exports = __toCommonJS(FaceSmileWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSmileWinkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M340.039 312.75C319.211 337.75 288.453 352.125 256 352.125S192.789 337.75 171.961 312.75C163.484 302.5 148.348 301.25 138.176 309.625C128.004 318.125 126.672 333.25 135.148 343.375C165.059 379.375 209.258 400 256 400S346.941 379.375 376.852 343.375C385.449 333.25 383.996 318.125 373.824 309.625S348.516 302.5 340.039 312.75ZM175.957 240C193.758 240 208.047 225.75 208.047 208S193.758 176 175.957 176C158.277 176 143.988 190.25 143.988 208S158.277 240 175.957 240ZM336.043 180C310.25 180 280.098 196.875 276.102 222.125C274.406 233.25 287.605 240.25 295.84 232.875L305.406 224.375C320.18 211.25 351.543 211.25 366.438 224.375L375.883 232.875C384.359 240.25 397.559 233.25 395.742 222.125C391.867 196.875 361.715 180 336.043 180ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceSmileWinkRegular.displayName = "FaceSmileWinkRegular";
var FaceSmileWink_default = FaceSmileWinkRegular;
