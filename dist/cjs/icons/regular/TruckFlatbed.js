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
const TruckFlatbedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 368H608V251.875C608 232.826 600.434 214.557 586.963 201.088L503 117.125C489.475 103.598 471.129 96 452 96H400C382.326 96 368 110.326 368 128V368H242.75C226.125 339.375 195.5 320 160 320S93.875 339.375 77.25 368H24C10.746 368 0 378.744 0 392C0 405.254 10.746 416 24 416H64C64 469 107 512 160 512S256 469 256 416H384C384 469 427 512 480 512S576 469 576 416H616C629.199 416 640 405.199 640 392C640 378.799 629.199 368 616 368ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368S208 389.5 208 416S186.5 464 160 464ZM416 144H452.125C458.375 144 464.625 146.625 469.125 151L542.125 224H416V144ZM480 464C453.5 464 432 442.5 432 416S453.5 368 480 368S528 389.5 528 416S506.5 464 480 464ZM560 363.125C542.75 337.25 513.375 320 480 320C455.25 320 433 329.625 416 344.875V272H560V363.125Z" })
  }
));
TruckFlatbedRegular.displayName = "TruckFlatbedRegular";
var TruckFlatbed_default = TruckFlatbedRegular;
