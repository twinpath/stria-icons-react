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
var Dumpster_exports = {};
__export(Dumpster_exports, {
  default: () => Dumpster_default
});
module.exports = __toCommonJS(Dumpster_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumpsterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 256H533.25L536.812 224H504.719L483.531 416H92.469L71.281 224H39.062L42.625 256H16C7.199 256 0 263.199 0 272C0 280.799 7.199 288 16 288H46.25L64 448V464C64 472.836 71.164 480 80 480S96 472.836 96 464V448H480V464C480 472.836 487.164 480 496 480S512 472.836 512 464V448L529.75 288H560C568.801 288 576 280.799 576 272C576 263.199 568.801 256 560 256ZM16 192H560C570.375 192 578 179.75 575.5 167.125L543.5 47.125C541.75 38.25 535.25 32 528 32H48C40.75 32 34.25 38.25 32.5 47.125L0.5 167.125C-2 179.75 5.625 192 16 192ZM514.25 64L541.375 160H462.75L443.5 64H514.25ZM304 64H410.875L430.125 160H304V64ZM165.125 64H272V160H145.875L165.125 64ZM61.75 64H132.5L113.25 160H34.625L61.75 64Z" })
  }
));
DumpsterLight.displayName = "DumpsterLight";
var Dumpster_default = DumpsterLight;
