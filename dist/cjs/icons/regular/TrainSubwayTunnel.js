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
var TrainSubwayTunnel_exports = {};
__export(TrainSubwayTunnel_exports, {
  default: () => TrainSubwayTunnel_default
});
module.exports = __toCommonJS(TrainSubwayTunnel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainSubwayTunnelRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 376C325.256 376 336 365.254 336 352C336 338.744 325.256 328 312 328C298.746 328 288 338.744 288 352C288 365.254 298.746 376 312 376ZM200 376C213.256 376 224 365.254 224 352C224 338.744 213.256 328 200 328C186.746 328 176 338.744 176 352C176 365.254 186.746 376 200 376ZM238.959 0.553C102.895 9.361 0 128.418 0 264.768V488C0 501.254 10.746 512 24 512S48 501.254 48 488V263.246C48 157.545 123.779 63.219 228.621 49.76C355.463 33.477 464 132.303 464 256V488C464 501.254 474.746 512 488 512S512 501.254 512 488V256C512 108.975 388.059 -9.102 238.959 0.553ZM364.436 434.498C385.871 420.145 400 395.732 400 368V208C400 163.816 364.184 128 320 128H192C147.818 128 112 163.816 112 208V368C112 395.732 126.129 420.145 147.564 434.498L111.031 471.031C101.656 480.406 101.656 495.594 111.031 504.969C115.719 509.656 121.844 512 128 512S140.281 509.656 144.969 504.969L200.969 448.969C201.254 448.684 201.342 448.297 201.611 448H310.389C310.658 448.297 310.746 448.684 311.031 448.969L367.031 504.969C371.719 509.656 377.844 512 384 512S396.281 509.656 400.969 504.969C410.344 495.594 410.344 480.406 400.969 471.031L364.436 434.498ZM352 368C352 385.645 337.645 400 320 400H192C174.355 400 160 385.645 160 368V304H352V368ZM352 256H160V208C160 190.355 174.355 176 192 176H320C337.645 176 352 190.355 352 208V256Z" })
  }
));
TrainSubwayTunnelRegular.displayName = "TrainSubwayTunnelRegular";
var TrainSubwayTunnel_default = TrainSubwayTunnelRegular;
