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
var Sleigh_exports = {};
__export(Sleigh_exports, {
  default: () => Sleigh_default
});
module.exports = __toCommonJS(Sleigh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SleighLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.758 364.875L606.011 356.497C599.173 350.62 588.827 351.572 583.177 358.599L583.177 358.599C577.785 365.305 578.683 375.078 585.205 380.69L595.008 389.125C601.258 394.25 606.133 401.25 607.508 409.125C611.258 429.75 595.383 447.75 575.383 447.75H448.006V383.75H458.006C523.176 383.75 576.008 330.919 576.008 265.749V128.5H592.008C600.808 128.5 608.008 121.3 608.008 112.5V112.5C608.008 103.7 600.808 96.5 592.008 96.5H480.006C462.333 96.5 448.006 110.827 448.006 128.5V177C448.006 205.125 418.631 216.25 405.88 219.75C357.755 233 268.879 215.875 221.753 136.625C169.502 48.75 122.001 32 52.751 32H16C7.2 32 0 39.2 0 48V48C0 56.8 7.2 64 16 64H32V232C32 296 71.876 350.625 128.002 373V448H48.001C39.201 448 32 455.2 32 464V464C32 472.8 39.201 480 48.001 480H572.008C607.508 480 638.008 452.75 639.884 419.25C641.134 398 632.259 378.25 615.758 364.875ZM64.001 232V64.375C117.377 66.25 152.252 82.25 194.253 152.875C236.503 224.125 309.754 256 372.005 256C387.005 256 401.255 254.25 414.381 250.5C455.506 239.25 480.007 211.75 480.007 177V128.5H544.007V266C544.007 313.375 505.382 352 458.006 352H184.002C117.752 352 64.001 298.25 64.001 232ZM160.002 448V381.625C167.877 382.875 175.752 384 184.002 384H416.006V448H160.002Z" })
  }
));
SleighLight.displayName = "SleighLight";
var Sleigh_default = SleighLight;
