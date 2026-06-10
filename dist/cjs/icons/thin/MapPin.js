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
var MapPin_exports = {};
__export(MapPin_exports, {
  default: () => MapPin_default
});
module.exports = __toCommonJS(MapPin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MapPinThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 144C304 64.471 239.531 0 160 0S16 64.471 16 144C16 220.898 76.438 283.154 152.32 287.227C152.289 287.52 152 287.699 152 288V504C152 508.406 155.594 512 160 512S168 508.406 168 504V288C168 287.699 167.711 287.52 167.68 287.227C243.562 283.154 304 220.898 304 144ZM160 272C89.422 272 32 214.578 32 144C32 73.42 89.422 16 160 16S288 73.42 288 144C288 214.578 230.578 272 160 272ZM160 48C107.062 48 64 91.062 64 144C64 148.406 67.594 152 72 152S80 148.406 80 144C80 99.875 115.875 64 160 64C164.406 64 168 60.406 168 56S164.406 48 160 48Z" })
  }
));
MapPinThin.displayName = "MapPinThin";
var MapPin_default = MapPinThin;
