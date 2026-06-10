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
var CameraViewfinder_exports = {};
__export(CameraViewfinder_exports, {
  default: () => CameraViewfinder_default
});
module.exports = __toCommonJS(CameraViewfinder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraViewfinderLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 320C487.156 320 480 327.156 480 336V432C480 440.812 472.828 448 464 448H368C359.156 448 352 455.156 352 464S359.156 480 368 480H464C490.469 480 512 458.469 512 432V336C512 327.156 504.844 320 496 320ZM144 448H48C39.172 448 32 440.812 32 432V336C32 327.156 24.844 320 16 320S0 327.156 0 336V432C0 458.469 21.531 480 48 480H144C152.844 480 160 472.844 160 464S152.844 448 144 448ZM464 32H368C359.156 32 352 39.156 352 48S359.156 64 368 64H464C472.828 64 480 71.188 480 80V176C480 184.844 487.156 192 496 192S512 184.844 512 176V80C512 53.531 490.469 32 464 32ZM16 192C24.844 192 32 184.844 32 176V80C32 71.188 39.172 64 48 64H144C152.844 64 160 56.844 160 48S152.844 32 144 32H48C21.531 32 0 53.531 0 80V176C0 184.844 7.156 192 16 192ZM256 224C238.334 224 224 238.334 224 256S238.334 288 256 288S288 273.666 288 256S273.666 224 256 224ZM384 304V208C384 181.49 362.51 160 336 160H316L309.812 143.562C306.312 134.188 297.375 128 287.375 128H224.625C214.625 128 205.625 134.188 202.125 143.562L196 160H176C149.49 160 128 181.49 128 208V304C128 330.51 149.49 352 176 352H336C362.51 352 384 330.51 384 304ZM352 304C352 312.822 344.822 320 336 320H176C167.178 320 160 312.822 160 304V208C160 199.178 167.178 192 176 192H218.225L230.15 160H281.809L293.854 192H336C344.822 192 352 199.178 352 208V304Z" })
  }
));
CameraViewfinderLight.displayName = "CameraViewfinderLight";
var CameraViewfinder_default = CameraViewfinderLight;
