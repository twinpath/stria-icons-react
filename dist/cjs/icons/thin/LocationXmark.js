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
var LocationXmark_exports = {};
__export(LocationXmark_exports, {
  default: () => LocationXmark_default
});
module.exports = __toCommonJS(LocationXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationXmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C85.969 0 0 85.969 0 192.002C0 269.408 26.969 291.033 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.033 384 269.408 384 192.002C384 85.969 298.031 0 192 0ZM198.564 492.566C196.496 495.553 193.564 496 192 496S187.504 495.553 185.451 492.59C159.52 455 137.352 423.42 118.432 396.467C31.639 272.832 16 250.553 16 192.002C16 94.953 94.953 16 192 16S368 94.953 368 192.002C368 250.553 352.361 272.832 265.568 396.467C246.648 423.42 224.48 455 198.564 492.566ZM269.656 114.344C266.531 111.219 261.469 111.219 258.344 114.344L192 180.686L125.656 114.344C122.531 111.219 117.469 111.219 114.344 114.344S111.219 122.531 114.344 125.656L180.688 191.998L114.344 258.342C111.219 261.467 111.219 266.529 114.344 269.654C117.471 272.781 122.529 272.781 125.656 269.654L192 203.311L258.344 269.654C261.471 272.781 266.529 272.781 269.656 269.654C272.781 266.529 272.781 261.467 269.656 258.342L203.312 191.998L269.656 125.656C272.781 122.531 272.781 117.469 269.656 114.344Z" })
  }
));
LocationXmarkThin.displayName = "LocationXmarkThin";
var LocationXmark_default = LocationXmarkThin;
