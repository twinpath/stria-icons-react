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
var WineGlassCrack_exports = {};
__export(WineGlassCrack_exports, {
  default: () => WineGlassCrack_default
});
module.exports = __toCommonJS(WineGlassCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineGlassCrackRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248 464H184.006V348.5C256.647 336 310.283 269.75 303.406 192.625L287.53 14.5C286.778 6.25 279.903 0 271.776 0H48.225C40.098 0 33.223 6.25 32.471 14.5L16.594 192.625C9.717 269.75 63.354 336 135.994 348.5V464H72C58.75 464 48 474.75 48 488S58.75 512 72 512H248C261.25 512 272 501.25 272 488S261.25 464 248 464ZM64.354 197L77.733 48H152L160 64L96 128L192 224L160 128L224 80L216 48H242.268L255.647 197C260.643 253.547 217.801 304 160 304C102.137 304 59.358 253.533 64.354 197Z" })
  }
));
WineGlassCrackRegular.displayName = "WineGlassCrackRegular";
var WineGlassCrack_default = WineGlassCrackRegular;
