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
var DiscDrive_exports = {};
__export(DiscDrive_exports, {
  default: () => DiscDrive_default
});
module.exports = __toCommonJS(DiscDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiscDriveLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 224C238.375 224 224 238.375 224 256S238.375 288 256 288C273.625 288 288 273.625 288 256S273.625 224 256 224ZM496 448H480V96C480 60.654 451.346 32 416 32H96C60.654 32 32 60.654 32 96V448H16C7.2 448 0 455.2 0 464V464C0 472.8 7.2 480 16 480H496C504.8 480 512 472.8 512 464V464C512 455.2 504.8 448 496 448ZM448 448H64V96C64 78.375 78.375 64 96 64H416C433.625 64 448 78.375 448 96V448ZM256 96C167.625 96 96 167.625 96 256S167.625 416 256 416S416 344.375 416 256S344.375 96 256 96ZM256 384C185.25 384 128 326.75 128 256S185.25 128 256 128S384 185.25 384 256C383.875 326.625 326.625 383.875 256 384Z" })
  }
));
DiscDriveLight.displayName = "DiscDriveLight";
var DiscDrive_default = DiscDriveLight;
