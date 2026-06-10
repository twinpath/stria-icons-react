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
var CloudRain_exports = {};
__export(CloudRain_exports, {
  default: () => CloudRain_default
});
module.exports = __toCommonJS(CloudRain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudRainRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M410.75 104.25C397.25 61.75 358 32 312 32C298.5 32 285.25 34.625 272.75 39.75C250.25 14.5 218.375 0 184 0C120 0 67.625 50.25 64.25 113.375C25.625 130.375 0 168.5 0 212C0 271.5 48.375 320 108 320H404C463.625 320 512 271.5 512 212C512 154.75 467.125 107.75 410.75 104.25ZM404 272H108C74.875 272 48 245.125 48 212C48 184 67.125 160 94.375 153.75L115.25 148.875L112.375 124C112.25 122.75 112 121.375 112 120C112 80.25 144.25 48 184 48C209.25 48 232.25 61.125 245.375 83.125L258.75 105.25L279.75 90.25C289.375 83.625 300.5 80 312 80C340.625 80 364.375 101.75 367.25 130.375L369.5 152H404C437.125 152 464 178.875 464 212S437.125 272 404 272ZM368 464C368 490.51 389.49 512 416 512S464 490.51 464 464S416 368 416 368S368 437.49 368 464ZM48 464C48 490.51 69.49 512 96 512S144 490.51 144 464S96 368 96 368S48 437.49 48 464ZM208 464C208 490.51 229.49 512 256 512S304 490.51 304 464S256 368 256 368S208 437.49 208 464Z" })
  }
));
CloudRainRegular.displayName = "CloudRainRegular";
var CloudRain_default = CloudRainRegular;
