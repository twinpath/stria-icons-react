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
var Podium_exports = {};
__export(Podium_exports, {
  default: () => Podium_default
});
module.exports = __toCommonJS(Podium_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodiumSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M108.641 512H339.359C355.664 512 369.362 499.74 371.163 483.534L400 224H48L76.837 483.534C78.638 499.74 92.336 512 108.641 512ZM424 144H127.375C133.75 113.125 158.125 88.75 190.125 82.001C198.75 90.625 210.75 96 224 96L286.197 96C309.41 96 330.699 80.314 335.083 57.519C340.982 26.848 317.613 0 288 0H224C202 0 183.5 15 177.875 35.25C125.875 46.875 86.125 90.25 79.375 144H24C10.745 144 0 154.745 0 168V168C0 181.255 10.745 192 24 192H424C437.255 192 448 181.255 448 168V168C448 154.745 437.255 144 424 144Z" })
  }
));
PodiumSolid.displayName = "PodiumSolid";
var Podium_default = PodiumSolid;
