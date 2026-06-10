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
const CarRearDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M377.188 117.881C372.828 104.793 360.627 96 346.832 96H165.25C151.455 96 139.254 104.793 134.895 117.881L110.191 192H401.891L377.188 117.881ZM447.939 400H383.949V448C383.949 465.672 398.273 480 415.943 480H447.939C465.607 480 479.934 465.672 479.934 448V391.123C470.49 396.621 459.654 400 447.939 400ZM32 391.123V448C32 465.672 46.326 480 63.994 480H95.99C113.66 480 127.986 465.672 127.986 448V400H63.994C52.279 400 41.443 396.621 32 391.123Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M470.795 196.371L437.895 97.643C424.824 58.441 388.146 32 346.828 32H165.246C123.928 32 87.25 58.441 74.18 97.643L41.279 196.371C17.229 205.576 0.074 228.709 0.074 256H0V336C0 371.346 28.65 400 63.99 400H447.936C483.275 400 511.926 371.346 511.926 336V256H512C512 228.709 494.846 205.576 470.795 196.371ZM134.891 117.881C139.25 104.793 151.451 96 165.246 96H346.828C360.623 96 372.824 104.793 377.184 117.881L401.887 192H110.188L134.891 117.881ZM104 304H72C58.744 304 48 293.254 48 280S58.744 256 72 256H104C117.254 256 128 266.746 128 280S117.254 304 104 304ZM320 320C320 328.836 312.836 336 304 336H208C199.164 336 192 328.836 192 320V288C192 279.162 199.164 272 208 272H304C312.836 272 320 279.162 320 288V320ZM440 304H408C394.744 304 384 293.254 384 280S394.744 256 408 256H440C453.254 256 464 266.746 464 280S453.254 304 440 304Z" })
    ]
  }
));
CarRearDuotone.displayName = "CarRearDuotone";
var CarRear_default = CarRearDuotone;
