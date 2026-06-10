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
var SquarePollHorizontal_exports = {};
__export(SquarePollHorizontal_exports, {
  default: () => SquarePollHorizontal_default
});
module.exports = __toCommonJS(SquarePollHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePollHorizontalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 416V96C448 60.654 419.348 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416ZM64 432C55.164 432 48 424.836 48 416V96C48 87.164 55.164 80 64 80H384C392.838 80 400 87.164 400 96V416C400 424.836 392.838 432 384 432H64ZM352 256C352 242.75 341.25 232 328 232H120C106.75 232 96 242.75 96 256S106.75 280 120 280H328C341.25 280 352 269.25 352 256ZM192 352C192 338.75 181.25 328 168 328H120C106.75 328 96 338.75 96 352S106.75 376 120 376H168C181.25 376 192 365.25 192 352ZM256 160C256 146.75 245.25 136 232 136H120C106.75 136 96 146.75 96 160S106.75 184 120 184H232C245.25 184 256 173.25 256 160Z" })
  }
));
SquarePollHorizontalRegular.displayName = "SquarePollHorizontalRegular";
var SquarePollHorizontal_default = SquarePollHorizontalRegular;
