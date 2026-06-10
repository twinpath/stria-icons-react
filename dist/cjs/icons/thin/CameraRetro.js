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
var CameraRetro_exports = {};
__export(CameraRetro_exports, {
  default: () => CameraRetro_default
});
module.exports = __toCommonJS(CameraRetro_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRetroThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H303.107C293.172 32 283.373 34.312 274.486 38.756L192 80H48C21.49 80 0 101.49 0 128V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V80C512 53.49 490.51 32 464 32ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V240H137.492C131.473 254.844 128 270.998 128 288C128 358.691 185.307 416 256 416S384 358.691 384 288C384 270.998 380.527 254.844 374.508 240H496V432ZM144 288C144 226.242 194.242 176 256 176S368 226.242 368 288S317.758 400 256 400S144 349.758 144 288ZM496 224H366.248C344.074 185.9 303.258 160 256 160S167.926 185.9 145.752 224H16V128C16 110.355 30.355 96 48 96H195.777L281.641 53.068C288.273 49.752 295.695 48 303.107 48H464C481.645 48 496 62.355 496 80V224ZM72 48H152C156.422 48 160 44.422 160 40S156.422 32 152 32H72C67.578 32 64 35.578 64 40S67.578 48 72 48Z" })
  }
));
CameraRetroThin.displayName = "CameraRetroThin";
var CameraRetro_default = CameraRetroThin;
