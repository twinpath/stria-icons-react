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
var RouteHighway_exports = {};
__export(RouteHighway_exports, {
  default: () => RouteHighway_default
});
module.exports = __toCommonJS(RouteHighway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteHighwayDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M33.533 192H414.462C410.148 219.357 412.812 246.061 428.355 269.25C466.351 325.75 446.978 408.625 389.609 435.25L223.999 512L58.39 435.25C1.021 408.625 -18.352 325.75 19.644 269.25C35.191 246.055 37.851 219.346 33.533 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.412 192H33.482C29.328 165.701 18.726 138.814 6.593 113.875C2.595 105.625 3.22 96.125 8.468 88.75L49.589 30.375C54.589 23.25 65.339 17.25 77.087 21.75C92.46 27.625 109.71 30.625 127.333 30.625C156.829 30.625 187.203 22.125 210.451 4.5C214.449 1.5 219.199 0 223.949 0S233.449 1.5 237.447 4.5C260.695 22.125 291.068 30.625 320.564 30.625C338.187 30.625 355.437 27.625 370.81 21.75C382.558 17.25 393.183 23.125 398.308 30.375L439.429 88.625C444.677 96 445.302 105.625 441.304 113.75C429.169 138.756 418.564 165.682 414.412 192Z" })
    ]
  }
));
RouteHighwayDuotone.displayName = "RouteHighwayDuotone";
var RouteHighway_default = RouteHighwayDuotone;
