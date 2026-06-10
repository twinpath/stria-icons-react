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
var CasetteBetamax_exports = {};
__export(CasetteBetamax_exports, {
  default: () => CasetteBetamax_default
});
module.exports = __toCommonJS(CasetteBetamax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteBetamaxThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.656 32 0 60.654 0 96V416C0 451.346 28.656 480 64 480H512C547.344 480 576 451.346 576 416V96C576 60.654 547.344 32 512 32ZM560 416C560 442.467 538.469 464 512 464H64C37.531 464 16 442.467 16 416V144H560V416ZM560 128H16V96C16 69.533 37.531 48 64 48H512C538.469 48 560 69.533 560 96V128ZM160 400C213.02 400 256 357.02 256 304S213.02 208 160 208S64 250.98 64 304S106.98 400 160 400ZM160 224C204.111 224 240 259.889 240 304S204.111 384 160 384S80 348.111 80 304S115.889 224 160 224ZM160 336C177.674 336 192 321.672 192 304C192 286.326 177.674 272 160 272S128 286.326 128 304C128 321.672 142.326 336 160 336ZM160 288C168.822 288 176 295.178 176 304S168.822 320 160 320S144 312.822 144 304S151.178 288 160 288ZM336 400H496C504.836 400 512 392.836 512 384V224C512 215.162 504.836 208 496 208H336C327.164 208 320 215.162 320 224V384C320 392.836 327.164 400 336 400ZM336 224H496V384H336V224Z" })
  }
));
CasetteBetamaxThin.displayName = "CasetteBetamaxThin";
var CasetteBetamax_default = CasetteBetamaxThin;
