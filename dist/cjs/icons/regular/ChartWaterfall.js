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
var ChartWaterfall_exports = {};
__export(ChartWaterfall_exports, {
  default: () => ChartWaterfall_default
});
module.exports = __toCommonJS(ChartWaterfall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartWaterfallRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 192C357.25 192 368 181.25 368 168V88C368 74.75 357.25 64 344 64S320 74.75 320 88V168C320 181.25 330.75 192 344 192ZM440 352C453.25 352 464 341.25 464 328V88C464 74.75 453.25 64 440 64S416 74.75 416 88V328C416 341.25 426.75 352 440 352ZM248 256C261.25 256 272 245.25 272 232V152C272 138.75 261.25 128 248 128S224 138.75 224 152V232C224 245.25 234.75 256 248 256ZM152 352C165.25 352 176 341.25 176 328V248C176 234.75 165.25 224 152 224S128 234.75 128 248V328C128 341.25 138.75 352 152 352ZM488 432H48V56C48 42.75 37.25 32 24 32S0 42.75 0 56V448C0 465.594 14.406 480 32 480H488C501.25 480 512 469.25 512 456S501.25 432 488 432Z" })
  }
));
ChartWaterfallRegular.displayName = "ChartWaterfallRegular";
var ChartWaterfall_default = ChartWaterfallRegular;
