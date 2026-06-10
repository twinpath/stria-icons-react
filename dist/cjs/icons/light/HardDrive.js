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
var HardDrive_exports = {};
__export(HardDrive_exports, {
  default: () => HardDrive_default
});
module.exports = __toCommonJS(HardDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HardDriveLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V96C512 60.652 483.348 32 448 32ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V320C32 302.355 46.355 288 64 288H448C465.645 288 480 302.355 480 320V416ZM480 264.877C470.553 259.379 459.717 256 448 256H64C52.283 256 41.445 259.379 32 264.877V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V264.877ZM320 344C306.746 344 296 354.744 296 368C296 381.254 306.746 392 320 392C333.256 392 344 381.254 344 368C344 354.744 333.256 344 320 344ZM416 344C402.746 344 392 354.744 392 368C392 381.254 402.746 392 416 392C429.256 392 440 381.254 440 368C440 354.744 429.256 344 416 344Z" })
  }
));
HardDriveLight.displayName = "HardDriveLight";
var HardDrive_default = HardDriveLight;
