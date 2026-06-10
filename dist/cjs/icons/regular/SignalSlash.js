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
var SignalSlash_exports = {};
__export(SignalSlash_exports, {
  default: () => SignalSlash_default
});
module.exports = __toCommonJS(SignalSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.999 288C178.749 288 167.999 298.75 167.999 312V488C167.999 501.25 178.749 512 191.999 512S215.999 501.25 215.999 488V312C215.999 298.75 205.249 288 191.999 288ZM63.999 384C50.749 384 39.999 394.75 39.999 408V488C39.999 501.25 50.749 512 63.999 512S87.999 501.25 87.999 488V408C87.999 394.75 77.249 384 63.999 384ZM295.999 488C295.999 501.25 306.749 512 319.999 512S343.999 501.25 343.999 488V365.859L295.999 328.238V488ZM423.999 488C423.999 501.25 434.749 512 447.999 512S471.999 501.25 471.999 488V466.184L423.999 428.562V488ZM630.812 469.113L599.999 444.961V24C599.999 10.75 589.249 0 575.999 0S551.999 10.75 551.999 24V407.344L471.999 344.641V120C471.999 106.75 461.249 96 447.999 96S423.999 106.75 423.999 120V307.016L343.999 244.312V216C343.999 202.75 333.249 192 319.999 192C309.599 192 300.953 198.711 297.622 207.965L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.895C605.593 510.332 610.796 512.004 615.984 512.004C623.109 512.004 630.156 508.848 634.89 502.816C643.062 492.379 641.234 477.285 630.812 469.113Z" })
  }
));
SignalSlashRegular.displayName = "SignalSlashRegular";
var SignalSlash_default = SignalSlashRegular;
