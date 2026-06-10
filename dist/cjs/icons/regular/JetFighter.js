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
var JetFighter_exports = {};
__export(JetFighter_exports, {
  default: () => JetFighter_default
});
module.exports = __toCommonJS(JetFighter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JetFighterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M609.592 210.891L488.189 166.742C475.879 162.268 463.002 160 449.912 160H381.305L298.777 48H329.188C342.438 48 353.188 37.25 353.188 24S342.438 0 329.188 0H217.188C203.938 0 193.188 10.75 193.188 24V160H190.979L165.377 129.273C156.258 118.328 142.748 112 128.5 112H80C53.49 112 32 133.49 32 160V194.73C13.357 201.32 0 219.1 0 240V272C0 292.9 13.357 310.68 32 317.268V352C32 378.51 53.49 400 80 400H128.5C142.748 400 156.258 393.672 165.377 382.725L190.979 352H193.188V488C193.188 501.25 203.938 512 217.188 512H329.188C342.438 512 353.188 501.25 353.188 488S342.438 464 329.188 464H298.777L381.305 352H449.912C463.002 352 475.879 349.732 488.184 345.258L609.592 301.109C628.561 294.213 641.188 276.184 641.188 256S628.561 217.787 609.592 210.891ZM241.188 50.73L321.703 160H241.188V50.73ZM241.188 461.27V352H321.703L241.188 461.27ZM471.785 300.146C464.773 302.695 457.373 304 449.912 304H176C171.244 304 166.734 306.113 163.689 309.766L128.5 352H80V280H161.188C174.438 280 185.188 269.25 185.188 256S174.438 232 161.188 232H80V160H128.5L163.703 202.25C166.74 205.893 171.236 208 175.979 208H449.912C457.373 208 464.773 209.305 471.785 211.854L593.188 256L471.785 300.146Z" })
  }
));
JetFighterRegular.displayName = "JetFighterRegular";
var JetFighter_default = JetFighterRegular;
