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
var TreeDeciduous_exports = {};
__export(TreeDeciduous_exports, {
  default: () => TreeDeciduous_default
});
module.exports = __toCommonJS(TreeDeciduous_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeDeciduousSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288C512 315.841 501.749 339.445 481.39 358.526C463.306 375.475 438.721 384 413.936 384L288 384V480.001C288 497.674 273.674 512 256.001 512H255.999C238.326 512 224 497.674 224 480.001V384L98.064 384C73.279 384 48.694 375.475 30.61 358.526C10.251 339.445 0 315.841 0 288C0 268.625 5.375 251 16 235S41 207.375 59 200C49.625 184 46.125 167.5 48.5 150.5S57.625 118.875 69 106.5S94.125 86 110.5 82S143.375 79.625 160 87C162.625 62.375 173.125 41.625 191.5 25S231.375 0 256 0S302.125 8.375 320.5 25S349.375 62.375 352 87C368.625 79.625 385.125 78 401.5 82S431.625 94.125 443 106.5S461.125 133.5 463.5 150.5S462.625 184 454 200H453C471 207.375 485.375 219 496 235S512 268.625 512 288Z" })
  }
));
TreeDeciduousSolid.displayName = "TreeDeciduousSolid";
var TreeDeciduous_default = TreeDeciduousSolid;
