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
var Road_exports = {};
__export(Road_exports, {
  default: () => Road_default
});
module.exports = __toCommonJS(Road_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RoadLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.163 415.855L447.448 63.855C440.626 44.752 422.53 32 402.245 32H173.755C153.47 32 135.374 44.752 128.552 63.855L2.837 415.855C-8.327 447.115 14.847 480 48.04 480H527.958C561.153 480 584.327 447.115 573.163 415.855ZM541.038 441.217C539.253 443.75 535.181 448 527.958 448H303.999V400C303.999 391.156 296.843 384 287.999 384S271.999 391.156 271.999 400V448H48.04C40.821 448 36.747 443.75 34.962 441.217S30.544 433.418 32.974 426.619L158.689 74.617C160.956 68.268 167.011 64 173.755 64H271.999V112C271.999 120.844 279.155 128 287.999 128S303.999 120.844 303.999 112V64H402.245C408.989 64 415.046 68.268 417.314 74.619L543.028 426.617C545.456 433.418 542.823 438.684 541.038 441.217ZM287.999 192C279.155 192 271.999 199.156 271.999 208V304C271.999 312.844 279.155 320 287.999 320S303.999 312.844 303.999 304V208C303.999 199.156 296.843 192 287.999 192Z" })
  }
));
RoadLight.displayName = "RoadLight";
var Road_default = RoadLight;
