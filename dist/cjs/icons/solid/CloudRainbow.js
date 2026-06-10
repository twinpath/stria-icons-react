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
var CloudRainbow_exports = {};
__export(CloudRainbow_exports, {
  default: () => CloudRainbow_default
});
module.exports = __toCommonJS(CloudRainbow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudRainbowSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M430.75 304.875C440.75 310.5 449.75 317.25 457.75 325.25C487.125 292.75 529 272 576 272V208C515 208 459.75 232.625 419.25 272.25C424.875 282.25 429 293.25 430.75 304.875ZM399.25 325.625C399.375 323.75 400 321.875 400 320C400 284.75 371.25 256 336 256C323.375 256 311.75 259.75 301.875 266C284.25 227.125 245.375 200 200 200C138.125 200 88 250.125 88 312C88 315 88.75 317.75 88.875 320.75C39.25 324.375 0 365.375 0 416C0 469 43 512 96 512H368C421 512 464 469 464 416C464 374 436.75 338.625 399.25 325.625ZM238.625 173.625C259.625 179.5 279 190.125 295.25 204.625C359.625 119.375 461.25 64 576 64V0C437.125 0 314.25 68.75 238.625 173.625ZM325.75 225.125C333.25 224.25 362.5 219.75 394.25 244C440.625 197.25 504.875 168 576 168V104C474.75 104 384.375 151.375 325.75 225.125Z" })
  }
));
CloudRainbowSolid.displayName = "CloudRainbowSolid";
var CloudRainbow_default = CloudRainbowSolid;
