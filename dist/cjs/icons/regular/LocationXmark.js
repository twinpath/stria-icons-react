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
const LocationXmarkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 445.836C174.307 420.371 158.582 397.969 144.623 378.086C57.562 254.066 48 238.875 48 192C48 112.598 112.598 48 192 48S336 112.598 336 192C336 238.875 326.438 254.066 239.377 378.086C225.412 397.98 209.684 420.383 192 445.836ZM264.969 119.031C255.594 109.656 240.406 109.656 231.031 119.031L192 158.062L152.969 119.031C143.594 109.656 128.406 109.656 119.031 119.031S109.656 143.594 119.031 152.969L158.062 191.998L119.031 231.029C109.656 240.404 109.656 255.592 119.031 264.967C128.404 274.34 143.588 274.348 152.969 264.967L192 225.936L231.031 264.967C240.404 274.34 255.588 274.348 264.969 264.967C274.344 255.592 274.344 240.404 264.969 231.029L225.938 191.998L264.969 152.969C274.344 143.594 274.344 128.406 264.969 119.031Z" })
  }
));
LocationXmarkRegular.displayName = "LocationXmarkRegular";
var LocationXmark_default = LocationXmarkRegular;
