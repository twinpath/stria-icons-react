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
var Ornament_exports = {};
__export(Ornament_exports, {
  default: () => Ornament_default
});
module.exports = __toCommonJS(Ornament_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OrnamentDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M372.598 256H11.402C4.266 276.057 0 297.479 0 320C0 342.477 4.062 363.955 11.16 384H372.84C379.938 363.955 384 342.477 384 320C384 297.479 379.734 276.057 372.598 256ZM191.938 96C174.443 96 159.949 81.5 159.949 64S174.443 32 191.938 32S223.928 46.5 223.928 64S209.432 96 191.938 96H247.045C252.543 86.625 255.918 75.75 255.918 64C255.918 28.75 227.176 0 191.938 0S127.959 28.75 127.959 64C127.959 75.75 131.332 86.625 136.83 96H191.938Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.84 153.896V112C287.84 103.164 280.678 96 271.84 96H111.84C103.004 96 95.84 103.164 95.84 112V153.896C56.686 176.576 26.615 212.799 11.242 256H372.437C357.064 212.799 326.994 176.576 287.84 153.896ZM11 384C37.385 458.523 108.277 512 191.84 512S346.295 458.523 372.68 384H11Z" })
    ]
  }
));
OrnamentDuotone.displayName = "OrnamentDuotone";
var Ornament_default = OrnamentDuotone;
