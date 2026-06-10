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
var Jug_exports = {};
__export(Jug_exports, {
  default: () => Jug_default
});
module.exports = __toCommonJS(Jug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JugSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 168C448.125 137.75 429.25 110.75 400.875 100.375C372.5 90 340.75 98.5 321.375 121.625L311 108.75C308.125 105 306.125 100.625 305.25 96H142.75C141.875 100.625 139.875 105 137 108.75L60 205C41.875 227.625 32 255.875 32 285V448C32 483.375 60.75 512 96 512H352C387.375 512 416 483.375 416 448V284.875C415.875 267.375 412.125 250 404.875 233.875C431.125 222.375 448 196.625 448 168ZM352 384C352 401.625 337.625 416 320 416H128C110.375 416 96 401.625 96 384V320C96 302.375 110.375 288 128 288H320C337.625 288 352 302.375 352 320V384ZM377.375 191.75L353.25 161.625C356.125 151.5 365 144 376 144C388.875 144 399.5 154.25 399.875 167.25C400.25 180.125 390.25 191 377.375 191.75ZM152 64H296C302.375 64 308.5 61.5 313 57S320 46.375 320 40V24C320 17.625 317.5 11.5 313 7S302.375 0 296 0H152C145.625 0 139.5 2.5 135 7S128 17.625 128 24V40C128 46.375 130.5 52.5 135 57S145.625 64 152 64Z" })
  }
));
JugSolid.displayName = "JugSolid";
var Jug_default = JugSolid;
