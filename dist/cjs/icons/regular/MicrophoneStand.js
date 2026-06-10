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
var MicrophoneStand_exports = {};
__export(MicrophoneStand_exports, {
  default: () => MicrophoneStand_default
});
module.exports = __toCommonJS(MicrophoneStand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneStandRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.375 35.628C428.876 -11.871 351.877 -11.871 304.253 35.628L275.628 64.253C253.003 86.877 240.254 117.502 240.129 149.376L12.007 406.873C-4.743 425.873 -3.868 454.622 14.007 472.497L39.381 497.997C57.256 515.872 86.131 516.747 105.13 499.997L232.004 387.248V487.997C232.004 501.252 242.749 511.997 256.003 511.997H256.003C269.258 511.997 280.003 501.252 280.003 487.997V344.874L362.627 271.875C394.502 271.75 425.126 259 447.751 236.375L476.375 207.751C523.875 160.126 523.875 83.127 476.375 35.628ZM73.381 463.997L48.006 438.623L261.128 198.001L314.003 250.875L73.381 463.997ZM361.627 224C359.127 223.875 356.752 223.625 354.252 223.25L288.753 157.751C286.628 137.127 293.253 116.502 307.253 101.127L410.876 204.751C397.377 217.126 379.877 224 361.627 224ZM444.751 170.876L341.127 67.252C370.127 40.753 414.751 41.753 442.376 69.627C470.251 97.377 470.876 142.002 444.751 170.876Z" })
  }
));
MicrophoneStandRegular.displayName = "MicrophoneStandRegular";
var MicrophoneStand_default = MicrophoneStandRegular;
