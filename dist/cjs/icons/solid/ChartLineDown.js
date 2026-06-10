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
var ChartLineDown_exports = {};
__export(ChartLineDown_exports, {
  default: () => ChartLineDown_default
});
module.exports = __toCommonJS(ChartLineDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartLineDownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 416H64V64C64 46.327 49.673 32 32 32H32C14.327 32 0 46.327 0 64V448C0 465.6 14.4 480 32 480H480C497.673 480 512 465.673 512 448V448C512 430.327 497.673 416 480 416ZM111.998 143.998C99.503 156.493 99.503 176.753 111.998 189.248L185.375 262.625C197.87 275.12 218.13 275.12 230.625 262.625L304 189.25L366.062 251.312L324.687 292.688C314.609 302.766 321.747 320 336.001 320H464C472.837 320 480 312.837 480 304V176C480 162.68 463.391 153.984 452.688 164.688L411.312 206.063L326.625 121.375C320.375 115.125 312.188 112 304 112S287.625 115.125 281.375 121.375L208 194.75L157.248 143.998C144.753 131.503 124.494 131.503 111.998 143.998L111.998 143.998Z" })
  }
));
ChartLineDownSolid.displayName = "ChartLineDownSolid";
var ChartLineDown_default = ChartLineDownSolid;
