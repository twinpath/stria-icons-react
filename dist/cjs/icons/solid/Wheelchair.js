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
var Wheelchair_exports = {};
__export(Wheelchair_exports, {
  default: () => Wheelchair_default
});
module.exports = __toCommonJS(Wheelchair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WheelchairSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.347 421.875C504.753 405.125 486.815 396.031 469.878 401.656L450.503 408.094L408.801 308.125C403.94 295.969 392.168 288 379.076 288H281.297L270.892 240H336.002C353.69 240 368.002 225.688 368.002 208S353.69 176 336.002 176H257.019L255.552 169.23C251.771 142.98 227.208 124.762 201.239 128.48C174.989 132.23 156.739 156.543 160.489 182.793L184.165 323.227C185.821 339.566 199.577 352 216.001 352H357.426L402.284 459.875C407.284 472.344 419.252 480 432.003 480C435.346 480 438.784 479.469 442.128 478.344L490.128 462.344C506.878 456.781 515.94 438.656 510.347 421.875ZM160.001 464C98.243 464 48 413.758 48 352C48 297.754 86.78 252.453 138.063 242.219L130.108 195.016C56.063 209.039 0 273.875 0 352C0 440.367 71.635 512 160.001 512C237.406 512 301.949 457.031 316.777 384H266.781C252.91 430.105 210.566 464 160.001 464ZM192.001 96C218.511 96 240.001 74.508 240.001 48S218.511 0 192.001 0S144.001 21.492 144.001 48S165.491 96 192.001 96Z" })
  }
));
WheelchairSolid.displayName = "WheelchairSolid";
var Wheelchair_default = WheelchairSolid;
