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
var HouseNight_exports = {};
__export(HouseNight_exports, {
  default: () => HouseNight_default
});
module.exports = __toCommonJS(HouseNight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseNightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112.412 224.001C169.665 224.001 203.591 182.468 203.591 169.521C203.591 155.264 190.984 149.133 183.11 149.133C178.916 149.133 176.398 150.578 168.008 150.578C135.598 150.578 108.851 124.286 108.851 91.4C108.851 42.073 149.187 46.837 149.187 22.181C149.187 19.124 147.563 4.573 132.5 1.875C125.625 0.75 118.875 0.125 112 0C50.125 0 0 50.125 0 112C0 173.141 49.231 224.001 112.412 224.001ZM32.085 111.895C32.085 69.386 63.698 39.491 97.75 33.25C84.061 49.842 76.87 70.454 76.87 91.358C76.87 160.823 140.397 179.042 152.25 181.125C139.768 188.354 125.883 191.934 112.046 191.934C62.067 191.934 32.085 150.127 32.085 111.895ZM336.166 277.344V362.605C336.166 374.482 345.799 383.982 357.559 383.982H442.881C454.641 383.982 464.273 374.357 464.273 362.605V277.344C464.273 265.592 454.766 255.967 442.881 255.967H357.559C345.799 255.967 336.166 265.467 336.166 277.344ZM368.193 287.971H432.246V351.979H368.193V287.971ZM640.001 307.618C640.001 303.344 638.306 299.093 634.916 295.971L576.367 244.715V143.951C576.367 135.076 569.236 127.949 560.354 127.949S544.34 135.076 544.34 143.951V216.711L410.725 99.943C407.717 97.315 403.968 96 400.219 96C396.469 96 392.719 97.315 389.711 99.945L165.523 295.971C161.862 299.156 160.001 303.554 160.001 307.988C160.001 316.51 166.87 324.024 176.005 324.024C179.747 324.024 183.51 322.728 186.541 320.1L224.072 287.221V447.992C224.072 483.342 252.75 512 288.125 512H512.312C547.689 512 576.367 483.342 576.367 447.992V287.221L613.898 319.975C616.869 322.439 620.493 323.648 624.094 323.648C633.175 323.648 640.001 316.236 640.001 307.618ZM544.34 447.992C544.34 465.668 530.002 479.996 512.312 479.996H288.125C270.437 479.996 256.1 465.668 256.1 447.992V263.967C255.975 262.592 255.723 261.217 255.348 259.967L400.219 133.199L544.34 259.217V447.992ZM208 80H240V112C240 120.844 247.156 128 256 128S272 120.844 272 112V80H304C312.844 80 320 72.844 320 64S312.844 48 304 48H272V16C272 7.156 264.844 0 256 0S240 7.156 240 16V48H208C199.156 48 192 55.156 192 64S199.156 80 208 80ZM144 368H112V336C112 327.156 104.844 320 96 320S80 327.156 80 336V368H48C39.156 368 32 375.156 32 384S39.156 400 48 400H80V432C80 440.844 87.156 448 96 448S112 440.844 112 432V400H144C152.844 400 160 392.844 160 384S152.844 368 144 368Z " })
  }
));
HouseNightLight.displayName = "HouseNightLight";
var HouseNight_default = HouseNightLight;
