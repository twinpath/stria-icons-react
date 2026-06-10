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
var Satellite_exports = {};
__export(Satellite_exports, {
  default: () => Satellite_default
});
module.exports = __toCommonJS(Satellite_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SatelliteDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M246.748 9.25C240.623 3.375 232.5 0 224.125 0C215.625 0 207.5 3.375 201.625 9.25L104.875 106C92.5 118.498 92.5 138.623 104.875 151.123L185.125 231.498L326.998 89.625L246.748 9.25ZM502.371 264.998L421.998 184.623L280.248 326.373L360.498 406.746C372.998 419.121 393.123 419.121 405.498 406.746L502.246 309.998C508.246 304.123 511.621 295.998 511.621 287.498C511.621 279.123 508.246 270.998 502.371 264.998ZM111.625 377.496L93.75 395.246C91.125 394.496 88.75 393.621 86 393.621C68.25 393.621 54 407.996 54 425.621C54 443.371 68.25 457.621 86 457.621C103.625 457.621 118 443.371 118 425.621C118 422.871 117.125 420.496 116.375 417.871L134.125 399.996L111.625 377.496Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M470.249 136.748C483.249 123.623 483.249 102.375 470.249 89.25L422.751 41.75C409.626 28.625 388.376 28.625 375.251 41.75L175.753 241.373C121.753 216.873 59.503 218.873 7.253 246.748C-1.245 251.373 -2.37 263.123 4.38 269.998L242.126 507.621C248.876 514.371 260.751 513.246 265.251 504.746C293.126 452.496 295.126 390.246 270.626 336.246L470.249 136.748Z" })
    ]
  }
));
SatelliteDuotone.displayName = "SatelliteDuotone";
var Satellite_default = SatelliteDuotone;
