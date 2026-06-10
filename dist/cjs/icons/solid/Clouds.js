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
var Clouds_exports = {};
__export(Clouds_exports, {
  default: () => Clouds_default
});
module.exports = __toCommonJS(Clouds_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 320C543.375 320 542.875 320.25 542.375 320.25C543.5 315 544 309.625 544 304C544 259.75 508.25 224 464 224C439.375 224 417.75 235.25 403 252.75C384.375 216.875 347.25 192 304 192C242.125 192 192 242.125 192 304C192 311.25 192.75 318.25 194.125 325.25C155.75 337.75 128 373.5 128 416C128 469 171 512 224 512H544C597 512 640 469 640 416S597 320 544 320ZM304 160C344.75 160 382.625 177.25 409.375 206.5C419.25 200.875 429.875 197.125 441 194.75C445.25 183.875 448 172.375 448 160C448 107 405 64 352 64C337.875 64 324.625 67.25 312.5 72.75C296.625 30.25 256 0 208 0C151.625 0 105.25 41.875 97.625 96.25C97.125 96.25 96.625 96 96 96C43 96 0 139 0 192S43 288 96 288H161.625C169.75 216.25 230.125 160 304 160Z" })
  }
));
CloudsSolid.displayName = "CloudsSolid";
var Clouds_default = CloudsSolid;
