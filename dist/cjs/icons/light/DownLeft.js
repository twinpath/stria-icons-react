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
var DownLeft_exports = {};
__export(DownLeft_exports, {
  default: () => DownLeft_default
});
module.exports = __toCommonJS(DownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.627 157.258L306.746 89.375C300.498 83.125 292.309 80 284.119 80S267.74 83.125 261.49 89.375L135.127 215.734L73.209 153.816C66.799 147.406 58.225 144 49.502 144C45.186 144 40.834 144.836 36.689 146.551C24.158 151.742 16 163.949 16 177.516V414.492C16 423.746 19.75 432.121 25.812 438.188C31.877 444.25 40.254 448 49.512 448H286.486C300.049 448 312.256 439.844 317.451 427.312C322.635 414.793 319.766 400.371 310.184 390.793L248.266 328.875L374.627 202.508C387.125 190.016 387.123 169.75 374.627 157.258ZM351.998 179.887L225.639 306.25L203.012 328.875L225.639 351.504L287.557 413.422C287.986 413.852 288.117 414.512 287.885 415.07C287.65 415.641 287.111 416 286.486 416H49.512L48 414.492V177.516C48 176.891 48.359 176.355 48.938 176.113L50.582 176.445L112.5 238.363L135.127 260.988L157.754 238.363L284.117 112.004L351.998 179.887Z" })
  }
));
DownLeftLight.displayName = "DownLeftLight";
var DownLeft_default = DownLeftLight;
