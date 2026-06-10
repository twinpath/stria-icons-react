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
var WaveTriangle_exports = {};
__export(WaveTriangle_exports, {
  default: () => WaveTriangle_default
});
module.exports = __toCommonJS(WaveTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveTriangleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.373 262.156L483.374 470.156C478.858 476.344 471.655 480 463.999 480H463.921C456.218 479.969 449.015 476.25 444.515 470.031L175.86 96.875L43.377 278.156C35.518 288.844 20.502 291.156 9.846 283.375C-0.857 275.562 -3.201 260.531 4.627 249.844L156.626 41.844C161.142 35.656 168.345 32 176.001 32H176.079C183.782 32.031 190.985 35.75 195.485 41.969L464.14 415.125L596.623 233.844C604.435 223.094 619.467 220.812 630.154 228.625C640.857 236.438 643.201 251.469 635.373 262.156Z" })
  }
));
WaveTriangleRegular.displayName = "WaveTriangleRegular";
var WaveTriangle_default = WaveTriangleRegular;
