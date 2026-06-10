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
var LocationCrosshairs_exports = {};
__export(LocationCrosshairs_exports, {
  default: () => LocationCrosshairs_default
});
module.exports = __toCommonJS(LocationCrosshairs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCrosshairsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 160C203 160 160 203 160 256S203 352 256 352S352 309 352 256S309 160 256 160ZM256 320C220.75 320 192 291.25 192 256S220.75 192 256 192S320 220.75 320 256S291.25 320 256 320ZM496 240H447.25C439.5 146.75 365.25 72.5 272 64.75V16C272 7.199 264.801 0 256 0C247.201 0 240 7.199 240 16V64.75C146.75 72.5 72.5 146.75 64.75 240H16C7.201 240 0 247.199 0 256C0 264.799 7.201 272 16 272H64.75C72.5 365.25 146.75 439.5 240 447.25V496C240 504.799 247.201 512 256 512C264.801 512 272 504.799 272 496V447.25C365.25 439.5 439.5 365.25 447.25 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240ZM256 416C167.75 416 96 344.25 96 256S167.75 96 256 96S416 167.75 416 256S344.25 416 256 416Z" })
  }
));
LocationCrosshairsLight.displayName = "LocationCrosshairsLight";
var LocationCrosshairs_default = LocationCrosshairsLight;
