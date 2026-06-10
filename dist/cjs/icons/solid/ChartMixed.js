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
const ChartMixedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.625 92.625C516 94.75 521.875 96 528 96C554.5 96 576 74.5 576 48S554.5 0 528 0S480 21.5 480 48C480 50.375 480.375 52.75 480.75 55.125L385.375 131.375C380 129.25 374.125 128 368 128S356 129.25 350.625 131.375L255.25 55.125C255.625 52.75 256 50.375 256 48C256 21.5 234.5 0 208 0S160 21.5 160 48C160 52.25 160.75 56.375 161.75 60.25L60.25 161.75C56.375 160.75 52.25 160 48 160C21.5 160 0 181.5 0 208S21.5 256 48 256S96 234.5 96 208C96 203.75 95.25 199.625 94.25 195.75L195.75 94.25C199.625 95.25 203.75 96 208 96C214.125 96 220 94.75 225.375 92.625L320.75 168.875C320.375 171.25 320 173.625 320 176C320 202.5 341.5 224 368 224S416 202.5 416 176C416 173.625 415.625 171.25 415.25 168.875L510.625 92.625ZM384 320H352C334.327 320 320 334.327 320 352V480C320 497.673 334.327 512 352 512H384C401.673 512 416 497.673 416 480V352C416 334.327 401.673 320 384 320ZM544 192H512C494.327 192 480 206.327 480 224V480C480 497.673 494.327 512 512 512H544C561.673 512 576 497.673 576 480V224C576 206.327 561.673 192 544 192ZM224 192H192C174.327 192 160 206.327 160 224V480C160 497.673 174.327 512 192 512H224C241.673 512 256 497.673 256 480V224C256 206.327 241.673 192 224 192ZM64 352H32C14.327 352 0 366.327 0 384V480C0 497.673 14.327 512 32 512H64C81.673 512 96 497.673 96 480V384C96 366.327 81.673 352 64 352Z" })
  }
));
ChartMixedSolid.displayName = "ChartMixedSolid";
var ChartMixed_default = ChartMixedSolid;
