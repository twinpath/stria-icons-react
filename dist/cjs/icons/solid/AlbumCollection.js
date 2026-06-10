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
const AlbumCollectionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.032 104C496.032 90.75 485.281 80 472.029 80H39.972C26.72 80 15.969 90.75 15.969 104V128H496.032V104ZM480.03 24C480.03 10.75 469.279 0 456.027 0H55.974C42.723 0 31.971 10.75 31.971 24V48H480.03V24ZM256.001 325.625C239.374 325.625 225.997 335.625 226.122 347.75C226.247 359.875 239.624 369.5 256.001 369.5C272.378 369.5 285.755 359.75 285.88 347.75S272.628 325.625 256.001 325.625ZM480.03 160H31.971C7.705 160 -1.011 181.824 0.092 194.875L23.696 453.809C26.7 486.768 54.34 512 87.438 512H424.563C457.662 512 485.301 486.768 488.306 453.809L511.909 194.875C513.015 181.795 504.085 160 480.03 160ZM256.001 472.875C161.738 472.875 81.603 418.375 76.727 347.75C71.726 273.125 151.862 209.375 256.001 209.375S440.275 273.125 435.274 347.75C430.399 418.375 350.263 472.875 256.001 472.875Z" })
  }
));
AlbumCollectionSolid.displayName = "AlbumCollectionSolid";
var AlbumCollection_default = AlbumCollectionSolid;
