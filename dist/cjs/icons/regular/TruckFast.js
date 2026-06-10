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
const TruckFastRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 368H608V251.875C608 232.875 600.25 214.375 586.875 201L502.911 117.036C489.442 103.567 471.174 96 452.125 96H416V56C416 25.072 390.928 0 360 0H120C89.072 0 64 25.072 64 56V96H16C7.2 96 0 103.2 0 112V112C0 120.8 7.2 128 16 128H240C248.8 128 256 120.8 256 112V112C256 103.2 248.8 96 240 96H112V56C112 51.6 115.6 48 120 48H360C364.4 48 368 51.6 368 56V368H242.75C226.125 339.375 195.5 320 160 320C142.375 320 126.25 325.125 112 333.25V288H64L64 412.802C64 465.646 105.324 510.991 158.158 511.983C212 512.993 256 469.613 256 416H384C384 469 427 512 480 512S576 469 576 416H616C629.2 416 640 405.2 640 392V392C640 378.8 629.2 368 616 368ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368S208 389.5 208 416S186.5 464 160 464ZM416 144H452.125C458.375 144 464.625 146.625 469.125 151L542.125 224H416V144ZM480 464C453.5 464 432 442.5 432 416S453.5 368 480 368S528 389.5 528 416S506.5 464 480 464ZM560 363.125C542.75 337.25 513.375 320 480 320C455.25 320 433 329.625 416 344.875V272H560V363.125ZM256 240V240C256 231.2 248.8 224 240 224H16C7.2 224 0 231.2 0 240V240C0 248.8 7.2 256 16 256H240C248.8 256 256 248.8 256 240ZM272 192C280.8 192 288 184.8 288 176V176C288 167.2 280.8 160 272 160H48C39.2 160 32 167.2 32 176V176C32 184.8 39.2 192 48 192H272Z" })
  }
));
TruckFastRegular.displayName = "TruckFastRegular";
var TruckFast_default = TruckFastRegular;
