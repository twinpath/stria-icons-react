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
var GamepadModern_exports = {};
__export(GamepadModern_exports, {
  default: () => GamepadModern_default
});
module.exports = __toCommonJS(GamepadModern_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GamepadModernThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M638.594 368.215L605.219 156.614C596.375 106.362 556.812 65.845 504.563 53.485H504.5C454.25 41.625 371.594 32 320 32C268.375 32 185.719 41.625 135.5 53.485C83.156 65.845 43.625 106.346 34.781 156.614L1.406 368.215C-8.906 426.733 38.813 480 101.5 480C151.188 480 195.281 449.936 211 405.357L218.5 383.997H421.5L429 405.357C444.719 449.936 488.813 480 538.5 480C601.187 480 648.906 426.733 638.594 368.215ZM605.738 433.373C589.406 452.835 564.9 463.999 538.5 463.999C495.52 463.999 457.58 438.295 444.096 400.056L432.84 367.996H207.16L195.91 400.036C182.42 438.295 144.48 463.999 101.5 463.999C75.102 463.999 50.594 452.835 34.262 433.373C19.291 415.537 13.219 393.38 17.211 370.707L50.539 159.387C58.277 115.401 93.07 79.947 139.178 69.056C188.342 57.446 269.459 48.001 320 48.001C370.51 48.001 451.627 57.446 500.824 69.056L501.975 69.322C547.502 80.517 581.783 115.761 589.414 159.106L622.836 370.992C626.781 393.38 620.709 415.537 605.738 433.373ZM256 216.006H200V160.004C200 155.598 196.406 152.004 192 152.004S184 155.598 184 160.004V216.006H128C123.594 216.006 120 219.6 120 224.007S123.594 232.007 128 232.007H184V288.009C184 292.415 187.594 296.009 192 296.009S200 292.415 200 288.009V232.007H256C260.406 232.007 264 228.413 264 224.007S260.406 216.006 256 216.006ZM496 136.004C473.908 136.004 456 153.914 456 176.005S473.908 216.006 496 216.006C518.092 216.006 536 198.096 536 176.005S518.092 136.004 496 136.004ZM496 200.006C482.766 200.006 472 189.24 472 176.005S482.766 152.004 496 152.004S520 162.77 520 176.005S509.234 200.006 496 200.006ZM432 232.007C409.908 232.007 392 249.918 392 272.008C392 294.099 409.908 312.01 432 312.01S472 294.099 472 272.008C472 249.918 454.092 232.007 432 232.007ZM432 296.009C418.766 296.009 408 285.243 408 272.008S418.766 248.008 432 248.008S456 258.774 456 272.008S445.234 296.009 432 296.009Z" })
  }
));
GamepadModernThin.displayName = "GamepadModernThin";
var GamepadModern_default = GamepadModernThin;
