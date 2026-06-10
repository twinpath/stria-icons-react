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
var HouseBuilding_exports = {};
__export(HouseBuilding_exports, {
  default: () => HouseBuilding_default
});
module.exports = __toCommonJS(HouseBuilding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseBuildingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 0H368C341.49 0 320 21.49 320 48V156.85L384 215.029V208C384 199.162 391.164 192 400 192H432C440.836 192 448 199.162 448 208V240C448 248.836 440.836 256 432 256H411.611C414.211 264.154 416 272.582 416 281.281V288H432C440.836 288 448 295.162 448 304V336C448 344.836 440.836 352 432 352H415.998L415.992 477.125C415.99 489.943 412.182 501.814 405.9 512H608C625.674 512 640 497.672 640 480V48C640 21.49 618.51 0 592 0ZM448 144C448 152.836 440.836 160 432 160H400C391.164 160 384 152.836 384 144V112C384 103.162 391.164 96 400 96H432C440.836 96 448 103.162 448 112V144ZM576 336C576 344.836 568.836 352 560 352H528C519.164 352 512 344.836 512 336V304C512 295.162 519.164 288 528 288H560C568.836 288 576 295.162 576 304V336ZM576 240C576 248.836 568.836 256 560 256H528C519.164 256 512 248.836 512 240V208C512 199.162 519.164 192 528 192H560C568.836 192 576 199.162 576 208V240ZM576 144C576 152.836 568.836 160 560 160H528C519.164 160 512 152.836 512 144V112C512 103.162 519.164 96 528 96H560C568.836 96 576 103.162 576 112V144ZM215.477 105.078C202.162 92.973 181.828 92.973 168.514 105.078L17.139 242.691C6.223 252.617 0 266.686 0 281.438V477.09C0 496.371 15.629 512 34.908 512H349.084C368.361 512 383.99 496.4 383.992 477.121C383.996 424.539 384 328.963 384 281.281C383.998 266.551 377.783 252.627 366.883 242.717L215.477 105.078ZM240 368C240 376.875 232.875 384 224 384H160C151.125 384 144 376.875 144 368V304C144 295.125 151.125 288 160 288H224C232.875 288 240 295.125 240 304V368Z" })
  }
));
HouseBuildingSolid.displayName = "HouseBuildingSolid";
var HouseBuilding_default = HouseBuildingSolid;
