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
var Command_exports = {};
__export(Command_exports, {
  default: () => Command_default
});
module.exports = __toCommonJS(Command_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommandLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 320H320V192H368C412.184 192 448 156.182 448 112C448 67.816 412.184 32 368 32S288 67.816 288 112V160H160V112C160 67.816 124.184 32 80 32S0 67.816 0 112C0 156.182 35.816 192 80 192H128V320H80C35.816 320 0 355.816 0 400C0 444.182 35.816 480 80 480S160 444.182 160 400V352H288V400C288 444.182 323.816 480 368 480S448 444.182 448 400C448 355.816 412.184 320 368 320ZM320 112C320 85.533 341.533 64 368 64S416 85.533 416 112S394.467 160 368 160H320V112ZM128 400C128 426.467 106.467 448 80 448S32 426.467 32 400S53.533 352 80 352H128V400ZM128 160H80C53.533 160 32 138.467 32 112S53.533 64 80 64S128 85.533 128 112V160ZM288 320H160V192H288V320ZM368 448C341.533 448 320 426.467 320 400V352H368C394.467 352 416 373.533 416 400S394.467 448 368 448Z" })
  }
));
CommandLight.displayName = "CommandLight";
var Command_default = CommandLight;
