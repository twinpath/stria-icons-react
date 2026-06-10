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
var EggFried_exports = {};
__export(EggFried_exports, {
  default: () => EggFried_default
});
module.exports = __toCommonJS(EggFried_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggFriedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.999 168.125V168C184.249 168.125 151.999 200.328 151.999 240.023C151.999 248.885 159.124 256 167.999 256S183.999 248.885 183.999 240.023C183.999 217.93 201.874 200.08 223.999 200.08C232.874 200.08 239.999 192.84 239.999 184.102C239.999 175.24 232.874 168.125 223.999 168.125ZM478.356 150.5C438.853 109.75 377.597 104.125 333.843 68.25C290.214 32.25 255.585 0 200.454 0C192.079 0 183.702 0.75 175.327 2.125C88.567 16.125 63.565 82.125 50.314 159.25C39.189 223.625 -4.065 286.25 0.31 352.125C4.685 418.001 53.19 480.625 115.321 502.875C132.948 509.25 149.198 512 164.2 512C228.958 512 273.212 460.875 319.966 416.5C363.597 375 413.351 378.75 460.856 342.5C517.235 299.75 532.612 202.001 478.356 150.5ZM479.856 239.75C478.106 270.75 463.481 300.375 441.605 317C423.478 330.875 403.976 337.875 383.474 345.5C356.595 355.25 326.218 366.375 297.964 393.25C292.464 398.375 287.089 403.625 281.587 409C243.958 445.5 208.456 480 164.2 480C152.2 480 139.698 477.625 126.071 472.75C75.192 454.5 35.689 402.875 32.187 350.001C30.062 317.5 42.814 283.5 56.44 247.625C66.44 221 76.817 193.5 81.817 164.625C96.944 77.25 122.696 43 180.452 33.75C187.077 32.625 193.829 32 200.454 32C240.083 32 266.962 54.25 304.214 85.25L313.591 93C337.218 112.5 363.597 123.625 388.974 134.5C414.476 145.25 438.478 155.5 456.23 173.75C478.731 195 480.733 224.25 479.856 239.75ZM223.999 112C153.499 112 95.999 169.443 95.999 240C95.999 310.682 153.374 368 223.999 368S351.999 310.557 351.999 240S294.624 112 223.999 112ZM223.999 336C170.999 335.875 127.999 292.932 127.999 240S171.124 144 223.999 144S319.999 187.068 319.999 240S276.999 335.875 223.999 336Z" })
  }
));
EggFriedLight.displayName = "EggFriedLight";
var EggFried_default = EggFriedLight;
