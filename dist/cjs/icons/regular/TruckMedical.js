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
const TruckMedicalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 368H608V251.875C608 232.826 600.434 214.557 586.963 201.088L503 117.125C489.475 103.598 471.129 96 452 96H416V56C416 25.072 390.928 0 360 0H56C25.072 0 0 25.072 0 56V360C0 390.928 25.072 416 56 416H64C64 469 107 512 160 512S256 469 256 416H384C384 469 427 512 480 512S576 469 576 416H616C629.199 416 640 405.199 640 392C640 378.799 629.199 368 616 368ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368S208 389.5 208 416S186.5 464 160 464ZM368 368H242.75C226.125 339.375 195.5 320 160 320S93.875 339.375 77.25 368H56C51.625 368 48 364.375 48 360V56C48 51.625 51.625 48 56 48H360C364.375 48 368 51.625 368 56V368ZM416 144H452.125C458.375 144 464.625 146.625 469.125 151L542.125 224H416V144ZM480 464C453.5 464 432 442.5 432 416S453.5 368 480 368S528 389.5 528 416S506.5 464 480 464ZM560 363.125C542.75 337.25 513.375 320 480 320C455.25 320 433 329.625 416 344.875V272H560V363.125ZM288 144H240V96C240 87.162 232.836 80 224 80H192C183.164 80 176 87.162 176 96V144H128C119.164 144 112 151.162 112 160V192C112 200.836 119.164 208 128 208H176V256C176 264.836 183.164 272 192 272H224C232.836 272 240 264.836 240 256V208H288C296.836 208 304 200.836 304 192V160C304 151.162 296.836 144 288 144Z" })
  }
));
TruckMedicalRegular.displayName = "TruckMedicalRegular";
var TruckMedical_default = TruckMedicalRegular;
