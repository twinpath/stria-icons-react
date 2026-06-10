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
var TruckMedical_exports = {};
__export(TruckMedical_exports, {
  default: () => TruckMedical_default
});
module.exports = __toCommonJS(TruckMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 352H608V237.25C608 220.156 601.344 204.094 589.25 192L512 114.75C500.094 102.828 483.594 96 466.75 96H416V48C416 21.5 394.5 0 368 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H64C64 469 107 512 160 512S256 469 256 416H384C384 469 427 512 480 512S576 469 576 416H624C632.812 416 640 408.797 640 400V368C640 359.203 632.812 352 624 352ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368S208 389.5 208 416S186.5 464 160 464ZM304 184C304 188.375 300.375 192 296 192H240V248C240 252.375 236.375 256 232 256H184C179.625 256 176 252.375 176 248V192H120C115.625 192 112 188.375 112 184V136C112 131.625 115.625 128 120 128H176V72C176 67.625 179.625 64 184 64H232C236.375 64 240 67.625 240 72V128H296C300.375 128 304 131.625 304 136V184ZM480 464C453.5 464 432 442.5 432 416S453.5 368 480 368S528 389.5 528 416S506.5 464 480 464ZM544 256H416V160H466.75L544 237.25V256Z" })
  }
));
TruckMedicalSolid.displayName = "TruckMedicalSolid";
var TruckMedical_default = TruckMedicalSolid;
