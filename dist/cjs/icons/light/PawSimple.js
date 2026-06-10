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
var PawSimple_exports = {};
__export(PawSimple_exports, {
  default: () => PawSimple_default
});
module.exports = __toCommonJS(PawSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PawSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.25 300.75C341 286.001 320.125 239.375 300.125 203C284.375 174.25 254.25 160 224 160S163.625 174.25 147.875 203C127.5 239.875 107.75 285.5 80.625 300.75C51.625 317.125 32 348.125 32 384C32 437 75 479.875 128 479.875C129.25 480 130.625 480 131.875 480C180.75 480 200.75 448 224 448S267.25 480 316.125 480C317.375 480 318.75 480 320 479.875C373 479.875 416 437 416 384C416 348.125 396.375 317.125 367.25 300.75ZM318.875 448H316.125C296 448 283.125 440.25 269.375 432.125C256.75 424.5 242.25 416 224 416S191.375 424.5 178.625 432.125C164.875 440.25 152 448 131.875 448L128 447.875C92.75 447.875 64 419.25 64 384C64 361.125 76.375 339.875 96.375 328.625C126.875 311.5 146.5 274.125 165.375 238.125C168.875 231.375 172.375 224.75 175.875 218.375C185 201.875 203 192 224 192S263 201.875 272.125 218.375C275.375 224.375 278.75 230.625 282.125 237.125C301.5 273.75 321.625 311.75 351.625 328.625C371.625 339.875 384 361.125 384 384C384 419.25 355.25 447.875 318.875 448ZM112 200C112 169.125 86.875 144 56 144S0 169.125 0 200S25.125 256 56 256S112 230.875 112 200ZM32 200C32 186.75 42.75 176 56 176S80 186.75 80 200S69.25 224 56 224S32 213.25 32 200ZM392 144C361.125 144 336 169.125 336 200S361.125 256 392 256S448 230.875 448 200S422.875 144 392 144ZM392 224C378.75 224 368 213.25 368 200S378.75 176 392 176S416 186.75 416 200S405.25 224 392 224ZM296 144C326.875 144 352 118.875 352 88S326.875 32 296 32S240 57.125 240 88S265.125 144 296 144ZM296 64C309.25 64 320 74.75 320 88S309.25 112 296 112S272 101.25 272 88S282.75 64 296 64ZM152 144C182.875 144 208 118.875 208 88S182.875 32 152 32S96 57.125 96 88S121.125 144 152 144ZM152 64C165.25 64 176 74.75 176 88S165.25 112 152 112C138.75 112 128 101.25 128 88S138.75 64 152 64Z" })
  }
));
PawSimpleLight.displayName = "PawSimpleLight";
var PawSimple_default = PawSimpleLight;
