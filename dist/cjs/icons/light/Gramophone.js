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
var Gramophone_exports = {};
__export(Gramophone_exports, {
  default: () => Gramophone_default
});
module.exports = __toCommonJS(Gramophone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GramophoneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 480H352V416C352 398.4 337.6 384 320 384H64C46.4 384 32 398.4 32 416V480H16C7.2 480 0 487.2 0 496C0 504.8 7.2 512 16 512H368C376.8 512 384 504.8 384 496C384 487.2 376.8 480 368 480ZM320 480H64V416H320V480ZM45.5 314.125C56.5 321.875 71 322 82.125 314.375C141.75 273.5 201.625 248.25 260.125 239.375C261.5 239.25 336 228.875 336 280C336 302.125 318.125 320 296 320H176C167.164 320 160 327.163 160 336C160 344.836 167.164 352 176 352H290.375C327.125 352 360.625 326.75 366.875 290.625C374.75 245 356.625 234.75 278.125 172.125C232 135.25 192.75 83.375 161.5 18.125C156.125 7.125 144.875 0 132.625 0C131.625 0 130.625 0 129.625 0.125C116.25 1.375 105.125 10.75 101.625 23.75L33 279.75C29.625 292.625 34.5 306.375 45.5 314.125ZM132.625 32C166 101.625 208.25 157.125 258.125 197.125L269.5 206.125C264.875 206.5 260.125 207.125 255.25 207.75C192 217.375 127.75 244.375 64 288L132.625 32Z" })
  }
));
GramophoneLight.displayName = "GramophoneLight";
var Gramophone_default = GramophoneLight;
