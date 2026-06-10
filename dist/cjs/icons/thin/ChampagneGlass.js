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
const ChampagneGlassThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 496H136V352C136 351.691 135.707 351.508 135.674 351.211C202.623 347.086 256 290.922 256 221.812C256 186.719 242.734 91.688 222.984 6.188C222.141 2.562 218.906 0 215.188 0H40.812C37.094 0 33.859 2.562 33.016 6.188C13.266 91.688 0 186.719 0 221.812C0 290.922 53.377 347.086 120.326 351.211C120.293 351.508 120 351.691 120 352V496H32C27.578 496 24 499.594 24 504S27.578 512 32 512H224C228.422 512 232 508.406 232 504S228.422 496 224 496ZM47.188 16H208.812C217.777 55.586 224.775 94.266 229.934 128H26.066C31.225 94.266 38.223 55.586 47.188 16ZM16 221.812C16 207.594 18.633 179.391 23.674 143.867C23.799 143.871 23.873 144 24 144H232C232.127 144 232.201 143.871 232.326 143.867C237.367 179.391 240 207.594 240 221.812C240 284.781 189.75 336 128 336S16 284.781 16 221.812Z" })
  }
));
ChampagneGlassThin.displayName = "ChampagneGlassThin";
var ChampagneGlass_default = ChampagneGlassThin;
