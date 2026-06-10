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
var HouseTree_exports = {};
__export(HouseTree_exports, {
  default: () => HouseTree_default
});
module.exports = __toCommonJS(HouseTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseTreeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.477 105.078C202.162 92.973 181.828 92.973 168.514 105.078L17.139 242.691C6.223 252.617 0 266.686 0 281.438V477.09C0 496.371 15.629 512 34.908 512H349.084C368.361 512 383.99 496.4 383.992 477.121C383.996 424.539 384 328.963 384 281.281C383.998 266.551 377.783 252.627 366.883 242.717L215.477 105.078ZM240 368C240 376.875 232.875 384 224 384H160C151.125 384 144 376.875 144 368V304C144 295.125 151.125 288 160 288H224C232.875 288 240 295.125 240 304V368ZM631.637 455.625L541.77 352H577.766C603.389 352 617.262 322.75 601.014 303.5L506.146 192H550.893C572.266 192 583.766 169.5 570.266 154.75L435.277 8.25C425.277 -2.75 406.779 -2.75 396.781 8.25L287.326 127.148L388.408 219.039C405.941 234.979 415.996 257.664 416 281.283L415.992 477.125C415.99 489.943 412.182 501.814 405.9 512H606.764C635.387 512 650.51 477.375 631.637 455.625Z" })
  }
));
HouseTreeSolid.displayName = "HouseTreeSolid";
var HouseTree_default = HouseTreeSolid;
