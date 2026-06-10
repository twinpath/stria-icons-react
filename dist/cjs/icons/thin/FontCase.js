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
var FontCase_exports = {};
__export(FontCase_exports, {
  default: () => FontCase_default
});
module.exports = __toCommonJS(FontCase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FontCaseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632.017 159.642C627.605 159.642 624.034 163.24 624.034 167.651V218.216C603.943 183.388 566.822 159.642 523.906 159.642C459.888 159.642 407.812 211.888 407.812 276.116V363.526C407.812 427.754 459.888 480 523.906 480C566.822 480 603.943 456.255 624.034 421.427V471.991C624.034 476.402 627.605 480 632.017 480C636.43 480 640 476.402 640 471.991V167.651C640 163.24 636.43 159.642 632.017 159.642ZM624.034 363.526C624.034 418.932 579.115 463.982 523.906 463.982C468.697 463.982 423.778 418.932 423.778 363.526V276.116C423.778 220.711 468.697 175.66 523.906 175.66C579.115 175.66 624.034 220.711 624.034 276.116V363.526ZM168.188 36.599L0.548 469.082C-1.057 473.211 0.985 477.841 5.086 479.468C6.037 479.812 7.019 480 7.986 480C11.182 480 14.191 478.06 15.423 474.901L56.908 367.875H294.33L335.811 474.901C337.417 479.03 342.063 480.939 346.148 479.468C350.249 477.841 352.291 473.211 350.685 469.082L183.062 36.599C180.692 30.467 170.557 30.467 168.188 36.599ZM63.115 351.857L175.625 61.596L288.123 351.857H63.115Z" })
  }
));
FontCaseThin.displayName = "FontCaseThin";
var FontCase_default = FontCaseThin;
