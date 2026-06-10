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
var ChartTreeMap_exports = {};
__export(ChartTreeMap_exports, {
  default: () => ChartTreeMap_default
});
module.exports = __toCommonJS(ChartTreeMap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartTreeMapSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 352H288C270.326 352 256 366.326 256 384V448C256 465.672 270.326 480 288 480H480C497.674 480 512 465.672 512 448V384C512 366.326 497.674 352 480 352ZM192 272H32C14.326 272 0 286.326 0 304V448C0 465.672 14.326 480 32 480H192C209.674 480 224 465.672 224 448V304C224 286.326 209.674 272 192 272ZM192 32H32C14.326 32 0 46.326 0 64V208C0 225.672 14.326 240 32 240H192C209.674 240 224 225.672 224 208V64C224 46.326 209.674 32 192 32ZM480 192H288C270.326 192 256 206.326 256 224V288C256 305.672 270.326 320 288 320H480C497.674 320 512 305.672 512 288V224C512 206.326 497.674 192 480 192ZM480 32H288C270.326 32 256 46.326 256 64V128C256 145.672 270.326 160 288 160H480C497.674 160 512 145.672 512 128V64C512 46.326 497.674 32 480 32Z" })
  }
));
ChartTreeMapSolid.displayName = "ChartTreeMapSolid";
var ChartTreeMap_default = ChartTreeMapSolid;
