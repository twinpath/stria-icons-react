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
var IslandTropical_exports = {};
__export(IslandTropical_exports, {
  default: () => IslandTropical_default
});
module.exports = __toCommonJS(IslandTropical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IslandTropicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M258.075 352.541C291.891 305.521 297.52 250.744 271.561 200.625C267.436 192.781 257.811 189.719 249.967 193.781C242.123 197.875 239.061 207.531 243.123 215.375C266.871 261.18 257.123 310.635 217.002 352H131.264C58.772 352 -0.177 411.051 0 483.574C0.039 499.314 13.014 512 28.754 512H355.243C370.983 512 383.957 499.314 383.996 483.574C384.17 412.881 328.043 355.418 258.075 352.541ZM32.004 480C33.879 426.5 77.633 384 131.264 384H252.733C306.364 384 350.118 426.5 351.993 480H32.004ZM299.409 32C284.032 32 269.405 34.5 255.528 38.25C228.276 14.625 190.522 0 148.641 0C73.383 0 11.127 47.25 0.25 108.875C-0.5 113.625 0.875 118.625 4 122.25C7.25 126 11.877 128.125 16.752 128H90.26C58.006 177.875 55.131 238.5 85.01 281.125C92.135 291.375 104.637 288.625 110.262 283L233.276 160H431.297C436.174 160.125 440.799 158 444.049 154.25C447.174 150.625 448.549 145.625 447.799 140.875C436.924 79.25 374.666 32 299.409 32ZM220.024 128L102.262 245.75C84.764 200.027 106.778 133.955 162.715 101.555C169.704 97.508 172.711 89.002 169.598 81.549C165.92 72.748 155.282 68.893 147.059 73.73C136.373 80.016 126.389 87.465 117.264 96H37.379C53.756 58.5 98.137 32 148.641 32C181.395 32 211.899 42.75 234.526 62.375L247.278 73.375C258.028 70.625 278.782 64 299.409 64C349.914 64 394.293 90.5 410.67 128H220.024Z" })
  }
));
IslandTropicalLight.displayName = "IslandTropicalLight";
var IslandTropical_default = IslandTropicalLight;
