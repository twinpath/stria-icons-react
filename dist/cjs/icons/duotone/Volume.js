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
var Volume_exports = {};
__export(Volume_exports, {
  default: () => Volume_default
});
module.exports = __toCommonJS(Volume_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M444.189 181.942C433.908 173.598 418.783 175.067 410.439 185.348C402.033 195.598 403.533 210.723 413.814 219.129C425.127 228.379 431.627 241.816 431.627 256.003C431.627 270.19 425.127 283.628 413.814 292.878C403.533 301.284 402.033 316.409 410.439 326.658C415.158 332.471 422.064 335.471 429.002 335.471C434.345 335.471 439.752 333.69 444.189 330.065C466.72 311.627 479.627 284.659 479.627 256.003S466.72 200.379 444.189 181.942ZM504.752 108.005C494.533 99.662 479.408 101.099 470.97 111.349C462.564 121.599 464.064 136.724 474.314 145.13C508.189 172.911 527.627 213.316 527.627 256.003S508.189 339.096 474.314 366.877C464.064 375.283 462.564 390.408 470.97 400.657C475.72 406.439 482.595 409.439 489.533 409.439C494.908 409.439 500.283 407.657 504.752 404.001C549.783 367.095 575.627 313.127 575.627 256.003S549.783 144.911 504.752 108.005Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 64.006V448C352 460.594 344.609 472.031 333.109 477.188C328.906 479.094 324.438 480 320 480C312.312 480 304.719 477.219 298.734 471.906L163.84 352.002H80C53.49 352.002 32 330.51 32 304.002V208.004C32 181.496 53.49 160.005 80 160.005H163.84L298.734 40.1C308.156 31.725 321.609 29.631 333.109 34.819C344.609 39.975 352 51.412 352 64.006Z" })
    ]
  }
));
VolumeDuotone.displayName = "VolumeDuotone";
var Volume_default = VolumeDuotone;
