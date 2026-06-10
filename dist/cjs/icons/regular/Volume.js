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
const VolumeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M333.109 34.818C328.908 32.922 324.443 31.998 320.014 31.998C312.316 31.998 304.715 34.783 298.734 40.1L163.84 160.004H80C53.49 160.004 32 181.496 32 208.004V304.002C32 330.51 53.49 352.002 80 352.002H163.84L298.734 471.906C304.719 477.219 312.312 480 320 480C324.438 480 328.906 479.094 333.109 477.188C344.609 472.031 352 460.594 352 448V64.006C352 51.412 344.609 39.975 333.109 34.818ZM304 412.365L182.09 304.002H80V208.004H182.09L304 99.641V412.365ZM444.562 181.941C440.092 178.312 434.705 176.541 429.359 176.541C422.41 176.541 415.529 179.535 410.812 185.348C402.406 195.598 403.906 210.723 414.188 219.129C425.5 228.379 432 241.814 432 256.002S425.5 283.627 414.188 292.877C403.906 301.283 402.406 316.408 410.812 326.658C415.531 332.471 422.437 335.471 429.375 335.471C434.719 335.471 440.125 333.689 444.562 330.064C467.094 311.627 480 284.658 480 256.002C480 227.348 467.094 200.379 444.562 181.941ZM505.125 108.004C500.67 104.367 495.283 102.588 489.924 102.588C482.99 102.588 476.104 105.566 471.344 111.348C462.938 121.598 464.438 136.723 474.688 145.129C508.562 172.91 528 213.316 528 256.002C528 298.689 508.562 339.096 474.688 366.877C464.438 375.283 462.938 390.406 471.344 400.656C476.094 406.438 482.969 409.438 489.906 409.438C495.281 409.438 500.656 407.656 505.125 404C550.156 367.096 576 313.127 576 256.002C576 198.879 550.156 144.91 505.125 108.004Z" })
  }
));
VolumeRegular.displayName = "VolumeRegular";
var Volume_default = VolumeRegular;
