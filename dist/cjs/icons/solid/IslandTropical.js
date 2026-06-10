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
const IslandTropicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.874 113.625C448.374 117.25 447.374 121 444.999 123.75C442.624 126.5 439.124 128 435.374 128H399.997L383.997 96L367.996 128H266.242C277.493 176.125 294.993 271.125 284.743 359.875C336.745 377 376.747 422.25 383.747 478C386.122 496.25 370.496 512 351.996 512H32.108C12.357 512 -2.519 494.25 0.356 474.75C10.857 404.25 71.484 352 142.737 352H196.114C206.115 309.125 221.115 229.125 217.115 149.5L146.112 220.5C140.737 225.875 131.987 224.75 127.612 218.625C102.486 182.875 107.986 131 142.112 96H111.986L95.985 64L79.985 96H44.608C40.858 96 37.358 94.5 34.983 91.75C32.608 89 31.608 85.25 32.108 81.625C40.233 35.375 86.985 0 143.487 0C193.739 0 235.741 28.25 250.241 67.125C270.867 45.875 301.619 32 336.495 32C392.997 32 439.749 67.375 447.874 113.625Z" })
  }
));
IslandTropicalSolid.displayName = "IslandTropicalSolid";
var IslandTropical_default = IslandTropicalSolid;
