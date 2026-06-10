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
var Bed_exports = {};
__export(Bed_exports, {
  default: () => Bed_default
});
module.exports = __toCommonJS(Bed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 128H288C279.156 128 272 135.156 272 144V320H16V40C16 35.594 12.422 32 8 32S0 35.594 0 40V472C0 476.406 3.578 480 8 480S16 476.406 16 472V416H624V472C624 476.406 627.578 480 632 480S640 476.406 640 472V240C640 178.125 589.875 128 528 128ZM624 400H16V336H624V400ZM624 320H288V144H528C580.934 144 624 187.064 624 240V320ZM144 288C188.125 288 224 252.125 224 208S188.125 128 144 128S64 163.875 64 208S99.875 288 144 288ZM144 144C179.289 144 208 172.711 208 208S179.289 272 144 272S80 243.289 80 208S108.711 144 144 144Z" })
  }
));
BedThin.displayName = "BedThin";
var Bed_default = BedThin;
