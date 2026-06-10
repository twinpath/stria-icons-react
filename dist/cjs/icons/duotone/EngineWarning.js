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
var EngineWarning_exports = {};
__export(EngineWarning_exports, {
  default: () => EngineWarning_default
});
module.exports = __toCommonJS(EngineWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EngineWarningDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M392 64H216C202.746 64 192 74.744 192 88C192 101.254 202.746 112 216 112H280V144H328V112H392C405.254 112 416 101.254 416 88C416 74.744 405.254 64 392 64ZM48 168C48 154.744 37.254 144 24 144S0 154.744 0 168V360C0 373.254 10.746 384 24 384S48 373.254 48 360V288H80V240H48V168ZM608 192H576C558.326 192 544 206.326 544 224V416C544 433.672 558.326 448 576 448H608C625.674 448 640 433.672 640 416V224C640 206.326 625.674 192 608 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.999 211.5L434.723 154.498C426.223 147.703 415.664 144 404.781 144H128C101.49 144 80 165.49 80 192V336C80 362.51 101.49 384 128 384H169.375L219.32 433.945C228.32 442.943 240.523 448 253.25 448H464C490.51 448 512 426.51 512 400V223.98C512 219.125 509.793 214.531 505.999 211.5ZM281.846 206.154C281.846 193.922 291.77 184 304 184S326.154 193.922 326.154 206.154V297.846C326.154 310.076 316.23 320 304 320S281.846 310.076 281.846 297.846V206.154ZM304 397.539C287.688 397.539 274.461 384.312 274.461 368C274.461 351.686 287.688 338.461 304 338.461S333.539 351.686 333.539 368C333.539 384.312 320.312 397.539 304 397.539Z" })
    ]
  }
));
EngineWarningDuotone.displayName = "EngineWarningDuotone";
var EngineWarning_default = EngineWarningDuotone;
