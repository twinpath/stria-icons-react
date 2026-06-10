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
var AlbumCollection_exports = {};
__export(AlbumCollection_exports, {
  default: () => AlbumCollection_default
});
module.exports = __toCommonJS(AlbumCollection_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlbumCollectionDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.031 160H31.97C7.704 160 -1.012 181.824 0.092 194.875L23.696 453.809C26.7 486.768 54.34 512 87.439 512H424.563C457.662 512 485.301 486.768 488.306 453.809L511.909 194.875C513.015 181.795 504.086 160 480.031 160ZM256.001 472.875C161.737 472.875 81.602 418.375 76.727 347.75C71.726 273.125 151.861 209.375 256.001 209.375S440.275 273.125 435.275 347.75C430.399 418.375 350.264 472.875 256.001 472.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472.062 80H40.002C26.751 80 16 90.75 16 104V128H496.064V104C496.064 90.75 485.313 80 472.062 80ZM480.063 24C480.063 10.75 469.31 0 456.058 0H56.006C42.755 0 32.002 10.75 32.002 24V48H480.063V24ZM256.032 209.375C151.893 209.375 71.758 273.125 76.758 347.75C81.634 418.375 161.769 472.875 256.032 472.875S430.431 418.375 435.306 347.75C440.307 273.125 360.172 209.375 256.032 209.375ZM256.032 369.5C239.655 369.5 226.279 359.875 226.154 347.75C226.028 335.625 239.405 325.625 256.032 325.625S286.034 335.75 285.91 347.75C285.787 359.75 272.409 369.5 256.032 369.5Z" })
    ]
  }
));
AlbumCollectionDuotone.displayName = "AlbumCollectionDuotone";
var AlbumCollection_default = AlbumCollectionDuotone;
