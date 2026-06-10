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
var Engine_exports = {};
__export(Engine_exports, {
  default: () => Engine_default
});
module.exports = __toCommonJS(Engine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EngineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 192H576C558.344 192 544 206.359 544 224V256H512V208C512 203.141 509.781 198.547 505.999 195.5L434.781 138.547C426.312 131.75 415.656 128 404.781 128H304V96H384C392.836 96 400 88.836 400 80C400 71.162 392.836 64 384 64H192C183.164 64 176 71.162 176 80C176 88.836 183.164 96 192 96H272V128H112C85.531 128 64 149.531 64 176V240H32V144C32 135.162 24.836 128 16 128S0 135.162 0 144V368C0 376.836 7.164 384 16 384S32 376.836 32 368V272H64V336C64 362.469 85.531 384 112 384H153.375L203.313 433.938C212.25 442.875 224.625 448 237.25 448H464C490.469 448 512 426.469 512 400V384H544V416C544 433.641 558.344 448 576 448H608C625.656 448 640 433.641 640 416V224C640 206.359 625.656 192 608 192ZM480 400C480 408.828 472.812 416 464 416H237.25C233.031 416 228.906 414.297 225.938 411.312L171.313 356.688C168.312 353.688 164.25 352 160 352H112C103.188 352 96 344.828 96 336V176C96 167.172 103.188 160 112 160H404.781C408.406 160 411.938 161.234 414.75 163.516L480 215.688V400ZM608 416H576V368C576 359.156 568.844 352 560 352H512V288H560C568.844 288 576 280.844 576 272V224H608V416ZM192 232C178.746 232 168 242.744 168 256C168 269.254 178.746 280 192 280S216 269.254 216 256C216 242.744 205.254 232 192 232ZM288 232C274.746 232 264 242.744 264 256C264 269.254 274.746 280 288 280S312 269.254 312 256C312 242.744 301.254 232 288 232ZM384 232C370.746 232 360 242.744 360 256C360 269.254 370.746 280 384 280S408 269.254 408 256C408 242.744 397.254 232 384 232Z" })
  }
));
EngineLight.displayName = "EngineLight";
var Engine_default = EngineLight;
