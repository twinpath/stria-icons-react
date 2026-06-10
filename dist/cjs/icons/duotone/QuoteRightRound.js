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
var QuoteRightRound_exports = {};
__export(QuoteRightRound_exports, {
  default: () => QuoteRightRound_default
});
module.exports = __toCommonJS(QuoteRightRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteRightRoundDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 256C117.998 256 123.77 255.143 129.514 254.234L128 256V320C128 355.25 99.25 384 64 384H56C42.75 384 32 394.75 32 408V456C32 469.25 42.75 480 56 480H64C152.375 480 224 408.375 224 320V144C224 82.145 173.855 32 112 32S0 82.145 0 144S50.145 256 112 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 256C405.998 256 411.77 255.143 417.514 254.234L416 256V320C416 355.25 387.25 384 352 384H344C330.75 384 320 394.75 320 408V456C320 469.25 330.75 480 344 480H352C440.375 480 512 408.375 512 320V144C512 82.145 461.855 32 400 32S288 82.145 288 144S338.145 256 400 256Z" })
    ]
  }
));
QuoteRightRoundDuotone.displayName = "QuoteRightRoundDuotone";
var QuoteRightRound_default = QuoteRightRoundDuotone;
