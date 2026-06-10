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
var CircleZ_exports = {};
__export(CircleZ_exports, {
  default: () => CircleZ_default
});
module.exports = __toCommonJS(CircleZ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleZDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 384H184C175.062 384 166.875 379.047 162.75 371.141C158.594 363.234 159.188 353.672 164.281 346.344L282.188 176H184C170.75 176 160 165.25 160 152S170.75 128 184 128H328C336.938 128 345.125 132.953 349.25 140.859C353.406 148.766 352.812 158.328 347.719 165.656L229.812 336H328C341.25 336 352 346.75 352 360S341.25 384 328 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328 336H229.812L347.719 165.656C352.812 158.328 353.406 148.766 349.25 140.859C345.125 132.953 336.938 128 328 128H184C170.75 128 160 138.75 160 152S170.75 176 184 176H282.188L164.281 346.344C159.188 353.672 158.594 363.234 162.75 371.141C166.875 379.047 175.062 384 184 384H328C341.25 384 352 373.25 352 360S341.25 336 328 336Z" })
    ]
  }
));
CircleZDuotone.displayName = "CircleZDuotone";
var CircleZ_default = CircleZDuotone;
