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
var TurnUp_exports = {};
__export(TurnUp_exports, {
  default: () => TurnUp_default
});
module.exports = __toCommonJS(TurnUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurnUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M313.364 118.34L211.117 8.25C206.211 3 199.274 0 191.993 0C184.712 0 177.775 3 172.9 8.25L70.622 118.34C63.873 125.621 62.123 135.746 66.06 144.746C70.154 154.152 79.247 159.995 89.747 159.995H183.993V440.002C183.993 470.876 158.869 496 127.995 496H8C3.594 496 0 499.594 0 504S3.594 512 8 512H127.995C167.682 512 199.993 479.688 199.993 440.002V159.995H294.24C304.739 159.995 313.833 154.152 317.926 144.746C321.864 135.746 320.114 125.621 313.364 118.34ZM303.27 138.34C301.739 141.902 298.364 143.996 294.24 143.996H89.747C85.622 143.996 82.247 141.902 80.716 138.34C80.06 136.84 78.903 132.933 82.372 129.215L184.618 19.124C188.306 15.125 195.649 15.125 199.399 19.124L301.614 129.215C305.083 132.933 303.927 136.84 303.27 138.34Z" })
  }
));
TurnUpThin.displayName = "TurnUpThin";
var TurnUp_default = TurnUpThin;
