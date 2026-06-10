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
var TruckFast_exports = {};
__export(TruckFast_exports, {
  default: () => TruckFast_default
});
module.exports = __toCommonJS(TruckFast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckFastSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 352H608V237.25C608 220.281 601.26 204.01 589.262 192.012L511.988 114.738C499.99 102.74 483.717 96 466.75 96H416V48C416 21.49 394.51 0 368 0H112C85.49 0 64 21.49 64 48V96H16C7.164 96 0 103.162 0 112C0 120.836 7.164 128 16 128H272C280.836 128 288 135.162 288 144C288 152.836 280.836 160 272 160H48C39.164 160 32 167.162 32 176C32 184.836 39.164 192 48 192H240C248.836 192 256 199.162 256 208C256 216.836 248.836 224 240 224H16C7.164 224 0 231.162 0 240C0 248.836 7.164 256 16 256H208C216.836 256 224 263.162 224 272C224 280.836 216.836 288 208 288H64V416C64 469 107 512 160 512S256 469 256 416H384C384 469 427 512 480 512S576 469 576 416H624C632.801 416 640 408.799 640 400V368C640 359.203 632.812 352 624 352ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368S208 389.5 208 416S186.5 464 160 464ZM480 464C453.5 464 432 442.5 432 416S453.5 368 480 368S528 389.5 528 416S506.5 464 480 464ZM544 256H416V160H466.75L544 237.25V256Z" })
  }
));
TruckFastSolid.displayName = "TruckFastSolid";
var TruckFast_default = TruckFastSolid;
