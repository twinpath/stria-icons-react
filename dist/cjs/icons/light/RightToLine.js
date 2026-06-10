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
var RightToLine_exports = {};
__export(RightToLine_exports, {
  default: () => RightToLine_default
});
module.exports = __toCommonJS(RightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M356.5 283.344C363.812 276.469 368 266.5 368 256C368 245.5 363.812 235.531 356.344 228.5L223.453 106.281C212.531 95.937 196.547 93.125 182.687 99.062C168.906 105.062 160 118.594 160 133.594V192H44.828C20.109 192 0 212.094 0 236.812V275.187C0 299.906 20.109 320 44.828 320H160V378.406C160 393.406 168.906 406.937 182.75 412.937C196.547 418.875 212.531 416.062 223.297 405.875L356.5 283.344ZM195.437 383.562C193.344 382.656 192 380.625 192 378.406V288H44.828C37.75 288 32 282.25 32 275.187V236.812C32 229.75 37.75 224 44.828 224H192V133.594C192 131.375 193.344 129.344 195.375 128.437C197.453 127.562 199.844 128 201.641 129.687L334.531 251.906C336.344 253.656 336.187 258.5 334.687 259.937L201.484 382.469C199.844 384 197.453 384.437 195.437 383.562ZM416 80V432C416 440.844 423.156 448 432 448S448 440.844 448 432V80C448 71.156 440.844 64 432 64S416 71.156 416 80Z" })
  }
));
RightToLineLight.displayName = "RightToLineLight";
var RightToLine_default = RightToLineLight;
