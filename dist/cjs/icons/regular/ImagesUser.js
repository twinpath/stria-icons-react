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
var ImagesUser_exports = {};
__export(ImagesUser_exports, {
  default: () => ImagesUser_default
});
module.exports = __toCommonJS(ImagesUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagesUserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H160C124.654 32 96 60.652 96 96V320C96 355.346 124.654 384 160 384H512C547.346 384 576 355.346 576 320V96C576 60.652 547.346 32 512 32ZM528 320C528 328.822 520.822 336 512 336H446.387C438.973 299.484 406.703 272 368 272H304C265.297 272 233.027 299.484 225.613 336H160C151.178 336 144 328.822 144 320V96C144 87.178 151.178 80 160 80H512C520.822 80 528 87.178 528 96V320ZM80 432H480C480 458.508 458.51 480 432 480H64C28.654 480 0 451.344 0 416V144C0 117.492 21.49 96 48 96V400C48 417.672 62.326 432 80 432ZM400 176C400 211.346 371.346 240 336 240S272 211.346 272 176S300.654 112 336 112S400 140.654 400 176Z" })
  }
));
ImagesUserRegular.displayName = "ImagesUserRegular";
var ImagesUser_default = ImagesUserRegular;
