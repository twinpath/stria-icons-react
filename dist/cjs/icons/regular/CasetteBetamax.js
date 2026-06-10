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
var CasetteBetamax_exports = {};
__export(CasetteBetamax_exports, {
  default: () => CasetteBetamax_default
});
module.exports = __toCommonJS(CasetteBetamax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteBetamaxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 384H464C481.625 384 496 369.625 496 352V240C496 222.375 481.625 208 464 208H352C334.375 208 320 222.375 320 240V352C320 369.625 334.375 384 352 384ZM368 256H448V336H368V256ZM512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V160H528V416ZM184 400C241.438 400 288 353.438 288 296S241.438 192 184 192S80 238.562 80 296S126.562 400 184 400ZM184 240C214.879 240 240 265.121 240 296S214.879 352 184 352S128 326.879 128 296S153.121 240 184 240ZM184 320C197.256 320 208 309.254 208 296C208 282.744 197.256 272 184 272C170.746 272 160 282.744 160 296C160 309.254 170.746 320 184 320Z" })
  }
));
CasetteBetamaxRegular.displayName = "CasetteBetamaxRegular";
var CasetteBetamax_default = CasetteBetamaxRegular;
