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
var DisplayMedical_exports = {};
__export(DisplayMedical_exports, {
  default: () => DisplayMedical_default
});
module.exports = __toCommonJS(DisplayMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0H64C28.654 0 0 28.652 0 64V352C0 387.348 28.654 416 64 416H213.693L194.494 480H144C135.164 480 128 487.164 128 496S135.164 512 144 512H432C440.836 512 448 504.836 448 496S440.836 480 432 480H381.506L362.307 416H512C547.346 416 576 387.348 576 352V64C576 28.652 547.346 0 512 0ZM227.906 480L247.105 416H328.895L348.094 480H227.906ZM544 352C544 369.645 529.645 384 512 384H64C46.355 384 32 369.645 32 352V64C32 46.355 46.355 32 64 32H512C529.645 32 544 46.355 544 64V352ZM368 176H320V128C320 119.162 312.836 112 304 112H272C263.164 112 256 119.162 256 128V176H208C199.164 176 192 183.162 192 192V224C192 232.836 199.164 240 208 240H256V288C256 296.836 263.164 304 272 304H304C312.836 304 320 296.836 320 288V240H368C376.836 240 384 232.836 384 224V192C384 183.162 376.836 176 368 176Z" })
  }
));
DisplayMedicalLight.displayName = "DisplayMedicalLight";
var DisplayMedical_default = DisplayMedicalLight;
