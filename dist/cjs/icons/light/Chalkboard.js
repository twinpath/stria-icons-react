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
var Chalkboard_exports = {};
__export(Chalkboard_exports, {
  default: () => Chalkboard_default
});
module.exports = __toCommonJS(Chalkboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChalkboardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 448H416V400C416 373.531 394.469 352 368 352H272C245.531 352 224 373.531 224 400V448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H560C568.844 480 576 472.844 576 464S568.844 448 560 448ZM384 448H256V400C256 391.188 263.172 384 272 384H368C376.828 384 384 391.188 384 400V448ZM45.322 383.783C55.352 385.404 64 377.721 64 368V80C64 71.162 71.164 64 80 64H496C504.836 64 512 71.162 512 80V368C512 376.836 519.164 384 528 384S544 376.836 544 368V80C544 53.49 522.51 32 496 32H80C53.49 32 32 53.49 32 80V367.166C32 375.135 37.455 382.512 45.322 383.783Z" })
  }
));
ChalkboardLight.displayName = "ChalkboardLight";
var Chalkboard_default = ChalkboardLight;
