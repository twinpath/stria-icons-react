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
var ChartPieSimple_exports = {};
__export(ChartPieSimple_exports, {
  default: () => ChartPieSimple_default
});
module.exports = __toCommonJS(ChartPieSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartPieSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.26 288H224.01V50.75C224.01 41.875 216.885 34.5 208.26 34.5C207.51 34.5 206.885 34.5 206.135 34.625C87.135 51.5 -3.99 155.375 0.135 280.125C4.26 404.125 107.885 507.75 231.885 511.875C234.635 512 237.385 512 240.01 512C361.01 512 460.885 422.375 477.385 305.875C478.635 296.375 470.885 288 461.26 288ZM240.01 464C237.885 464 235.635 464 233.51 463.875C134.51 460.625 51.385 377.5 48.135 278.5C45.26 193.25 98.385 118.375 176.01 91.125V336H420.76C394.135 411 322.01 464 240.01 464ZM288.76 0C288.51 0 288.135 0 287.76 0C279.135 0 272.01 7.5 272.01 16.25V240H495.76C504.885 240 512.635 232.25 512.01 223.25C503.76 103.75 408.26 8.25 288.76 0Z" })
  }
));
ChartPieSimpleRegular.displayName = "ChartPieSimpleRegular";
var ChartPieSimple_default = ChartPieSimpleRegular;
