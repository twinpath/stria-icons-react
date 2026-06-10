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
var Avocado_exports = {};
__export(Avocado_exports, {
  default: () => Avocado_default
});
module.exports = __toCommonJS(Avocado_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AvocadoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M371.465 -0.002C332.26 -0.002 292.748 15.736 263.406 45.174L263.24 45.34C232.203 76.479 192.977 97.303 150.633 108.908C115.363 118.574 0 170.828 0 306.705C0 420.113 92.354 511.998 205.062 511.998C257.432 511.998 309.799 491.957 349.754 451.871C417.402 384.008 392.312 321.854 465.736 248.189L470.094 243.818C498.031 215.789 512 179.053 512 142.318C512 70.266 455.557 -0.002 371.465 -0.002ZM200.422 383.998C145.908 383.998 127.928 340.414 127.928 311.34C127.928 250.588 186.564 191.998 247 191.998C301.516 191.998 319.498 235.586 319.498 264.66C319.498 325.395 260.867 383.998 200.422 383.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.571 264.66C319.571 325.396 260.939 383.999 200.495 383.999C145.981 383.999 128 340.414 128 311.341C128 250.588 186.637 191.999 247.073 191.999C301.588 191.999 319.571 235.586 319.571 264.66Z" })
    ]
  }
));
AvocadoDuotone.displayName = "AvocadoDuotone";
var Avocado_default = AvocadoDuotone;
