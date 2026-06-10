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
const ChampagneGlassSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M199.986 464H159.994V347.75C220.733 332.5 263.225 275.75 254.976 212.25L227.981 27.375C225.732 11.75 212.234 0 196.237 0H59.763C43.766 0 30.268 11.75 28.019 27.375L1.024 212.25C-7.225 275.75 35.267 332.5 96.006 347.75V464H56.014C33.893 464 16.021 481.875 16.021 504C16.021 508.375 19.645 512 24.02 512H231.981C236.355 512 239.979 508.375 239.979 504C239.979 481.875 222.107 464 199.986 464ZM61.762 128L73.51 48H182.49L194.238 128H61.762Z" })
  }
));
ChampagneGlassSolid.displayName = "ChampagneGlassSolid";
var ChampagneGlass_default = ChampagneGlassSolid;
