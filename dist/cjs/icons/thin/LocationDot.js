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
var LocationDot_exports = {};
__export(LocationDot_exports, {
  default: () => LocationDot_default
});
module.exports = __toCommonJS(LocationDot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationDotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM198.564 492.566C196.496 495.553 193.564 496 192 496S187.504 495.553 185.451 492.59C159.52 455 137.352 423.421 118.432 396.468C31.639 272.832 16 250.553 16 192.001C16 94.954 94.953 16 192 16S368 94.954 368 192.001C368 250.553 352.361 272.832 265.568 396.468C246.648 423.421 224.48 455 198.564 492.566ZM192 112.001C147.816 112.001 112 147.818 112 192.001C112 236.183 147.816 272.002 192 272.002S272 236.183 272 192.001C272 147.818 236.184 112.001 192 112.001ZM192 256.002C156.711 256.002 128 227.291 128 192.001C128 156.71 156.711 128.001 192 128.001S256 156.71 256 192.001C256 227.291 227.289 256.002 192 256.002Z" })
  }
));
LocationDotThin.displayName = "LocationDotThin";
var LocationDot_default = LocationDotThin;
