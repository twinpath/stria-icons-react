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
var ArrowDownToDottedLine_exports = {};
__export(ArrowDownToDottedLine_exports, {
  default: () => ArrowDownToDottedLine_default
});
module.exports = __toCommonJS(ArrowDownToDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToDottedLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 424C114.744 424 104 434.746 104 448S114.744 472 128 472S152 461.254 152 448S141.256 424 128 424ZM224 424C210.744 424 200 434.746 200 448S210.744 472 224 472S248 461.254 248 448S237.256 424 224 424ZM32 424C18.744 424 8 434.746 8 448S18.744 472 32 472S56 461.254 56 448S45.256 424 32 424ZM320 424C306.744 424 296 434.746 296 448S306.744 472 320 472S344 461.254 344 448S333.256 424 320 424ZM416 424C402.744 424 392 434.746 392 448S402.744 472 416 472S440 461.254 440 448S429.256 424 416 424ZM212.688 363.312C215.812 366.437 219.906 367.999 224 367.999S232.188 366.437 235.312 363.312L379.312 219.312C385.562 213.062 385.562 202.937 379.312 196.687S362.937 190.437 356.688 196.687L240 313.374V47.999C240 39.155 232.844 31.999 224 31.999S208 39.155 208 47.999V313.374L91.312 196.687C85.062 190.437 74.937 190.437 68.688 196.687S62.438 213.062 68.688 219.312L212.688 363.312Z" })
  }
));
ArrowDownToDottedLineLight.displayName = "ArrowDownToDottedLineLight";
var ArrowDownToDottedLine_default = ArrowDownToDottedLineLight;
