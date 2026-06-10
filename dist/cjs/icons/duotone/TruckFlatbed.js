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
var TruckFlatbed_exports = {};
__export(TruckFlatbed_exports, {
  default: () => TruckFlatbed_default
});
module.exports = __toCommonJS(TruckFlatbed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckFlatbedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 352C131.816 352 96 387.816 96 432C96 476.182 131.816 512 176 512S256 476.182 256 432C256 387.816 220.184 352 176 352ZM464 352C419.816 352 384 387.816 384 432C384 476.182 419.816 512 464 512S544 476.182 544 432C544 387.816 508.184 352 464 352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 352H608V237.25C608 220.281 601.26 204.01 589.262 192.012L511.988 114.738C499.99 102.74 483.717 96 466.75 96H384C366.326 96 352 110.326 352 128V288H32C14.326 288 0 302.326 0 320V384C0 401.672 14.326 416 32 416H66.158C74.027 361.926 119.777 320 176 320C232.279 320 278.535 361.861 286.383 416H353.617C361.465 361.861 407.721 320 464 320C520.223 320 565.973 361.926 573.842 416H624C632.801 416 640 408.799 640 400V368C640 359.203 632.812 352 624 352ZM544 256H416V160H466.75L544 237.25V256Z" })
    ]
  }
));
TruckFlatbedDuotone.displayName = "TruckFlatbedDuotone";
var TruckFlatbed_default = TruckFlatbedDuotone;
