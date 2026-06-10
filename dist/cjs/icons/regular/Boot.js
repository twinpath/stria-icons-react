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
var Boot_exports = {};
__export(Boot_exports, {
  default: () => Boot_default
});
module.exports = __toCommonJS(Boot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BootRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.986 263.746L352 248V144C369.75 144 384 129.75 384 112V48C384 21.49 362.51 0 336 0H48C21.49 0 0 21.49 0 48V466.75C0 475.123 3.314 483.156 9.219 489.093L32 512H96L128 480L160 512H224L256 480L288 512H352L384 480L416 512H480L502.625 489.375C508.628 483.372 512 475.231 512 466.742V388C512 329.229 472.002 278 414.986 263.746ZM48 48H336V96H48V48ZM464 416H48V144H304V192H240C231.2 192 224 199.2 224 208V208C224 216.8 231.2 224 240 224H304V256H240C231.2 256 224 263.2 224 272V272C224 280.8 231.2 288 240 288H314.125L403.375 310.25C439.125 319.25 464 351.125 464 387.875V416Z" })
  }
));
BootRegular.displayName = "BootRegular";
var Boot_default = BootRegular;
