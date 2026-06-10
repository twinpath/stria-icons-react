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
var CarRear_exports = {};
__export(CarRear_exports, {
  default: () => CarRear_default
});
module.exports = __toCommonJS(CarRear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarRearSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M470.789 196.371L437.883 97.643C424.813 58.441 388.129 32 346.805 32H165.195C123.871 32 87.188 58.441 74.117 97.643L41.211 196.371C17.156 205.576 0 228.709 0 256V336C0 359.629 12.953 380.037 32 391.123V448C32 465.672 46.328 480 64 480H96C113.672 480 128 465.672 128 448V400H384V448C384 465.672 398.328 480 416 480H448C465.672 480 480 465.672 480 448V391.123C499.047 380.037 512 359.629 512 336V256C512 228.709 494.844 205.576 470.789 196.371ZM103.926 304H71.926C58.67 304 47.926 293.254 47.926 280S58.67 256 71.926 256H103.926C117.18 256 127.926 266.746 127.926 280S117.18 304 103.926 304ZM110.129 192L134.836 117.881C139.195 104.793 151.398 96 165.195 96H346.805C360.602 96 372.805 104.793 377.164 117.881L401.871 192H110.129ZM319.926 320C319.926 328.836 312.762 336 303.926 336H207.926C199.09 336 191.926 328.836 191.926 320V288C191.926 279.162 199.09 272 207.926 272H303.926C312.762 272 319.926 279.162 319.926 288V320ZM439.926 304H407.926C394.67 304 383.926 293.254 383.926 280S394.67 256 407.926 256H439.926C453.18 256 463.926 266.746 463.926 280S453.18 304 439.926 304Z" })
  }
));
CarRearSolid.displayName = "CarRearSolid";
var CarRear_default = CarRearSolid;
