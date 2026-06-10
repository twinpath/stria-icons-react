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
var Omega_exports = {};
__export(Omega_exports, {
  default: () => Omega_default
});
module.exports = __toCommonJS(Omega_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OmegaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 472C448 476.422 444.422 480 440 480H288C283.578 480 280 476.422 280 472V440.812C280 437.281 282.312 434.172 285.688 433.156C373.203 406.656 432 331.141 432 245.25C432 136.484 338.688 48 224 48S16 136.484 16 245.25C16 331.141 74.797 406.656 162.312 433.156C165.688 434.172 168 437.281 168 440.812V472C168 476.422 164.422 480 160 480H8C3.578 480 0 476.422 0 472S3.578 464 8 464H152V446.672C60.828 416.609 0 336.375 0 245.25C0 127.656 100.484 32 224 32S448 127.656 448 245.25C448 336.375 387.172 416.609 296 446.672V464H440C444.422 464 448 467.578 448 472Z" })
  }
));
OmegaThin.displayName = "OmegaThin";
var Omega_default = OmegaThin;
