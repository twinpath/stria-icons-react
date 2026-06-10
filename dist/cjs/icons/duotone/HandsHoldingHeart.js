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
var HandsHoldingHeart_exports = {};
__export(HandsHoldingHeart_exports, {
  default: () => HandsHoldingHeart_default
});
module.exports = __toCommonJS(HandsHoldingHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandsHoldingHeartDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.984 236C205.953 222.25 185.781 219.969 172.016 231C158.203 242.062 155.969 262.188 167.016 276L185.873 306.563C194.773 317.696 193.883 333.735 183.807 343.805C172.021 355.594 152.607 354.516 142.195 341.5L80 256.766V103.999C80 81.906 62.092 63.999 40 63.999S0 81.906 0 103.999V308.746C0 323.289 4.949 337.395 14.031 348.75L135.016 500.001C141.082 507.587 150.268 512.001 159.98 512.001H256C273.674 512.001 288 497.673 288 480.001V358.438C288 336.649 280.586 315.512 266.977 298.5L216.984 236ZM600 63.999C577.908 63.999 560 81.906 560 103.999V256.766L497.805 341.5C487.393 354.516 467.979 355.594 456.193 343.805C446.117 333.735 445.227 317.696 454.127 306.563L472.984 276C484.031 262.188 481.797 242.062 467.984 231C454.219 219.969 434.047 222.25 423.016 236L373.023 298.5C359.414 315.512 352 336.649 352 358.438V480.001C352 497.673 366.326 512.001 384 512.001H480.02C489.732 512.001 498.918 507.587 504.984 500.001L625.969 348.75C635.051 337.395 640 323.289 640 308.746V103.999C640 81.906 622.092 63.999 600 63.999Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M435.972 17.53C405.222 -9.22 359.222 -4.345 331.097 25.28L319.972 36.905L308.847 25.28C280.722 -4.345 234.722 -9.22 203.972 17.53C168.722 48.156 166.722 103.156 198.347 136.281L307.222 250.531C314.222 257.906 325.722 257.906 332.722 250.531L441.722 136.281C473.222 103.156 471.347 48.156 435.972 17.53Z" })
    ]
  }
));
HandsHoldingHeartDuotone.displayName = "HandsHoldingHeartDuotone";
var HandsHoldingHeart_default = HandsHoldingHeartDuotone;
