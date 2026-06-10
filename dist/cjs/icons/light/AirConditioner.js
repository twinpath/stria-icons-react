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
var AirConditioner_exports = {};
__export(AirConditioner_exports, {
  default: () => AirConditioner_default
});
module.exports = __toCommonJS(AirConditioner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirConditionerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 416C224 451.297 195.297 480 160 480C133.531 480 112 458.469 112 432S133.531 384 160 384C168.836 384 176 376.836 176 368S168.836 352 160 352C115.891 352 80 387.891 80 432S115.891 512 160 512C212.938 512 256 468.938 256 416V288H224V416ZM416 320C407.164 320 400 327.164 400 336S407.164 352 416 352C442.469 352 464 373.531 464 400S442.469 448 416 448C380.703 448 352 419.297 352 384V288H320V384C320 436.938 363.062 480 416 480C460.109 480 496 444.109 496 400S460.109 320 416 320ZM512 0H64C28.801 0 0 28.801 0 64V192C0 227.199 28.801 256 64 256H512C547.199 256 576 227.199 576 192V64C576 28.801 547.199 0 512 0ZM544 192C544 209.674 529.674 224 512 224H64C46.326 224 32 209.674 32 192V64C32 46.326 46.326 32 64 32H512C529.674 32 544 46.326 544 64V192ZM464 128H112C103.199 128 96 135.199 96 144S103.199 160 112 160H464C472.801 160 480 152.801 480 144S472.801 128 464 128Z" })
  }
));
AirConditionerLight.displayName = "AirConditionerLight";
var AirConditioner_default = AirConditionerLight;
