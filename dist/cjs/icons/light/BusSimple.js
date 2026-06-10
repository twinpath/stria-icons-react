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
var BusSimple_exports = {};
__export(BusSimple_exports, {
  default: () => BusSimple_default
});
module.exports = __toCommonJS(BusSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 376C109.254 376 120 365.254 120 352S109.254 328 96 328S72 338.746 72 352S82.746 376 96 376ZM352 376C365.254 376 376 365.254 376 352S365.254 328 352 328S328 338.746 328 352S338.746 376 352 376ZM224 0C99.25 0 0 51.25 0 96V384C0 407.506 12.986 427.93 32 439.057V496C32 504.836 39.164 512 48 512C56.838 512 64 504.836 64 496V448H384V496C384 504.836 391.164 512 400 512C408.838 512 416 504.836 416 496V439.057C435.014 427.93 448 407.506 448 384V96C448 51.25 348.75 0 224 0ZM416 384C416 401.645 401.645 416 384 416H64C46.355 416 32 401.645 32 384L31.998 287.998L32 288H416V384ZM416 256H31.998L31.996 128H416V256ZM32.051 96C34.051 79.957 104.865 32 224 32C343.352 32 414.246 80.146 416 96H32.051Z" })
  }
));
BusSimpleLight.displayName = "BusSimpleLight";
var BusSimple_default = BusSimpleLight;
