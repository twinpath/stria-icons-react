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
var CloudShowersHeavy_exports = {};
__export(CloudShowersHeavy_exports, {
  default: () => CloudShowersHeavy_default
});
module.exports = __toCommonJS(CloudShowersHeavy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudShowersHeavyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.694 112.219C407.162 66.75 367.569 32 320.006 32C301.037 32 282.912 37.469 267.412 47.688C246.694 18.219 212.6 0 176.006 0C114.256 0 64.006 50.25 64.006 112C64.006 114.719 64.1 117.438 64.319 120.188C25.85 136.062 0.006 173.656 0.006 216C0.006 273.344 46.662 320 104.006 320H408.006C465.35 320 512.006 273.344 512.006 216C512.006 160.906 468.944 115.688 414.694 112.219ZM408.006 288H104.006C64.319 288 32.006 255.688 32.006 216C32.006 183.406 54.194 154.875 85.975 146.625C94.194 144.469 99.319 136.281 97.631 127.969C96.569 122.781 96.006 117.469 96.006 112C96.006 67.875 131.881 32 176.006 32C206.975 32 235.412 50.312 248.475 78.625C250.662 83.406 255.069 86.812 260.256 87.687C265.444 88.781 270.725 86.937 274.412 83.156C286.569 70.812 302.756 64 320.006 64C355.287 64 384.006 92.719 384.006 128C384.006 136.844 391.162 144 400.006 144H408.006C447.694 144 480.006 176.312 480.006 216S447.694 288 408.006 288ZM439.162 353.688C431.24 349.719 421.662 352.969 417.694 360.844L353.694 488.844C349.74 496.75 352.944 506.344 360.85 510.312C363.147 511.469 365.584 512 367.99 512C373.865 512 379.506 508.75 382.319 503.156L446.319 375.156C450.272 367.25 447.069 357.656 439.162 353.688ZM321.834 353.688C313.912 349.719 304.334 352.969 300.365 360.844L236.365 488.844C232.412 496.75 235.615 506.344 243.522 510.312C245.819 511.469 248.256 512 250.662 512C256.537 512 262.178 508.75 264.99 503.156L328.99 375.156C332.944 367.25 329.74 357.656 321.834 353.688ZM204.49 353.688C196.569 349.719 186.99 352.969 183.022 360.844L119.022 488.844C115.069 496.75 118.272 506.344 126.178 510.312C128.475 511.469 130.912 512 133.319 512C139.194 512 144.834 508.75 147.647 503.156L211.647 375.156C215.6 367.25 212.397 357.656 204.49 353.688ZM87.162 353.688C79.24 349.719 69.662 352.969 65.694 360.844L1.694 488.844C-2.26 496.75 0.944 506.344 8.85 510.312C11.147 511.469 13.584 512 15.99 512C21.865 512 27.506 508.75 30.319 503.156L94.319 375.156C98.272 367.25 95.069 357.656 87.162 353.688Z" })
  }
));
CloudShowersHeavyLight.displayName = "CloudShowersHeavyLight";
var CloudShowersHeavy_default = CloudShowersHeavyLight;
