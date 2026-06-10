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
var Snooze_exports = {};
__export(Snooze_exports, {
  default: () => Snooze_default
});
module.exports = __toCommonJS(Snooze_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnoozeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176.001 32H268.374L164.032 149.375C159.845 154.094 158.814 160.812 161.407 166.562C164.001 172.312 169.688 176 176.001 176H303.999C312.843 176 319.999 168.844 319.999 160S312.843 144 303.999 144H211.625L315.968 26.625C320.155 21.906 321.186 15.187 318.592 9.437S310.311 0 303.999 0H176.001C167.157 0 160.001 7.156 160.001 16S167.157 32 176.001 32ZM431.997 400H337.28L444.497 266C448.341 261.188 449.091 254.625 446.403 249.062C443.747 243.531 438.153 240 431.997 240H303.999C295.155 240 287.999 247.156 287.999 256S295.155 272 303.999 272H398.716L291.499 406C287.655 410.812 286.905 417.375 289.593 422.938C292.249 428.469 297.843 432 303.999 432H431.997C440.841 432 447.997 424.844 447.997 416S440.841 400 431.997 400ZM208 240H48.003C39.159 240 32.003 247.156 32.003 256S39.159 272 48.003 272H174.72L3.503 486C-0.34 490.812 -1.09 497.375 1.597 502.938C4.253 508.469 9.847 512 16.003 512H192.001C200.844 512 208 504.844 208 496S200.844 480 192.001 480H49.284L220.5 266C224.344 261.188 225.094 254.625 222.406 249.062C219.75 243.531 214.156 240 208 240Z" })
  }
));
SnoozeLight.displayName = "SnoozeLight";
var Snooze_default = SnoozeLight;
