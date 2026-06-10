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
var CircleCheck_exports = {};
__export(CircleCheck_exports, {
  default: () => CircleCheck_default
});
module.exports = __toCommonJS(CircleCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM371.812 211.812L243.812 339.812C238.344 345.281 231.156 348 224 348S209.656 345.281 204.188 339.812L140.188 275.812C129.281 264.875 129.281 247.125 140.188 236.188C151.125 225.25 168.875 225.25 179.812 236.188L224 280.406L332.188 172.188C343.125 161.25 360.875 161.25 371.812 172.188C382.719 183.125 382.719 200.875 371.812 211.812Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M371.805 211.812L243.805 339.812C238.336 345.281 231.148 348 223.992 348S209.648 345.281 204.18 339.812L140.18 275.812C129.273 264.875 129.273 247.125 140.18 236.188C151.117 225.25 168.867 225.25 179.805 236.188L223.992 280.406L332.18 172.188C343.117 161.25 360.867 161.25 371.805 172.188C382.711 183.125 382.711 200.875 371.805 211.812Z" })
    ]
  }
));
CircleCheckDuotone.displayName = "CircleCheckDuotone";
var CircleCheck_default = CircleCheckDuotone;
