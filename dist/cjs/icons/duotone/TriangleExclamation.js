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
var TriangleExclamation_exports = {};
__export(TriangleExclamation_exports, {
  default: () => TriangleExclamation_default
});
module.exports = __toCommonJS(TriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleExclamationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M506.274 417L292.95 53C276.618 25 235.397 25 218.954 53L5.741 417C-10.591 444.891 9.852 480 42.741 480H469.276C502.051 480 522.606 445 506.274 417ZM232.001 168C232.001 154.75 242.751 144 256.001 144S280.001 154.75 280.001 168V296C280.001 309.25 269.251 320 256.001 320S232.001 309.25 232.001 296V168ZM256.001 416C238.637 416 224.563 401.924 224.563 384.561C224.563 367.199 238.637 353.123 256.001 353.123S287.438 367.199 287.438 384.561C287.438 401.924 273.364 416 256.001 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.438 320C269.688 320 280.438 309.25 280.438 296V168C280.438 154.75 269.688 144 256.438 144S232.438 154.75 232.438 168V296C232.438 309.25 243.188 320 256.438 320ZM256.438 353.123C239.074 353.123 225 367.199 225 384.561C225 401.924 239.074 416 256.438 416S287.875 401.924 287.875 384.561C287.875 367.199 273.801 353.123 256.438 353.123Z" })
    ]
  }
));
TriangleExclamationDuotone.displayName = "TriangleExclamationDuotone";
var TriangleExclamation_default = TriangleExclamationDuotone;
