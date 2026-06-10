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
var ChartMixed_exports = {};
__export(ChartMixed_exports, {
  default: () => ChartMixed_default
});
module.exports = __toCommonJS(ChartMixed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartMixedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 48C576 74.5 554.5 96 528 96C521.875 96 516 94.75 510.625 92.625L415.25 168.875C415.625 171.25 416 173.625 416 176C416 202.5 394.5 224 368 224S320 202.5 320 176C320 173.625 320.375 171.25 320.75 168.875L225.375 92.625C220 94.75 214.125 96 208 96C203.75 96 199.625 95.25 195.75 94.25L94.25 195.75C95.25 199.625 96 203.75 96 208C96 234.5 74.5 256 48 256S0 234.5 0 208S21.5 160 48 160C52.25 160 56.375 160.75 60.25 161.75L161.75 60.25C160.75 56.375 160 52.25 160 48C160 21.5 181.5 0 208 0S256 21.5 256 48C256 50.375 255.625 52.75 255.25 55.125L350.625 131.375C356 129.25 361.875 128 368 128S380 129.25 385.375 131.375L480.75 55.125C480.375 52.75 480 50.375 480 48C480 21.5 501.5 0 528 0S576 21.5 576 48Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 192H512C494.327 192 480 206.327 480 224V480C480 497.673 494.327 512 512 512H544C561.673 512 576 497.673 576 480V224C576 206.327 561.673 192 544 192ZM224 192H192C174.327 192 160 206.327 160 224V480C160 497.673 174.327 512 192 512H224C241.673 512 256 497.673 256 480V224C256 206.327 241.673 192 224 192ZM64 352H32C14.327 352 0 366.327 0 384V480C0 497.673 14.327 512 32 512H64C81.673 512 96 497.673 96 480V384C96 366.327 81.673 352 64 352ZM384 320H352C334.327 320 320 334.327 320 352V480C320 497.673 334.327 512 352 512H384C401.673 512 416 497.673 416 480V352C416 334.327 401.673 320 384 320Z" })
    ]
  }
));
ChartMixedDuotone.displayName = "ChartMixedDuotone";
var ChartMixed_default = ChartMixedDuotone;
