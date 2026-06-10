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
var Box_exports = {};
__export(Box_exports, {
  default: () => Box_default
});
module.exports = __toCommonJS(Box_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.781 145.387L394.352 64.623C383.016 44.471 361.691 32 338.57 32H109.43C86.309 32 64.984 44.471 53.648 64.623L8.219 145.387C2.83 154.967 0 165.773 0 176.764V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V176.764C448 165.773 445.17 154.967 439.781 145.387ZM352.516 88.154L392.182 158.672H247.016V80H338.57C344.342 80 349.686 83.125 352.516 88.154ZM95.484 88.154C98.314 83.125 103.658 80 109.43 80H199.016V158.672H55.818L95.484 88.154ZM384 432H64C55.178 432 48 424.822 48 416V206.672H400V416C400 424.822 392.822 432 384 432Z" })
  }
));
BoxRegular.displayName = "BoxRegular";
var Box_default = BoxRegular;
