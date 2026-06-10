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
var CowbellCirclePlus_exports = {};
__export(CowbellCirclePlus_exports, {
  default: () => CowbellCirclePlus_default
});
module.exports = __toCommonJS(CowbellCirclePlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CowbellCirclePlusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM432.002 480C370.244 480 320 429.758 320 368S370.244 256 432.002 256C493.758 256 544 306.242 544 368S493.758 480 432.002 480ZM496 352H448V304C448 295.164 440.836 288 432 288S416 295.164 416 304V352H368C359.164 352 352 359.164 352 368S359.164 384 368 384H416V432C416 440.836 423.164 448 432 448S448 440.836 448 432V384H496C504.836 384 512 376.836 512 368S504.836 352 496 352ZM288.004 480H48.023C35.434 480 31.102 468.18 32.229 461.375L85.568 141.375C86.85 133.625 93.49 128 101.35 128H346.647C354.467 128 361.141 133.652 362.426 141.367L368.639 178.633C369.924 186.334 376.586 192 384.418 192C394.303 192 401.822 183.123 400.197 173.373L393.984 136.102C390.127 112.961 370.106 96 346.647 96H320V48C320 21.49 298.51 0 272 0H176C149.49 0 128 21.49 128 48V96H101.35C77.773 96 57.867 112.875 54.008 136.125L0.666 456.125C-4.211 485.318 18.311 512 48.023 512H288.004C296.838 512 304 504.838 304 496.004V495.996C304 487.162 296.838 480 288.004 480ZM160 48C160 39.188 167.172 32 176 32H272C280.828 32 288 39.188 288 48V96H160V48Z" })
  }
));
CowbellCirclePlusLight.displayName = "CowbellCirclePlusLight";
var CowbellCirclePlus_default = CowbellCirclePlusLight;
