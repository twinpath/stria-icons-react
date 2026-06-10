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
var ChartUser_exports = {};
__export(ChartUser_exports, {
  default: () => ChartUser_default
});
module.exports = __toCommonJS(ChartUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320C213.02 320 256 277.016 256 224C256 170.98 213.02 128 160 128C106.982 128 64 170.98 64 224C64 277.016 106.982 320 160 320ZM160 144C204.111 144 240 179.887 240 224C240 268.111 204.111 304 160 304S80 268.111 80 224C80 179.887 115.889 144 160 144ZM584 0H216C185.125 0 160 25.125 160 56V88C160 92.406 163.594 96 168 96S176 92.406 176 88V56C176 33.938 193.938 16 216 16H584C606.062 16 624 33.938 624 56V360C624 382.062 606.062 400 584 400H344C339.594 400 336 403.594 336 408S339.594 416 344 416H584C614.875 416 640 390.875 640 360V56C640 25.125 614.875 0 584 0ZM192 352H128C57.307 352 0 409.305 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.305 262.693 352 192 352ZM288 496H32C23.178 496 16 488.822 16 480C16 418.242 66.242 368 128 368H192C253.758 368 304 418.242 304 480C304 488.822 296.822 496 288 496ZM309.656 170.344C306.531 167.219 301.469 167.219 298.344 170.344S295.219 178.531 298.344 181.656L378.344 261.656C379.906 263.219 381.938 264 384 264S388.094 263.219 389.656 261.656L512 139.312V216C512 220.406 515.594 224 520 224S528 220.406 528 216V120C528 115.594 524.406 112 520 112H424C419.594 112 416 115.594 416 120S419.594 128 424 128H500.688L384 244.688L309.656 170.344Z" })
  }
));
ChartUserThin.displayName = "ChartUserThin";
var ChartUser_default = ChartUserThin;
