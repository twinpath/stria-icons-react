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
var FaceGrinSquint_exports = {};
__export(FaceGrinSquint_exports, {
  default: () => FaceGrinSquint_default
});
module.exports = __toCommonJS(FaceGrinSquint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinSquintRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M361.594 304.625C335.68 312.875 297.172 317.75 256 317.75S176.441 312.875 150.406 304.625C140.477 301.5 131.031 310 132.727 319.875C140.598 367 204.051 399.875 256 399.875S371.281 367 379.273 319.875C380.848 310.125 371.645 301.5 361.594 304.625ZM142.172 266.25L222.215 218.25C225.848 216.125 228.027 212.25 228.027 208S225.848 199.875 222.215 197.75L142.172 149.75C137.086 146.75 130.789 147.75 126.914 152.25C123.16 156.75 123.16 163.25 126.793 167.75L160.457 208L126.793 248.25C123.039 252.75 123.16 259.375 126.914 263.75C130.547 268 136.844 269.5 142.172 266.25ZM385.086 152.25C381.332 147.75 374.914 146.75 369.828 149.75L289.785 197.75C286.152 199.875 283.973 203.75 283.973 208S286.152 216.125 289.785 218.25L369.828 266.25C375.156 269.5 381.453 268 385.086 263.75C388.84 259.25 388.84 252.75 385.207 248.25L351.543 208L385.207 167.75C388.961 163.25 388.84 156.75 385.086 152.25ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceGrinSquintRegular.displayName = "FaceGrinSquintRegular";
var FaceGrinSquint_default = FaceGrinSquintRegular;
