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
const CommandThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 320H304V192H368C412.184 192 448 156.184 448 112S412.184 32 368 32S288 67.816 288 112V176H160V112C160 67.816 124.184 32 80 32S0 67.816 0 112S35.816 192 80 192H144V320H80C35.816 320 0 355.816 0 400S35.816 480 80 480S160 444.184 160 400V336H288V400C288 444.184 323.816 480 368 480S448 444.184 448 400S412.184 320 368 320ZM304 112C304 76.711 332.711 48 368 48S432 76.711 432 112S403.289 176 368 176H304V112ZM80 176C44.711 176 16 147.289 16 112S44.711 48 80 48S144 76.711 144 112V176H80ZM144 400C144 435.289 115.289 464 80 464S16 435.289 16 400S44.711 336 80 336H144V400ZM160 320V192H288V320H160ZM368 464C332.711 464 304 435.289 304 400V336H368C403.289 336 432 364.711 432 400S403.289 464 368 464Z" })
  }
));
CommandThin.displayName = "CommandThin";
var Command_default = CommandThin;
