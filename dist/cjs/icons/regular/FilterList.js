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
var FilterList_exports = {};
__export(FilterList_exports, {
  default: () => FilterList_default
});
module.exports = __toCommonJS(FilterList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterListRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 120H488C501.25 120 512 109.25 512 96S501.25 72 488 72H440C426.75 72 416 82.75 416 96S426.75 120 440 120ZM488 232H344C330.75 232 320 242.75 320 256S330.75 280 344 280H488C501.25 280 512 269.25 512 256S501.25 232 488 232ZM329.518 64H22.482C3.582 64 -6.85 85.5 5.07 99.877L112 225.793V368C112 375.828 115.812 383.172 122.252 387.656L202.25 443.641C206.533 446.639 211.275 448 215.906 448C228.34 448 240 438.201 240 423.982V225.793L346.93 99.877C358.85 85.5 348.416 64 329.518 64ZM203.412 194.723L192 208.162V377.881L160 355.486V208.162L148.588 194.723L78.336 112H273.662L203.412 194.723ZM488 392H344C330.75 392 320 402.75 320 416S330.75 440 344 440H488C501.25 440 512 429.25 512 416S501.25 392 488 392Z" })
  }
));
FilterListRegular.displayName = "FilterListRegular";
var FilterList_default = FilterListRegular;
