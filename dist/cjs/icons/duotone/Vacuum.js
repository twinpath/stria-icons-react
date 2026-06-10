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
var Vacuum_exports = {};
__export(Vacuum_exports, {
  default: () => Vacuum_default
});
module.exports = __toCommonJS(Vacuum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VacuumDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 320V448C576 483.346 547.346 512 512 512H446.221C491.127 470.488 493.881 400.432 452.369 355.525C426.842 327.91 389.045 315.137 352 321.609V160C352 142.326 366.326 128 384 128C490 128 576 214 576 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 352C323.816 352 288 387.816 288 432C288 476.182 323.816 512 368 512S448 476.182 448 432C448 387.816 412.184 352 368 352ZM368 448C359.164 448 352 440.836 352 432C352 423.162 359.164 416 368 416S384 423.162 384 432C384 440.836 376.836 448 368 448ZM640 128C639.924 57.34 582.66 0.076 512 0H301.609C241.641 0 189 42.559 176.439 101.189L102.119 448H48C21.49 448 0 469.49 0 496C0 504.836 7.164 512 16 512H176C184.836 512 192 504.836 192 496V464C192 455.162 184.836 448 176 448H167.59L239 114.59C245.439 85.139 271.465 64.109 301.609 64H512C547.346 64.141 575.885 92.91 575.742 128.256C575.621 158.217 554.732 184.084 525.471 190.51C540.607 206.941 552.758 225.895 561.369 246.51C561.221 246.139 561.109 245.74 560.961 245.369C607.16 226.109 640 181.129 640 128Z" })
    ]
  }
));
VacuumDuotone.displayName = "VacuumDuotone";
var Vacuum_default = VacuumDuotone;
