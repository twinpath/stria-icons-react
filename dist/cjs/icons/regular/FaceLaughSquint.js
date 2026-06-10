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
var FaceLaughSquint_exports = {};
__export(FaceLaughSquint_exports, {
  default: () => FaceLaughSquint_default
});
module.exports = __toCommonJS(FaceLaughSquint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughSquintRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M370.434 288H141.566C133.453 288 127.156 295 128.125 303C135.633 362.25 186.977 408 249.219 408H262.781C325.023 408 376.367 362.25 383.875 303C384.844 295 378.547 288 370.434 288ZM142.172 254.25L222.215 206.25C229.965 201.625 229.965 190.375 222.215 185.75L142.172 137.75C130.547 130.75 118.195 145.375 126.793 155.75L160.457 196L126.793 236.25C118.074 246.75 130.547 261.125 142.172 254.25ZM369.828 137.75L289.785 185.75C282.035 190.375 282.035 201.625 289.785 206.25L369.828 254.25C381.332 261.125 393.805 246.75 385.207 236.25L351.543 196L385.207 155.75C393.805 145.375 381.453 130.875 369.828 137.75ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceLaughSquintRegular.displayName = "FaceLaughSquintRegular";
var FaceLaughSquint_default = FaceLaughSquintRegular;
