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
var LocationCheck_exports = {};
__export(LocationCheck_exports, {
  default: () => LocationCheck_default
});
module.exports = __toCommonJS(LocationCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M278.344 138.341L164 252.686L105.656 194.341C102.531 191.216 97.469 191.216 94.344 194.341C91.219 197.466 91.219 202.529 94.344 205.654L158.344 269.654C159.906 271.217 161.938 271.998 164 271.998S168.094 271.217 169.656 269.654L289.656 149.653C292.781 146.528 292.781 141.466 289.656 138.341C286.531 135.216 281.469 135.216 278.344 138.341ZM192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM198.564 492.566C196.496 495.553 193.564 496 192 496S187.504 495.553 185.451 492.59C159.52 455 137.352 423.421 118.432 396.468C31.639 272.832 16 250.553 16 192.001C16 94.954 94.953 16 192 16S368 94.954 368 192.001C368 250.553 352.361 272.832 265.568 396.468C246.648 423.421 224.48 455 198.564 492.566Z" })
  }
));
LocationCheckThin.displayName = "LocationCheckThin";
var LocationCheck_default = LocationCheckThin;
