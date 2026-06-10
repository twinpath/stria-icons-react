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
var Dreidel_exports = {};
__export(Dreidel_exports, {
  default: () => Dreidel_default
});
module.exports = __toCommonJS(Dreidel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DreidelThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.656 45.646C448.781 42.521 448.781 37.458 445.656 34.333S437.469 31.208 434.344 34.333L314.344 154.333C314.299 154.378 314.32 154.449 314.277 154.493L235.422 75.646C219.906 60.146 194.672 60.146 179.188 75.646L11.672 243.177C4.25 250.552 0 260.802 0 271.302V440.208C0 462.146 17.844 479.99 39.766 479.99H208.688C219.328 479.99 229.312 475.833 236.812 468.333L404.344 300.802C411.859 293.302 416 283.302 416 272.677S411.859 252.052 404.344 244.552L325.496 165.712C325.541 165.669 325.611 165.691 325.656 165.646L445.656 45.646ZM225.484 457.021C221.016 461.521 215.047 463.99 208.688 463.99H39.766C26.656 463.99 16 453.333 16 440.208V271.302C16 265.021 18.531 258.896 22.969 254.49L117.078 160.38L319.605 362.908L225.484 457.021ZM400 272.677C400 279.021 397.531 284.99 393.031 289.49L330.92 351.597L128.391 149.068L190.5 86.958C195.141 82.333 201.219 80.021 207.297 80.021C213.391 80.021 219.469 82.333 224.109 86.958L393.031 255.865C397.531 260.365 400 266.333 400 272.677Z" })
  }
));
DreidelThin.displayName = "DreidelThin";
var Dreidel_default = DreidelThin;
