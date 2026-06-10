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
const VolumeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M444.562 181.942C434.281 173.598 419.156 175.067 410.812 185.348C402.406 195.598 403.906 210.723 414.188 219.129C425.5 228.379 432 241.816 432 256.003C432 270.19 425.5 283.628 414.188 292.878C403.906 301.284 402.406 316.409 410.812 326.658C415.531 332.471 422.437 335.471 429.375 335.471C434.719 335.471 440.125 333.69 444.562 330.065C467.094 311.627 480 284.659 480 256.003S467.094 200.379 444.562 181.942ZM505.125 108.005C494.906 99.662 479.781 101.099 471.344 111.349C462.937 121.599 464.437 136.724 474.687 145.13C508.562 172.911 528 213.316 528 256.003S508.562 339.096 474.688 366.877C464.438 375.283 462.938 390.408 471.344 400.657C476.094 406.439 482.969 409.439 489.906 409.439C495.281 409.439 500.656 407.657 505.125 404.001C550.156 367.095 576 313.127 576 256.003S550.156 144.911 505.125 108.005ZM333.109 34.819C321.609 29.631 308.156 31.725 298.734 40.1L163.84 160.005H80C53.49 160.005 32 181.496 32 208.004V304.002C32 330.51 53.49 352.002 80 352.002H163.84L298.734 471.906C304.719 477.219 312.312 480 320 480C324.438 480 328.906 479.094 333.109 477.188C344.609 472.031 352 460.594 352 448V64.006C352 51.412 344.609 39.975 333.109 34.819Z" })
  }
));
VolumeSolid.displayName = "VolumeSolid";
var Volume_default = VolumeSolid;
