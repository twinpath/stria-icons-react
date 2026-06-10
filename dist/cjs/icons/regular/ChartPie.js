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
var ChartPie_exports = {};
__export(ChartPie_exports, {
  default: () => ChartPie_default
});
module.exports = __toCommonJS(ChartPie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartPieRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544.018 223.25C535.768 103.75 440.268 8.25 320.768 0C320.518 0 320.143 0 319.768 0C311.143 0 304.018 7.5 304.018 16.25V240H527.768C536.893 240 544.643 232.375 544.018 223.25ZM352.018 192V53.5C419.518 71 473.018 124.5 490.518 192H352.018ZM256.018 288V50.75C256.018 41.875 248.893 34.5 240.268 34.5C239.518 34.5 238.893 34.5 238.143 34.625C119.018 51.5 27.893 155.625 32.143 280.375C36.518 407.5 145.143 512 272.143 512C273.143 512 274.018 512 275.018 512C325.393 511.375 372.018 495.125 410.268 468C418.268 462.375 418.768 450.75 411.893 443.875L256.018 288ZM274.518 464H272.143C171.518 464 83.518 379.125 80.143 278.75C77.268 193.375 130.268 118.375 208.018 91.125V307.875L222.018 322L348.268 448.125C325.143 458.25 300.143 463.625 274.518 464ZM559.768 288H322.518L480.518 446C483.768 449.25 488.018 450.875 492.143 450.875C496.018 450.875 499.768 449.5 502.768 446.75C541.393 410.25 568.018 361.125 575.893 305.875C577.268 296.375 569.393 288 559.768 288Z" })
  }
));
ChartPieRegular.displayName = "ChartPieRegular";
var ChartPie_default = ChartPieRegular;
