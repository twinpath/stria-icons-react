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
var DiceD4_exports = {};
__export(DiceD4_exports, {
  default: () => DiceD4_default
});
module.exports = __toCommonJS(DiceD4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD4Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M231.627 0C235.77 0 239.812 3.31 239.812 8.524V503.457C239.812 508.529 235.856 512 231.66 512C229.936 512 228.171 511.414 226.624 510.113L3.026 321.302C1.037 319.621 0 317.154 0 314.66C0 312.844 0.55 311.012 1.682 309.459L225.281 3.337C226.971 1.031 229.315 0 231.627 0ZM512 314.66C512 317.154 510.963 319.621 508.974 321.302L285.376 510.113C283.829 511.414 282.064 512 280.34 512C276.144 512 272.188 508.529 272.188 503.457V8.524C272.188 3.31 276.23 0 280.373 0C282.685 0 285.029 1.031 286.719 3.337L510.318 309.459C511.45 311.012 512 312.844 512 314.66Z " })
  }
));
DiceD4Solid.displayName = "DiceD4Solid";
var DiceD4_default = DiceD4Solid;
