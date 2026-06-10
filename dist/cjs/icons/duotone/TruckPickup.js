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
const TruckPickupDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 304C127.398 304 88 343.398 88 392C88 440.6 127.398 480 176 480S264 440.6 264 392C264 343.398 224.602 304 176 304ZM464 304C415.398 304 376 343.398 376 392C376 440.6 415.398 480 464 480S552 440.6 552 392C552 343.398 512.602 304 464 304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 288H608V224C608 206.375 593.625 192 576 192H528L419.25 56C407.125 40.875 388.625 32 369.25 32H256C238.375 32 224 46.375 224 64V192H64C46.375 192 32 206.375 32 224V288H16C7.125 288 0 295.125 0 304V336C0 344.875 7.125 352 16 352H63.348C79.879 305.498 123.828 272 176 272S272.121 305.498 288.652 352H351.348C367.879 305.498 411.828 272 464 272S560.121 305.498 576.652 352H624C632.875 352 640 344.875 640 336V304C640 295.125 632.875 288 624 288ZM288 192V96H369.25L445.999 192H288Z" })
    ]
  }
));
TruckPickupDuotone.displayName = "TruckPickupDuotone";
var TruckPickup_default = TruckPickupDuotone;
