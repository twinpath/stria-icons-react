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
var GaugeSimpleMin_exports = {};
__export(GaugeSimpleMin_exports, {
  default: () => GaugeSimpleMin_default
});
module.exports = __toCommonJS(GaugeSimpleMin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeSimpleMinThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 320C256.566 320 229.141 336.689 213.572 361.543L81.5 336.141C77.156 335.375 72.969 338.156 72.156 342.484C71.312 346.828 74.156 351.016 78.5 351.859L206.109 376.402C202.301 386.24 200 396.832 200 408C200 412.422 203.594 416 208 416S216 412.422 216 408C216 368.297 248.312 336 288 336S360 368.297 360 408C360 412.422 363.594 416 368 416S376 412.422 376 408C376 359.469 336.531 320 288 320ZM288 32C129.188 32 0 161.203 0 320C0 375.094 16.25 429.156 46.938 476.359C48.438 478.625 50.938 480 53.656 480H522.344C525.062 480 527.562 478.625 529.062 476.359C559.75 429.156 576 375.094 576 320C576 161.203 446.812 32 288 32ZM517.969 464H58.031C30.531 420.281 16 370.578 16 320C16 170.016 138.031 48 288 48S560 170.016 560 320C560 370.578 545.469 420.281 517.969 464Z" })
  }
));
GaugeSimpleMinThin.displayName = "GaugeSimpleMinThin";
var GaugeSimpleMin_default = GaugeSimpleMinThin;
