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
var HouseUser_exports = {};
__export(HouseUser_exports, {
  default: () => HouseUser_default
});
module.exports = __toCommonJS(HouseUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseUserSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.077 231.908L511.994 185.465V47.996C511.994 39.169 504.838 31.997 495.994 31.997H431.999C423.157 31.997 416.001 39.169 416.001 47.996V101.482L309.08 7.936C303.05 2.654 295.526 0.015 288.004 0.015C281.806 0.015 273.857 1.866 266.925 7.936L10.928 231.908C-11.245 251.315 2.607 287.998 32.006 287.998H64.029V447.989C64.029 483.333 92.683 511.985 128.028 511.985H447.994C483.342 511.985 511.994 483.333 511.994 447.989V287.998H543.999C561.735 287.998 575.999 273.601 575.999 256C575.999 246.948 572.157 238.105 565.077 231.908ZM288.002 192.004C323.348 192.004 352.002 220.656 352.002 256S323.348 319.996 288.002 319.996S224.003 291.344 224.003 256S252.657 192.004 288.002 192.004ZM384.001 447.989H192.004C183.168 447.989 176.004 440.825 176.004 431.99C176.004 387.809 211.82 351.995 256.003 351.995H320.002C364.185 351.995 400.001 387.809 400.001 431.99C400.001 440.825 392.837 447.989 384.001 447.989Z " })
  }
));
HouseUserSolid.displayName = "HouseUserSolid";
var HouseUser_default = HouseUserSolid;
