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
const RoadSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.163 415.855L447.448 63.855C440.626 44.752 422.53 32 402.245 32H319.999V112C319.999 120.836 312.837 128 303.999 128H271.999C263.163 128 255.999 120.836 255.999 112V32H173.755C153.47 32 135.374 44.752 128.552 63.855L2.837 415.855C-8.327 447.115 14.847 480 48.04 480H255.999V400C255.999 391.164 263.163 384 271.999 384H303.999C312.837 384 319.999 391.164 319.999 400V480H527.958C561.153 480 584.327 447.115 573.163 415.855ZM319.999 304C319.999 312.836 312.837 320 303.999 320H271.999C263.163 320 255.999 312.836 255.999 304V208C255.999 199.164 263.163 192 271.999 192H303.999C312.837 192 319.999 199.164 319.999 208V304Z" })
  }
));
RoadSolid.displayName = "RoadSolid";
var Road_default = RoadSolid;
