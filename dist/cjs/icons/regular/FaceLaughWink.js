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
var FaceLaughWink_exports = {};
__export(FaceLaughWink_exports, {
  default: () => FaceLaughWink_default
});
module.exports = __toCommonJS(FaceLaughWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughWinkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M370.434 288H141.566C133.453 288 127.156 295 128.125 303C135.633 362.25 186.977 408 249.219 408H262.781C325.023 408 376.367 362.25 383.875 303C384.844 295 378.547 288 370.434 288ZM175.957 224C193.758 224 208.047 209.75 208.047 192S193.758 160 175.957 160C158.277 160 143.988 174.25 143.988 192S158.277 224 175.957 224ZM336.043 164C310.25 164 280.098 180.875 276.102 206.125C274.406 217.25 287.605 224.25 295.84 216.875L305.406 208.375C320.18 195.25 351.543 195.25 366.438 208.375L375.883 216.875C384.359 224.25 397.559 217.25 395.742 206.125C391.867 180.875 361.715 164 336.043 164ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceLaughWinkRegular.displayName = "FaceLaughWinkRegular";
var FaceLaughWink_default = FaceLaughWinkRegular;
