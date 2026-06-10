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
var Windsock_exports = {};
__export(Windsock_exports, {
  default: () => Windsock_default
});
module.exports = __toCommonJS(Windsock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindsockLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M471.891 107.75L114.625 48.219C110.031 47.437 105.234 48.75 101.656 51.781C98.062 54.844 96 59.312 96 64V110.5H32V16C32 7.156 24.844 0 16 0S0 7.156 0 16V496C0 504.844 7.156 512 16 512S32 504.844 32 496V311.281H96V352C96 356.688 98.062 361.156 101.656 364.219C104.562 366.688 108.234 368 112 368C112.875 368 113.75 367.938 114.625 367.781L471.922 308.25C495.141 304.344 512 284.438 512 260.906V155.094C512 131.562 495.141 111.656 471.891 107.75ZM96 279.281H32V142.5H96V279.281ZM224 317.125L128 333.125V82.875L224 98.875V317.125ZM384 290.461L256 311.793V104.209L384 125.543V290.461ZM480 260.906C480 268.75 474.375 275.375 466.641 276.688L416 285.127V130.877L466.609 139.312C474.375 140.625 480 147.25 480 155.094V260.906Z" })
  }
));
WindsockLight.displayName = "WindsockLight";
var Windsock_default = WindsockLight;
