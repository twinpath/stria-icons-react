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
var HomeHeart_exports = {};
__export(HomeHeart_exports, {
  default: () => HomeHeart_default
});
module.exports = __toCommonJS(HomeHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeHeartSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.081 231.906L309.082 7.922C303.052 2.639 295.528 0 288.006 0C281.808 0 273.859 1.851 266.926 7.922L10.928 231.906C-11.245 251.315 2.607 288 32.006 288H64.029V448C64.029 483.346 92.683 512 128.029 512H447.998C483.345 512 511.997 483.346 511.997 448V288H544.003C561.739 288 576.003 273.602 576.003 256C576.003 246.947 572.161 238.104 565.081 231.906ZM397.693 283.778C397.693 299.149 392.011 314.523 380.647 326.313L297.659 411.871C294.966 414.623 291.478 415.999 287.99 415.999S281.012 414.623 278.319 411.871L195.333 326.313C183.957 314.509 178.275 299.113 178.275 283.725C178.275 254.191 200.683 223.998 235.54 223.998C251.482 223.998 267.528 230.585 279.421 242.879L287.868 251.633L296.313 242.879C308.275 230.585 324.388 223.998 340.356 223.998C375.059 223.998 397.693 254.088 397.693 283.778Z " })
  }
));
HomeHeartSolid.displayName = "HomeHeartSolid";
var HomeHeart_default = HomeHeartSolid;
