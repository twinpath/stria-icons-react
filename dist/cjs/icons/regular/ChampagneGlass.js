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
var ChampagneGlass_exports = {};
__export(ChampagneGlass_exports, {
  default: () => ChampagneGlass_default
});
module.exports = __toCommonJS(ChampagneGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChampagneGlassRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.012 464H152.006V349.5C216.985 337.5 263.594 278.5 254.973 212.375L227.981 27.375C225.733 11.75 212.237 0 196.241 0H59.785C43.789 0 30.295 11.75 28.045 27.375L1.053 212.25C-7.693 278.5 39.041 337.5 104.02 349.375V464H40C26.75 464 16.006 474.744 16.006 488C16.006 501.254 26.75 512 40 512H216.012C229.262 512 240.004 501.254 240.004 488C240.004 474.744 229.262 464 216.012 464ZM182.483 48L194.157 128H61.864L73.543 48H182.483ZM48.549 219.184L54.854 176H201.162L207.375 218.58C211.496 250.199 186.221 304 128 304C70.252 304 44.369 250.719 48.549 219.184Z" })
  }
));
ChampagneGlassRegular.displayName = "ChampagneGlassRegular";
var ChampagneGlass_default = ChampagneGlassRegular;
