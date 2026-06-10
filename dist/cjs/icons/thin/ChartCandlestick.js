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
var ChartCandlestick_exports = {};
__export(ChartCandlestick_exports, {
  default: () => ChartCandlestick_default
});
module.exports = __toCommonJS(ChartCandlestick_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartCandlestickThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 320H424V376C424 380.422 427.594 384 432 384S440 380.422 440 376V320H456C469.254 320 480 309.254 480 296V216C480 202.746 469.254 192 456 192H440V136C440 131.578 436.406 128 432 128S424 131.578 424 136V192H408C394.746 192 384 202.746 384 216V296C384 309.254 394.746 320 408 320ZM400 216C400 211.582 403.582 208 408 208H456C460.418 208 464 211.582 464 216V296C464 300.418 460.418 304 456 304H408C403.582 304 400 300.418 400 296V216ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.578 12.422 32 8 32S0 35.578 0 40V408C0 447.688 32.312 480 72 480H504C508.422 480 512 476.422 512 472S508.422 464 504 464ZM280 256H296V312C296 316.422 299.594 320 304 320S312 316.422 312 312V256H328C341.256 256 352 245.256 352 232V120C352 106.746 341.256 96 328 96H312V40C312 35.578 308.406 32 304 32S296 35.578 296 40V96H280C266.746 96 256 106.746 256 120V232C256 245.256 266.746 256 280 256ZM272 120C272 115.582 275.582 112 280 112H328C332.42 112 336 115.582 336 120V232C336 236.42 332.42 240 328 240H280C275.582 240 272 236.42 272 232V120ZM152 320H168V376C168 380.422 171.594 384 176 384S184 380.422 184 376V320H200C213.256 320 224 309.256 224 296V152C224 138.746 213.256 128 200 128H184V72C184 67.578 180.406 64 176 64S168 67.578 168 72V128H152C138.746 128 128 138.746 128 152V296C128 309.256 138.746 320 152 320ZM144 152C144 147.582 147.582 144 152 144H200C204.42 144 208 147.582 208 152V296C208 300.42 204.42 304 200 304H152C147.582 304 144 300.42 144 296V152Z" })
  }
));
ChartCandlestickThin.displayName = "ChartCandlestickThin";
var ChartCandlestick_default = ChartCandlestickThin;
