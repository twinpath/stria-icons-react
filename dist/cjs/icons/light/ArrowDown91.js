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
var ArrowDown91_exports = {};
__export(ArrowDown91_exports, {
  default: () => ArrowDown91_default
});
module.exports = __toCommonJS(ArrowDown91_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDown91Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 448H400V304C400 295.156 392.844 288 384 288H352C343.156 288 336 295.156 336 304S343.156 320 352 320H368V448H336C327.156 448 320 455.156 320 464S327.156 480 336 480H432C440.844 480 448 472.844 448 464S440.844 448 432 448ZM384 32C339.875 32 304 67.875 304 112S339.875 192 384 192C400.734 192 416.254 186.801 429.107 177.988C421.275 204.484 396.994 224 368 224C359.156 224 352 231.156 352 240S359.156 256 368 256C420.937 256 464 212.938 464 160V112C464 67.875 428.125 32 384 32ZM384 160C357.531 160 336 138.469 336 112S357.531 64 384 64S432 85.531 432 112S410.469 160 384 160ZM224 352C219.906 352 215.812 353.562 212.687 356.688L144 425.375V48C144 39.156 136.844 32 128 32S112 39.156 112 48V425.375L43.312 356.688C37.062 350.438 26.937 350.438 20.687 356.688S14.437 373.063 20.687 379.312L116.687 475.312C122.937 481.562 133.063 481.562 139.312 475.312L235.312 379.312C241.562 373.062 241.562 362.937 235.312 356.688C232.187 353.562 228.094 352 224 352Z" })
  }
));
ArrowDown91Light.displayName = "ArrowDown91Light";
var ArrowDown91_default = ArrowDown91Light;
