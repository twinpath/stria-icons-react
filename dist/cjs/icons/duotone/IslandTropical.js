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
const IslandTropicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M196 352C205.957 309.312 220.839 229.82 217.023 150.539L239.9 128H266.124C277.346 176.008 294.765 270.664 284.674 359.23C270.842 354.816 256.324 352 241.146 352H196Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.498 32C301.625 32 270.874 45.875 250.25 67.125C235.749 28.25 193.749 0 143.499 0C87 0 40.25 35.375 32.125 81.625C31.625 85.25 32.625 89 35 91.75S40.875 96 44.625 96H80L95.999 64L112 96H142.124C108.001 131 102.501 182.875 127.625 218.625C132 224.75 140.749 225.875 146.124 220.5L240.009 128H367.999L383.998 96L400 128H435.373C439.125 128 442.625 126.5 445 123.75C447.374 121 448.374 117.25 447.874 113.625C439.75 67.375 393 32 336.498 32ZM383.629 474.75C386.503 494.25 371.627 512 351.878 512H32.107C12.358 512 -2.519 494.25 0.356 474.75C10.858 404.25 71.482 352 142.731 352H241.254C312.503 352 373.127 404.25 383.629 474.75Z" })
    ]
  }
));
IslandTropicalDuotone.displayName = "IslandTropicalDuotone";
var IslandTropical_default = IslandTropicalDuotone;
