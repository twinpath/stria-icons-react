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
var TruckPickup_exports = {};
__export(TruckPickup_exports, {
  default: () => TruckPickup_default
});
module.exports = __toCommonJS(TruckPickup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckPickupSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 288H608V224C608 206.375 593.625 192 576 192H528L419.25 56C407.125 40.875 388.625 32 369.25 32H256C238.375 32 224 46.375 224 64V192H64C46.375 192 32 206.375 32 224V288H16C7.125 288 0 295.125 0 304V336C0 344.875 7.125 352 16 352H65.625C64.875 357.25 64 362.5 64 368C64 429.875 114.125 480 176 480S288 429.875 288 368C288 362.5 287.125 357.25 286.375 352H353.625C352.875 357.25 352 362.5 352 368C352 429.875 402.125 480 464 480S576 429.875 576 368C576 362.5 575.125 357.25 574.375 352H624C632.875 352 640 344.875 640 336V304C640 295.125 632.875 288 624 288ZM288 96H369.25L445.999 192H288V96ZM176 416C149.5 416 128 394.5 128 368S149.5 320 176 320S224 341.5 224 368S202.5 416 176 416ZM464 416C437.5 416 416 394.5 416 368S437.5 320 464 320S512 341.5 512 368S490.5 416 464 416Z" })
  }
));
TruckPickupSolid.displayName = "TruckPickupSolid";
var TruckPickup_default = TruckPickupSolid;
