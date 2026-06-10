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
var BoxHeart_exports = {};
__export(BoxHeart_exports, {
  default: () => BoxHeart_default
});
module.exports = __toCommonJS(BoxHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxHeartRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M142.91 325.271C121.91 304.521 123.035 270.146 146.66 251.021C170.41 231.771 201.41 240.771 216.66 255.771L224.035 263.146L231.41 255.771C247.16 240.396 277.91 231.896 301.41 251.021C325.035 270.146 326.285 304.521 305.16 325.271L232.535 396.521C227.91 401.146 220.285 401.146 215.535 396.521L142.91 325.271ZM448 176.764V416C448 451.346 419.346 480 384 480H64C28.654 480 0 451.346 0 416V176.764C0 165.773 2.83 154.967 8.219 145.387L53.648 64.623C64.984 44.471 86.309 32 109.43 32H338.57C361.691 32 383.016 44.471 394.352 64.623L439.781 145.387C445.17 154.967 448 165.773 448 176.764ZM247.016 158.672H392.182L352.516 88.154C349.686 83.125 344.342 80 338.57 80H247.016V158.672ZM55.818 158.672H199.016V80H109.43C103.658 80 98.314 83.125 95.484 88.154L55.818 158.672ZM400 206.672H48V416C48 424.822 55.178 432 64 432H384C392.822 432 400 424.822 400 416V206.672Z" })
  }
));
BoxHeartRegular.displayName = "BoxHeartRegular";
var BoxHeart_default = BoxHeartRegular;
