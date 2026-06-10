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
var SpaceStationMoon_exports = {};
__export(SpaceStationMoon_exports, {
  default: () => SpaceStationMoon_default
});
module.exports = __toCommonJS(SpaceStationMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaceStationMoonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM192 128C209.645 128 224 142.355 224 160S209.645 192 192 192S160 177.645 160 160S174.355 128 192 128ZM125.498 115.572C116.988 128.283 112 143.553 112 160C112 204.182 147.818 240 192 240C236.184 240 272 204.182 272 160C272 115.816 236.184 80 192 80C186.586 80 181.305 80.568 176.191 81.594C200.533 70.408 227.504 64 256 64C361.869 64 448 150.131 448 256C448 262.303 447.65 268.525 447.055 274.674C389.396 303.418 324.691 320 256 320S122.604 303.418 64.945 274.674C64.35 268.525 64 262.303 64 256C64 200.543 87.773 150.654 125.498 115.572ZM256 448C177.914 448 110.691 401.074 80.721 334C135.078 355.529 193.973 368 256 368S376.922 355.529 431.279 334C401.309 401.074 334.086 448 256 448Z" })
  }
));
SpaceStationMoonRegular.displayName = "SpaceStationMoonRegular";
var SpaceStationMoon_default = SpaceStationMoonRegular;
