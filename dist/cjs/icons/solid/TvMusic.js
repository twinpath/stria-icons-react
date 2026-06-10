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
var TvMusic_exports = {};
__export(TvMusic_exports, {
  default: () => TvMusic_default
});
module.exports = __toCommonJS(TvMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TvMusicSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 320C266.5 320 288 305.625 288 288V203.125L384 165.625V226C378.75 224.75 373.375 224 368 224C341.5 224 320 238.375 320 256S341.5 288 368 288S416 273.625 416 256V112C416 106.875 413.625 102.125 409.5 99.125S400 95.25 395.25 96.75L267.25 144C260.5 146.125 256 152.25 256 159.25V258C250.75 256.75 245.375 256 240 256C213.5 256 192 270.375 192 288S213.5 320 240 320ZM512 448H128C110.327 448 96 462.327 96 480V480C96 497.673 110.327 512 128 512H512C529.673 512 544 497.673 544 480V480C544 462.327 529.673 448 512 448ZM592 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H592C618.5 416 640 394.5 640 368V48C640 21.5 618.5 0 592 0ZM576 352H64V64H576V352Z" })
  }
));
TvMusicSolid.displayName = "TvMusicSolid";
var TvMusic_default = TvMusicSolid;
