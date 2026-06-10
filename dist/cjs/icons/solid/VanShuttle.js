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
var VanShuttle_exports = {};
__export(VanShuttle_exports, {
  default: () => VanShuttle_default
});
module.exports = __toCommonJS(VanShuttle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VanShuttleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M628.875 210.625L494.391 49.268C485.271 38.326 471.762 32 457.518 32H48C21.6 32 0 53.6 0 80V336C0 362.4 21.6 384 48 384H64C64 437 107 480 160 480S256 437 256 384H384C384 437 427 480 480 480S576 437 576 384H592C618.4 384 640 362.4 640 336V241.375C640 230.125 636 219.25 628.875 210.625ZM64 192V96H160V192H64ZM160 432C133.5 432 112 410.5 112 384S133.5 336 160 336S208 357.5 208 384S186.5 432 160 432ZM320 192H224V96H320V192ZM480 432C453.5 432 432 410.5 432 384S453.5 336 480 336S528 357.5 528 384S506.5 432 480 432ZM384 192V96H450L530 192H384Z" })
  }
));
VanShuttleSolid.displayName = "VanShuttleSolid";
var VanShuttle_default = VanShuttleSolid;
