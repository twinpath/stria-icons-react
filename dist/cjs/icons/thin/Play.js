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
var Play_exports = {};
__export(Play_exports, {
  default: () => Play_default
});
module.exports = __toCommonJS(Play_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlayThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M489.031 215.047L201.031 39.047C193.365 34.367 184.697 32.016 176.012 32.016C148.396 32.016 128 54.619 128 80V432C128 457.607 148.615 480 176 480C184.688 480 193.359 477.641 201.031 472.953L489.031 296.953C503.297 288.234 512 272.719 512 256S503.297 223.766 489.031 215.047ZM480.688 283.301L192.689 459.299C187.656 462.375 181.887 464 176 464C158.355 464 144 449.645 144 432V80C144 64.617 156.238 48.016 176.012 48.016C181.902 48.016 187.672 49.637 192.688 52.699L480.688 228.699C490.133 234.471 496 244.932 496 256C496 267.066 490.133 277.527 480.688 283.301Z" })
  }
));
PlayThin.displayName = "PlayThin";
var Play_default = PlayThin;
