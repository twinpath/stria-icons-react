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
var PhoneHangup_exports = {};
__export(PhoneHangup_exports, {
  default: () => PhoneHangup_default
});
module.exports = __toCommonJS(PhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneHangupDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 327.632L48.189 363.086L215.758 291.365L211.682 250.413L26 327.632ZM428.654 250.463L424.564 291.412L592.033 363.09L614.225 327.636L428.654 250.463Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.082 363.086L57.328 377.862C65.001 390.151 80.441 395.214 94.044 389.907L199.525 347.776C211.916 342.786 219.533 330.188 218.195 316.922L215.65 291.365L48.082 363.086ZM631.138 256.504C459.582 85.169 180.427 85.159 8.849 256.514C-1.118 266.468 -2.862 281.751 4.619 293.638L25.892 327.632L211.574 250.413C281.765 226.479 358.33 226.491 428.55 250.432L428.546 250.463L614.117 327.636L635.39 293.649C642.861 281.751 641.117 266.468 631.138 256.504ZM421.91 316.902C420.486 330.125 428.169 342.851 440.623 347.776L546.031 389.876C559.57 395.248 575.029 390.098 582.66 377.895L591.925 363.09L424.457 291.412L421.91 316.902Z" })
    ]
  }
));
PhoneHangupDuotone.displayName = "PhoneHangupDuotone";
var PhoneHangup_default = PhoneHangupDuotone;
