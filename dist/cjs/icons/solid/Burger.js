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
var Burger_exports = {};
__export(Burger_exports, {
  default: () => Burger_default
});
module.exports = __toCommonJS(Burger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurgerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 256H48C21.5 256 0 277.5 0 304S21.5 352 48 352H464C490.5 352 512 330.5 512 304S490.5 256 464 256ZM58.625 224H453.25C487.875 224 507.875 180.125 488.125 148.125C448 83.25 359.5 32.125 256 32C152.5 32.125 64 83.25 23.75 148.125C4 180.125 24.125 224 58.625 224ZM384 112C392.875 112 400 119.125 400 128S392.875 144 384 144S368 136.875 368 128S375.125 112 384 112ZM256 80C264.875 80 272 87.125 272 96S264.875 112 256 112S240 104.875 240 96S247.125 80 256 80ZM128 112C136.875 112 144 119.125 144 128S136.875 144 128 144C119.125 144 112 136.875 112 128S119.125 112 128 112ZM480 384H32C23.125 384 16 391.125 16 400V416C16 451.375 44.625 480 80 480H432C467.375 480 496 451.375 496 416V400C496 391.125 488.875 384 480 384Z" })
  }
));
BurgerSolid.displayName = "BurgerSolid";
var Burger_default = BurgerSolid;
