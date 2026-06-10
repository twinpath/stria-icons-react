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
var ChartScatter_exports = {};
__export(ChartScatter_exports, {
  default: () => ChartScatter_default
});
module.exports = __toCommonJS(ChartScatter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartScatterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 200C214.062 200 232 182.062 232 160S214.062 120 192 120S152 137.938 152 160S169.938 200 192 200ZM192 136C205.234 136 216 146.766 216 160S205.234 184 192 184S168 173.234 168 160S178.766 136 192 136ZM416 168C438.062 168 456 150.062 456 128S438.062 88 416 88S376 105.938 376 128S393.938 168 416 168ZM416 104C429.234 104 440 114.766 440 128S429.234 152 416 152S392 141.234 392 128S402.766 104 416 104ZM384 360C406.062 360 424 342.062 424 320S406.062 280 384 280S344 297.938 344 320S361.938 360 384 360ZM384 296C397.234 296 408 306.766 408 320S397.234 344 384 344S360 333.234 360 320S370.766 296 384 296ZM288 296C310.062 296 328 278.062 328 256S310.062 216 288 216S248 233.938 248 256S265.938 296 288 296ZM288 232C301.234 232 312 242.766 312 256S301.234 280 288 280S264 269.234 264 256S274.766 232 288 232ZM160 360C182.062 360 200 342.062 200 320S182.062 280 160 280S120 297.938 120 320S137.938 360 160 360ZM160 296C173.234 296 184 306.766 184 320S173.234 344 160 344S136 333.234 136 320S146.766 296 160 296ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.594 12.406 32 8 32S0 35.594 0 40V408C0 447.688 32.312 480 72 480H504C508.406 480 512 476.406 512 472S508.406 464 504 464Z" })
  }
));
ChartScatterThin.displayName = "ChartScatterThin";
var ChartScatter_default = ChartScatterThin;
