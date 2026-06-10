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
var EmptySet_exports = {};
__export(EmptySet_exports, {
  default: () => EmptySet_default
});
module.exports = __toCommonJS(EmptySet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EmptySetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.969 7.031C495.594 -2.344 480.406 -2.344 471.031 7.031L396.441 81.621C358.016 50.633 309.207 32 256 32C132.289 32 32 132.289 32 256C32 309.207 50.633 358.016 81.621 396.441L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L115.559 430.379C153.984 461.367 202.793 480 256 480C379.711 480 480 379.711 480 256C480 202.793 461.367 153.984 430.379 115.559L504.969 40.969C514.344 31.594 514.344 16.406 504.969 7.031ZM80 256C80 158.953 158.953 80 256 80C295.881 80 332.586 93.488 362.131 115.932L115.932 362.131C93.488 332.586 80 295.881 80 256ZM432 256C432 353.047 353.047 432 256 432C216.119 432 179.414 418.512 149.869 396.068L396.068 149.869C418.512 179.414 432 216.119 432 256Z" })
  }
));
EmptySetRegular.displayName = "EmptySetRegular";
var EmptySet_default = EmptySetRegular;
