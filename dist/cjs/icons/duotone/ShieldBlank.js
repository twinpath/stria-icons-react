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
var ShieldBlank_exports = {};
__export(ShieldBlank_exports, {
  default: () => ShieldBlank_default
});
module.exports = __toCommonJS(ShieldBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldBlankDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M237.594 3.672L45.594 83.682C27.688 91.073 16 108.575 16 127.983C16 161.88 19.557 193.835 25.625 224.002H256V0.008C250.686 0.02 242.484 1.646 237.594 3.672ZM256 224.002V512C295.098 511.963 447.699 420.071 486.504 224.002H256Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.33 512C256.345 512 256.36 512 256.375 512V224.002H26C65.788 421.762 216.238 512 256.33 512ZM466.875 83.682L274.875 3.672C270 1.641 261.719 0 256.438 0C256.42 0 256.393 0.008 256.375 0.008V224.002H486.879C492.768 194.251 496.375 162.447 496.375 127.983C496.375 108.575 484.688 91.073 466.875 83.682Z " })
    ]
  }
));
ShieldBlankDuotone.displayName = "ShieldBlankDuotone";
var ShieldBlank_default = ShieldBlankDuotone;
