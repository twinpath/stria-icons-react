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
var Pills_exports = {};
__export(Pills_exports, {
  default: () => Pills_default
});
module.exports = __toCommonJS(Pills_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PillsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M299.755 226.25C296.255 222.75 290.255 223.25 287.38 227.125C242.129 289.625 247.004 377.25 303.255 433.5C359.631 489.75 447.257 494.75 509.758 449.375C513.758 446.5 514.008 440.625 510.508 437.125L299.755 226.25ZM529.509 207.25C473.258 151 385.631 146.125 323.13 191.375C319.13 194.25 318.755 200.25 322.255 203.75L533.134 414.5C536.634 418.001 542.509 417.625 545.384 413.75C590.76 351.125 585.885 263.625 529.509 207.25ZM112.002 32C50.126 32 0 82.125 0 144V256H224.004V144C224.004 82.125 173.878 32 112.002 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.004 256V368C224.004 429.875 173.878 480 112.002 480S0 429.875 0 368V256H224.004Z" })
    ]
  }
));
PillsDuotone.displayName = "PillsDuotone";
var Pills_default = PillsDuotone;
