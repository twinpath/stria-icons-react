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
var Box_exports = {};
__export(Box_exports, {
  default: () => Box_default
});
module.exports = __toCommonJS(Box_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M442.938 162.094L391.156 58.547C383.02 42.277 366.391 32 348.199 32H99.781C81.596 32 64.973 42.273 56.84 58.539L5.066 162.086C1.734 168.75 0 176.098 0 183.547V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V183.535C448 176.092 446.268 168.752 442.938 162.094ZM240 64H348.219C354.344 64 359.812 67.375 362.531 72.844L406.109 160H240V64ZM85.469 72.828C88.188 67.375 93.656 64 99.781 64H208V160H41.889L85.469 72.828ZM416 416C416 433.674 401.674 448 384 448H64C46.326 448 32 433.674 32 416V192H416V416Z" })
  }
));
BoxLight.displayName = "BoxLight";
var Box_default = BoxLight;
