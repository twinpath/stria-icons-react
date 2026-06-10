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
var NairaSign_exports = {};
__export(NairaSign_exports, {
  default: () => NairaSign_default
});
module.exports = __toCommonJS(NairaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NairaSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 256H384V48C384 39.156 376.844 32 368 32S352 39.156 352 48V256H243.457L93.156 38.906C89.188 33.156 81.969 30.75 75.219 32.719C68.562 34.812 64 41 64 48V256H16C7.156 256 0 263.156 0 272S7.156 288 16 288H64V464C64 472.844 71.156 480 80 480S96 472.844 96 464V288H226.699L354.844 473.094C357.875 477.5 362.844 480 368 480C369.594 480 371.188 479.75 372.781 479.281C379.438 477.188 384 471 384 464V288H432C440.844 288 448 280.844 448 272S440.844 256 432 256ZM96 256V99.219L204.543 256H96ZM352 412.781L265.611 288H352V412.781Z" })
  }
));
NairaSignLight.displayName = "NairaSignLight";
var NairaSign_default = NairaSignLight;
